import {BfError, copy, equals, Fn, isUndefined} from '@bitfiber/utils';

import {completeWith} from '../../../operators';
import {DataSource} from '../../../source';
import {EmitterOrObservable} from '../../types';
import {AbstractEmitter} from '../../emitters/abstract-emitter/abstract-emitter';

let defaultComparison: Comparison = 'equals';

/**
 * Represents a comparison operation, which can be a predefined comparison type or a custom function.
 *
 * The `Comparison` type allows for different ways to compare two values:
 * - `'equals'`: A deep comparison using the `equals` function from the package '@bitfiber/utils'.
 * - `'strict'`: A strict equality comparison, using strict equality (`===`).
 * - `((a: any, b: any) => boolean)`: A custom comparison function that takes two arguments
 *   and returns a boolean indicating whether the values are considered equal
 *   based on the provided logic
 */
export type Comparison = 'equals' | 'strict' | ((a: any, b: any) => boolean);

/**
 * Changes the default comparison method that will be used for all states.
 * This can be one of the predefined comparison types: 'equals' for deep comparison,
 * 'strict' for strict equality, or a custom comparison function
 *
 * @param comparison - The comparison method to be set as the default
 */
export function changeDefaultComparison(comparison: Comparison): void {
  defaultComparison = comparison;
}

/**
 * Represents an abstract state in a reactive store, extending the functionality of `AbstractEmitter`.
 *
 * The `AbstractState` class serves as a base class for implementing state management
 * in a reactive programming context. It extends `AbstractEmitter`, allowing it to emit values
 * to subscribers, while also encapsulating the logic for managing and maintaining
 * a specific state of type `T`.
 *
 * Subclasses of `AbstractState` are expected to implement specific behavior
 * related to state management, such as updating, retrieving, and reacting to changes in the state.
 * This class provides the foundational tools necessary for managing state
 * in a consistent and reactive manner
 *
 * @template T - The type of data managed and emitted by the state
 */
export abstract class AbstractState<T> extends AbstractEmitter<T> {
  /**
   * Stores the initial value of the state when the instance is created.
   * It represents the starting point for the state
   */
  protected initialValue: T;

  /**
   * References an optional `DataSource` that can be used to supply the initial
   * or ongoing state for the instance. If a source is provided, it may serve as the origin
   * of the data being managed and emitted by the state. The `source` can be used to synchronize
   * or pull data from an external provider, ensuring that the state remains consistent
   * with the external data source.
   *
   * This property is `undefined` by default, meaning that if no source is specified,
   * the state operates independently without relying on an external data provider
   */
  protected source?: DataSource<T>;

  /**
   * Defines the comparison logic that will be used to evaluate
   * whether the state has changed. The `comparison` property can be set to a predefined
   * comparison type (`'equals'` or `'strict'`) or a custom comparison function.
   *
   * By default, it is initialized to `defaultComparison`, which provides the default comparison logic
   */
  protected comparison: Comparison = defaultComparison;

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
   * Constructs an instance of the `AbstractState` class and initializes the state
   * with the provided `initialValue`. The initial value serves as the starting point
   * for the state, which can later be updated and emitted to subscribers
   *
   * @param initialValue - The initial value of the state
   */
  constructor(initialValue: T) {
    super();
    this.initialValue = initialValue;
  }

  /**
   * Returns the current state value.
   * This abstract method must be implemented by subclasses to return the current state
   * @abstract
   */
  abstract get(): T;

  /**
   * Updates the current state with a new value.
   *
   * This abstract method must be implemented by subclasses to modify the state.
   * It allows the state to be updated with a new value, and typically triggers any associated
   * reactions or emissions to subscribers based on the updated state
   *
   * @abstract
   *
   * @param value - The new value to set as the current state
   *
   * @returns the instance of the current state, allowing for method chaining
   */
  abstract set(value: T): this;

  /**
   * Updates the current state using an updater function.
   *
   * This abstract method must be implemented by subclasses to modify the state
   * based on a provided updater function. The `update` method allows the current state
   * to be transformed by applying a function that receives the current state
   * and returns a new state. This is useful for scenarios where the state update
   * depends on its current value
   *
   * @abstract
   *
   * @param updater - A function that takes the current state as its argument
   * and returns the new state
   *
   * @returns the instance of the current state, allowing for method chaining
   */
  abstract update(updater: (state: T) => T): this;

  /**
   * Receives values from one or more emitters, states, or observables
   * and emits them to all subscribers of this state.
   *
   * This method allows this state to listen to external sources and relay their
   * emitted values to its own subscribers, effectively linking multiple data streams together
   *
   * @param inputs - One or more emitters, states, or observables
   * that provide values to be emitted by this state
   *
   * @returns the instance of the current state, allowing for method chaining
   */
  override receive(...inputs: EmitterOrObservable<T extends void ? T : T>[]): this;

