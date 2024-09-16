import {Observable, share} from 'rxjs';

import {AbstractEmitter} from '../abstract-emitter/abstract-emitter';

/**
 * Creates and returns a new `Emitter` instance in a convenient way.
 *
 * You can optionally provide an `onInit` callback that will be invoked just before
 * the emitter's initialization, allowing you to perform setup tasks or configure the emitter
 * before it starts emitting values
 *
 * @template T - The type of data emitted by this emitter
 *
 * @param [onInit] - An optional callback function that is called with the
 * newly created `Emitter` instance just before its initialization.
 * This function can be used to set up or configure the emitter
 */
export function emitter<T>(onInit?: (emitter: Emitter<T>) => void): Emitter<T> {
  const emitter = new Emitter<T>();
  return onInit ? emitter.onInit(onInit) : emitter;
}

/**
 * Extends the `AbstractEmitter` class and provides functionality to create streams,
 * handle subscriptions, emit values to subscribers, and integrate with other reactive sources
 * such as emitters, states, subjects, observables.
 *
 * The `Emitter` class is typically used when you need a straightforward emitter that can
 * broadcast values or events to all its subscribers or other reactive sources, such as emitters,
 * states, subjects
 *
 * @template T - The type of data emitted by this emitter
 */
export class Emitter<T> extends AbstractEmitter<T> {
  /**
   * An observable that serves as the source for all emitter streams.
   * It allows subscribers to listen to and react to emitted values or events
   */
  readonly $: Observable<T>;

  constructor() {
    super();
    this.$ = this.subject.pipe(this.manager(), share());
  }

  /**
   * Emits the specified value to all subscribers currently listening to the emitter.
   * It is used to trigger reactive updates or actions in response to the emitted value
   *
   * @param value - The value to be emitted to all subscribers
   *
   * @returns the instance of the current emitter, allowing for method chaining
   */
  emit(value: T): this {
    this._emit(value);
    return this;
  }

  /**
   * Returns the current value
   * This method is intended for internal use only and should not be used externally.
   * It is typically used by subclasses or other internal components
   * @internal
   */// eslint-disable-next-line @typescript-eslint/naming-convention
  _get(): T {
    this.throwIfCompleted('get');
    return <T>undefined;
  }

  /**
   * Emits a value to all emitter subscribers
   * This method is intended for internal use only and should not be used externally.
   * It is typically used by subclasses or other internal components
   * @internal
   */// eslint-disable-next-line @typescript-eslint/naming-convention
  _emit(value: T): void {
    this.throwIfCompleted('emit');
    this.subject.next(value);
  }
}
