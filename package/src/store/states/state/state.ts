import {copy} from '@bitfiber/utils';
import {Observable, of, share, Subject} from 'rxjs';

import {startWithDefined} from '../../../operators';
import {StateGetter} from '../../types';
import {AbstractState} from '../abstract-state/abstract-state';

/**
 * Creates an instance that combines the functionality of both the `State` class
 * and the `StateGetter` function, initialized with the provided `initialValue`.
 * Optionally, you can provide an `onInit` callback function, which is called just before
 * the initialization process, allowing you to perform setup tasks or configure the state before
 * it starts emitting values
 *
 * @template T - The type of the state value
 *
 * @param initialValue - The initial value of the state
 * @param [onInit] - An optional callback function that is executed just before
 * the initialization of the state, allowing you to perform setup tasks or configure
 * the state before it starts emitting values
 *
 * @returns - A new `State` instance that also acts as the `StateGetter` function
 * to get the current state value
 */
export function state<T>(
  initialValue: T,
  onInit?: (state: State<T> & StateGetter<T>) => void,
): State<T> & StateGetter<T> {
  const state = new State<T>(initialValue) as State<T> & StateGetter<T>;
  return onInit ? state.onInit(onInit) : state;
}

/**
 * Represents a concrete state in a reactive store, extending the functionality of `AbstractState`.
 * This class encapsulates the logic for updating, resetting and maintaining a state,
 * reacting to changes, and notifying subscribers whenever the state is updated.
 * It can also be connected to external data sources to synchronize its value with external data,
 * ensuring consistency across different parts of an application
 *
 * @template T - The type of data managed and emitted by the state
 */
export class State<T> extends AbstractState<T> {
  /**
   * An observable that serves as the source for all state streams.
   * It allows subscribers to reactively observe changes or updates to the state, allowing them to
   * respond dynamically as new values are emitted
   */
  readonly $: Observable<T>;

  /**
   * The current value of the state
   */
  protected value: T;

  /**
   * The starting value before multiple synchronous changes, used to compare this starting value
   * with the final value after the changes have occurred to determine whether
   * the changes should be emitted to subscribers.
   * After synchronous changes and the comparison, `startValue` is reset to `null`
   */
  protected startValue: T | null = null;

  /**
   * This subject that is used to delay the emission of the initial state value to new subscribers
   * until all synchronous changes have been completed. This ensures that subscribers receive
   * the most up-to-date value after all pending updates have been applied.
   * After synchronous changes and the comparison, `deferredValue$` is reset to `null`
   */
  protected deferredValue$: Subject<T> | null = null;

  /**
   * Indicates whether the most recent state value was set as a result of synchronization
   * with an external data source. When `isValueFromSource` is `true`, it implies
   * that the state value was updated due to an external source rather than an internal change
   */
  protected isValueFromSource = false;

  /**
   * Indicates whether one of the previous state values was set as a result of synchronization
   * with an external data source. When `isPrevValueFromSource` is `true`,
   * it implies that one of the previous state values was updated due to an external source
   * rather than an internal change
   */
  protected isPrevValueFromSource = false;

  /**
   * Indicates whether the state uses lazy emission.
   *
   * When `hasLazyEmission` is set to `true`, the state will defer emitting its initial value
   * until an explicit trigger occurs. This can be useful in scenarios where immediate emission
   * is not desired, and you want more control over when the state is first emitted to subscribers.
   *
   * By default, `hasLazyEmission` is set to `false`, meaning the state will emit its initial value
   * as soon as it is available
   */
  protected hasLazyEmission = false;

  /**
   * Indicates whether the state uses a one-time lazy emission for the next created stream.
   *
   * When `hasLazyEmissionOnce` is set to `true`, the state will defer emitting its initial value
   * until an explicit trigger occurs. This lazy emission behavior will apply only once for the next
   * stream that is created. After this initial deferred emission, subsequent streams will emit
   * values immediately as changes occur.
   *
   * This property can be toggled multiple times before creating streams, allowing you
   * to control when the lazy emission behavior is applied.
   *
   * By default, `hasLazyEmissionOnce` is set to `false`, meaning that streams will emit their
   * initial values immediately upon creation unless this behavior is explicitly overridden
   */
  protected hasLazyEmissionOnce = false;

  /**
   * Creates a new instance that combines the functionality of both the `State` class
   * and the `StateGetter` function, allowing you to manage and retrieve the state value easily.
   * The constructor initializes the state with the provided `initialValue`,
   * which serves as the starting point for the state
   *
   * @param initialValue - The initial value of the state
   */
  constructor(initialValue: T) {
    super(initialValue);
    const stateAndGetter = ((): T => stateAndGetter.get()) as State<T> & StateGetter<T>;
    this.value = copy(initialValue);

    Object.setPrototypeOf(stateAndGetter, new.target.prototype);
    Object.assign(stateAndGetter, this);

    this.$ = (stateAndGetter as any).$ = this.subject.pipe(
      stateAndGetter.manager(),
      share(),
      startWithDefined(() => {
        const {hasLazyEmission, hasLazyEmissionOnce, deferredValue$} = stateAndGetter;
        stateAndGetter.hasLazyEmissionOnce = false;
        return (hasLazyEmission || hasLazyEmissionOnce
          ? undefined
          : (deferredValue$ || of(stateAndGetter())).pipe(stateAndGetter.manager())) as T;
      }),
    );

    return stateAndGetter;
  }