  /**
   * Receives a value from an emitter, state, or observable, applies a reducer function to convert
   * this value to the state's type, and emits the result to all subscribers of this state.
   *
   * This method allows this state to listen to external source and relay the transformed
   * emitted value to its own subscribers, effectively linking data streams together
   *
   * @param input - an emitter, state or observable that provide values to be emitted by this state
   *
   * @param reducer - A function that converts or transforms the received value
   * from the input type to the type expected by this state.
   * This function takes the value emitted by the input and this state value as parameters,
   * and returns the new state value
   *
   * @returns the instance of the current state, allowing for method chaining
   */
  override receive<I>(input: EmitterOrObservable<I>, reducer: (value: I, state: T) => T): this;

  override receive(...inputs: (EmitterOrObservable<any> | Fn)[]): this {
    return super.receive(...<any>inputs);
  }

  /**
   * Resets the state to its original value that was set during initialization.
   * This is useful for reverting the state back to its starting condition, discarding any changes
   * that have occurred since the state was first established
   *
   * @returns the instance of the current state, allowing for method chaining
   */
  reset(): this {
    this.throwIfCompleted('reset');
    const initialValue = copy(this.initialValue);
    this.setValue(initialValue);
    return this;
  }

  /**
   * Sets a custom comparison strategy that will be used to determine if the state has changed.
   * This comparison can be one of the predefined comparison types (`'equals'` or `'strict'`)
   * or a custom comparison function
   *
   * @param comparison - The comparison method to use for evaluating state changes
   *
   * @returns the instance of the current state, allowing for method chaining
   */
  compareBy(comparison: Comparison): this {
    this.throwIfInitialized('compareBy');
    this.throwIfCompleted('compareBy');
    this.comparison = comparison;
    return this;
  }

  /**
   * Connects the state to an external data source `DataSource`, which provides the data
   * that the state will manage and emit. By connecting to a data source, the state can synchronize
   * with external data, ensuring it remains consistent with the source. This is useful in scenarios
   * where the state needs to reflect or react to data from an external provider.
   *
   * Once connected, the state automatically updates from the data source whenever the source changes,
   * and conversely, updates the data source whenever the state value is changed. This bidirectional
   * synchronization ensures that both the state and the data source remain in sync
   *
   * @param source - The external data source to connect to the state
   *
   * @returns the instance of the current state, allowing for method chaining
   */
  connect(source: DataSource<T>): this {
    this.throwIfInitialized('connect');
    this.throwIfCompleted('connect');
    if (this.source) {
      throw new BfError(
        'This state already has a data source',
        {code: 'bf_rx_store_State_connect_1'},
      );
    }

    const sourceValue = source.get();
    this.source = source;

    if (isUndefined(sourceValue)) {
      const value = this.get();
      if (!isUndefined(value)) {
        source.set(value);
      }
    } else {
      this.setValue(sourceValue, true);
    }

    source.$.pipe(completeWith(this.$))
      .subscribe(sourceValue => {
        this.throwIfCompleted('source subscription');
        this.setValue(sourceValue, true);
      });
    return this;
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
   * Returns the current value
   * This method is intended for internal use only and should not be used externally.
   * It is typically used by subclasses or other internal components
   * @internal
   */// eslint-disable-next-line @typescript-eslint/naming-convention
  _get(): T {
    return this.get();
  }

  /**
   * Emits a value to all emitter subscribers
   * This method is intended for internal use only and should not be used externally.
   * It is typically used by subclasses or other internal components
   * @internal
   */// eslint-disable-next-line @typescript-eslint/naming-convention
  _emit(value: T): void {
    this.throwIfCompleted('set');
    this.setValue(value);
  }

  /**
   * Sets the current state value, with an optional flag indicating the source of the update.
   *
   * This abstract method must be implemented by subclasses and should encapsulate the logic
   * for updating the current state value. The `setValue` method allows for setting the value
   * of the state and includes an optional `fromSource` flag that indicates whether the update
   * is originating from an external data source.
   *
   * When `fromSource` is `true`, it implies that the value is being set as a result
   * of synchronization with an external data source. This distinction can be useful
   * for differentiating between internal updates and those triggered by external sources
   *
   * @abstract
   *
   * @param value - The new value to set for the state
   * @param [fromSource=false] - Optional flag indicating whether the update is
   * from an external data source. If `true`, the update is considered to originate from the source
   */
  protected abstract setValue(value: T, fromSource?: boolean): void;

  /**
   * Sets the new state value for an external data source.
   * This method ensures that the new state value is properly set and communicated to
   * the external source, maintaining synchronization between the internal state
   * and the external data provider
   *
   * @param value - The new state value to set for an external data source
   */
  protected setValueForSource(value: T): void {
    if (isUndefined(value)) {
      this.source?.remove();
    } else {
      this.source?.set(value);
    }
  }

  /**
   * Compares the current state value with a new value to determine
   * if they are equal according to the specific comparison logic. This method leverages
   * the configured comparison strategy, which could be strict equality, deep equality,
   * or a custom comparison.
   *
   * This method is essential for detecting changes in state values and deciding whether
   * updates or emissions should be triggered
   *
   * @param a - The first value to compare
   * @param b - The second value to compare
   */
  protected compare(a: T, b: T): boolean {
    if (this.comparison === 'strict') {
      return a === b;
    } else if (this.comparison === 'equals') {
      return equals(a, b);
    } else {
      return this.comparison(a, b);
    }
  }
}