  /**
   * Returns the current value of the state.
   * This method is useful for accessing the state at any point in time,
   * allowing other store items or consumers to retrieve the latest value
   */
  get(): T {
    this.throwIfCompleted('get');
    return this.value;
  }

  /**
   * Updates the state to the provided `value` immediately, but the emission of this
   * new value to subscribers will be performed asynchronously. This means that if multiple
   * synchronous updates are made in quick succession, only the last update will be emitted,
   * optimizing the emission process to prevent unnecessary updates
   *
   * @param value - The new value to set as the current state
   *
   * @returns the instance of the current state, allowing for method chaining
   */
  set(value: T): this {
    this._emit(value);
    return this;
  }

  /**
   * Updates the current state using an updater function that takes the current state as its argument
   * and returns the new state. The state is updated immediately, but the emission of this new value
   * to subscribers will occur asynchronously. This means that if multiple synchronous updates
   * are made in quick succession, only the last update will be emitted,
   * optimizing the emission process to prevent unnecessary updates
   *
   * @param updater - A function that takes the current state as its argument
   * and returns the new state
   *
   * @returns the instance of the current state, allowing for method chaining
   */
  update(updater: (state: T) => T): this {
    return this.set(updater(this.get()));
  }

  /**
   * Enables lazy emission for the state, meaning that the state will defer emitting its initial value
   * to subscribers until an explicit trigger occurs. This can be useful in scenarios where you want
   * more control over when the state emits its value, rather than emitting immediately
   *
   * @returns the instance of the current state, allowing for method chaining
   */
  useLazyEmission(): this {
    this.throwIfInitialized('useLazyEmission');
    this.throwIfCompleted('useLazyEmission');
    this.hasLazyEmission = true;
    return this;
  }

  /**
   * Enables one-time lazy emission for the next created stream.
   *
   * Once the `useLazyEmissionOnce` method is called, the state will defer emitting its initial value
   * until an explicit trigger occurs. This lazy emission behavior will apply only once for the next
   * stream that is created. After this initial deferred emission, subsequent streams will emit values
   * immediately as changes occur.
   *
   * This method can be called multiple times before creating streams, allowing you to control
   * when the lazy emission behavior is applied.
   *
   * By default, one-time lazy emission is disabled, meaning that streams will emit their initial
   * values immediately upon creation unless this behavior is explicitly overridden.
   *
   * @returns the instance of the current state, allowing for method chaining
   */
  useLazyEmissionOnce(): this {
    this.throwIfCompleted('useLazyEmissionOnce');
    this.hasLazyEmissionOnce = true;
    return this;
  }

  /**
   * Updates the current state value and encapsulates the logic for managing state updates.
   * This method includes an optional `fromSource` flag that indicates whether the update
   * is originating from an external data source.
   *
   * When `fromSource` is `true`, it implies that the value is being set as a result
   * of synchronization with an external data source. This distinction is useful
   * for differentiating between internal updates and those triggered by external sources
   *
   * @param value - The new value to set for the state
   *
   * @param [fromSource=false] - Optional flag indicating whether the update is
   * from an external data source. If `true`, the update is considered to originate from the source
   */
  protected setValue(value: T, fromSource = false): void {
    if (!this.deferredValue$) {
      this.startValue = this.value;
      this.deferredValue$ = new Subject<T>();

      // Emits the last value after all sync actions
      setTimeout(() => {
        if (!this.compare(this.startValue as T, this.value)) {
          this.subject.next(this.value);
          if (this.source && !this.isValueFromSource) {
            this.setValueForSource(this.value);
          }
        } else {
          // Emits an initial value for subscribers
          this.deferredValue$?.next(this.value);

          // if a source value emits before other values, the source may need to be changed
          if (this.source && !this.isValueFromSource && this.isPrevValueFromSource) {
            const sourceValue = this.source.get() as T;
            if (!this.compare(this.value, sourceValue)) {
              this.setValueForSource(this.value);
            }
          }
        }

        this.startValue = null;
        this.deferredValue$ = null;
        this.isValueFromSource = false;
        this.isPrevValueFromSource = false;
      });
    }

    this.value = value;
    this.isValueFromSource = fromSource;

    if (fromSource) {
      this.isPrevValueFromSource = true;
    }
  }
}
