import {BfError, Fn, isFunction, stub} from '@bitfiber/utils';
import {
  isObservable, combineLatest, zip, tap, Subject, Observable, OperatorFunction, Observer, take,
} from 'rxjs';

import {completeWith, operator} from '../../../operators';
import {
  EmitterOrSubject, EmitterOrObservable, EmitterOrObservableTuple, SpreadFn,
} from '../../types';
import {AbstractItem} from '../../common/abstract-item/abstract-item';
import {AbstractState} from '../../states/abstract-state/abstract-state';
import {activeGroup} from '../../groups/abstract-group/abstract-group';

/**
 * Alias for OperatorFunction
 */
type OP<A, B> = OperatorFunction<A, B>;

/**
 * AbstractEmitter serves as a base class for the implementation of emitters
 * in a reactive programming context. Emitters are responsible for creating,
 * managing streams and emitting values to these streams.
 *
 * This abstract class provides the foundational mechanisms for creating,
 * managing streams and emitting values,
 * while leaving the specific implementation details to be defined by subclasses
 *
 * @abstract
 * @template T - The type of data emitted by this emitter
 */
export abstract class AbstractEmitter<T> extends AbstractItem {
  /**
   * An observable that emits the values produced by this emitter
   * @abstract
   */
  abstract $: Observable<T>;

  /**
   * A subject that serves as the underlying mechanism for emitting values.
   * This subject allows the emitter to push new values to all subscribers,
   * acting as the core component for managing and distributing emitted data
   * @readonly
   */
  protected readonly subject = new Subject<T>();

  /**
   * Flag indicating whether the emitter's operations are deferred
   */
  private deferred = false;

  /**
   * An array of RxJs operator functions that manage the flow of data through all emitter streams
   */
  private managementOperators?: OperatorFunction<T, T>[];

  /**
   * Returns the current value
   * This method is intended for internal use only and should not be used externally.
   * It is typically used by subclasses or other internal components
   * @internal
   * @abstract
   */// eslint-disable-next-line @typescript-eslint/naming-convention
  abstract _get(): T;

  /**
   * Emits a value to all emitter subscribers
   * This method is intended for internal use only and should not be used externally.
   * It is typically used by subclasses or other internal components
   * @internal
   * @abstract
   */// eslint-disable-next-line @typescript-eslint/naming-convention
  abstract _emit(value: T): void;

  /**
   * Registers a deferred actions hook that is called before the emitter is initialized.
   *
   * This hook allows you to perform any necessary setup or actions on the emitter, such as
   * attaching effects, initiating state, or applying management operators, before the emitter
   * begins emitting values
   *
   * @param deferredActions - any actions performed on the emitter such as effects and others
   *
   * @returns the instance of the current emitter, allowing for method chaining
   */
  onInit(deferredActions: (emitter: this) => void): this {
    this.throwIfInitialized('onInit');
    this.throwIfCompleted('onInit');
    if (this.deferred) {
      throw new BfError(
        'The onInit function can only be used once',
        {code: 'bf_rx_store_AbstractEmitter_onInit_1'},
      );
    }
    this.executeDeferredActions = () => deferredActions(this);
    this.deferred = true;
    return this;
  }

  /**
   * Initiates the emitter.
   *
   * In most cases, this method will be called automatically by a group or store managing
   * the emitter, so you generally don't need to call it manually unless you have a specific
   * reason to do so
   *
   * @returns the instance of the current emitter, allowing for method chaining
   */
  initialize(): this {
    this.throwIfInitialized('initialize');
    this.throwIfCompleted('initialize');

    if (!this.isInitStarted()) {
      this.startInitialization();
      this.executeDeferredActions();
      if (!this.isTwoStepInitialization()) {
        this.finishInitialization();
      }
    }

    return this;
  }

  /**
   * Completes the emitter, signaling to all subscribers that no more values will be emitted.
   *
   * Once the emitter is completed, it will not emit any further values, and any subsequent
   * subscriptions will immediately receive an error.
   *
   * In most cases, this method will be called automatically by a group or store managing
   * the emitter, so you generally don't need to call it manually unless you have a specific
   * reason to do so
   */
  complete(): void {
    this.throwIfCompleted('complete');
    this.subject.complete();
    this.finishCompletion();
  }

  /**
   * Defines management operators for all emitter streams.
   * These operators are applied to the streams managed by this emitter,
   * allowing you to modify or control their behavior, such as filtering,
   * mapping, or handling errors, without altering the type of the emitted values
   * @param operators - One or more RxJS operators to apply to the emitter streams
   * @returns the instance of the current emitter, allowing for method chaining
   */
  manage(...operators: OperatorFunction<T, T>[]): this {
    this.throwIfInitialized('manage');
    this.throwIfCompleted('manage');
    if (this.managementOperators) {
      throw new BfError(
        'The manage function can only be used once',
        {code: 'bf_rx_store_AbstractEmitter_manage_1'},
      );
    }
    this.managementOperators = operators;
    return this;
  }

  /**
   * Combines values from multiple emitters, states, or observables, applies a reducer function to
   * these values, and emits the resulting value to all subscribers of this emitter.
   *
   * The first emission occurs only after all values have been received from the sources,
   * ensuring that the reducer function operates on a complete set of inputs.
   * Subsequent emissions occur whenever any of the sources emit a new value,
   * triggering the reducer function to recompute the result based on the latest values.
   * Works similarly to the RxJs 'combineLatest' operator
   *
   * @param inputs - A spread of emitters, states, or observables, followed by a reducer function.
   * The reducer function takes the latest values from each source as arguments and returns
   * the value to be emitted
   *
   * @returns the instance of the current emitter, allowing for method chaining
   */
  select<I extends any[]>(...inputs: [...EmitterOrObservableTuple<I>, SpreadFn<I, T>]): this {
    this.throwIfCompleted('select');
    const rxInputs = <[...EmitterOrObservableTuple<I>]>[...inputs];
    const selector = <(...values: I) => T>(isFunction(rxInputs.at(-1)) ? rxInputs.pop() : stub);
    combineLatest(rxInputs.map(input => (isObservable(input) ? input : input.$)))
      .pipe(completeWith(this.subject))
      .subscribe(values => this._emit(selector(...<I>values)));
    return this;
  }

  /**
   * Combines values from multiple emitters, states, or observables, applies a reducer function to
   * these values, and emits the resulting value to all subscribers of this emitter.
   *
   * The first emission occurs only after all values have been received from the sources,
   * ensuring that the reducer function operates on a complete set of inputs.
   * Subsequent emissions occur only when all sources emit new values,
   * triggering the reducer function to recompute the result based on the latest values.
   * Works similarly to the RxJs 'zip' operator
   *
   * @param inputs - A spread of emitters, states, or observables, followed by a reducer function.
   * The reducer function takes the latest values from each source as arguments and returns
   * the value to be emitted
   *
   * @returns the instance of the current emitter, allowing for method chaining
   */
  zip<I extends any[]>(...inputs: [...EmitterOrObservableTuple<I>, SpreadFn<I, T>]): this {
    this.throwIfCompleted('zip');
    const rxInputs = <[...EmitterOrObservableTuple<I>]>[...inputs];
    const selector = <(...values: I) => T>(isFunction(rxInputs.at(-1)) ? rxInputs.pop() : stub);
    zip(rxInputs.map(input => (isObservable(input) ? input : input.$)))
      .pipe(completeWith(this.subject))
      .subscribe(values => this._emit(selector(...<I>values)));
    return this;
  }

  /**
   * Waits for the first values from multiple emitters, states, or observables, applies a reducer
   * function to these values, emits the resulting value to all subscribers of this emitter,
   * and completes the stream
   *
   * @param inputs - A spread of emitters, states, or observables, followed by a reducer function.
   * The reducer function takes the first values from each source as arguments and returns
   * the value to be emitted
   *
   * @returns the instance of the current emitter, allowing for method chaining
   */
  wait<I extends any[]>(...inputs: [...EmitterOrObservableTuple<I>, SpreadFn<I, T>]): this {
    this.throwIfCompleted('wait');
    const rxInputs = <[...EmitterOrObservableTuple<I>]>[...inputs];
    const selector = <(...values: I) => T>(isFunction(rxInputs.at(-1)) ? rxInputs.pop() : stub);
    combineLatest(rxInputs.map(input => (isObservable(input) ? input : input.$)))
      .pipe(completeWith(this.subject), take(1))
      .subscribe(values => this._emit(selector(...<I>values)));
    return this;
  }

  /**
   * Receives values from one or more emitters, states, or observables
   * and emits them to all subscribers of this emitter.
   *
   * This method allows the current emitter to listen to external sources and relay their
   * emitted values to its own subscribers, effectively linking multiple data streams together
   *
   * @param inputs - One or more emitters, states, or observables
   * that provide values to be emitted by this emitter
   *
   * @returns the instance of the current emitter, allowing for method chaining
   */
  receive(...inputs: EmitterOrObservable<T>[]): this;

  /**
   * Receives a value from an emitter, state, or observable, applies a reducer function to convert
   * this value to the emitter's type, and emits the result to all subscribers of this emitter.
   *
   * This method allows the current emitter to listen to external source and relay the transformed
   * emitted value to its own subscribers, effectively linking data streams together
   *
   * @param input - an emitter, state or observable
   * that provide values to be emitted by this emitter
   *
   * @param reducer - A function that converts the received value from its original type to the type
   * expected by this emitter, allowing for customization of the emitted value
   *
   * @returns the instance of the current emitter, allowing for method chaining
   */
  receive<I>(input: EmitterOrObservable<I>, reducer: (value: I) => T): this;

  receive(...inputs: (EmitterOrObservable<any> | Fn)[]): this {
    this.throwIfCompleted('receive');
    if (!(inputs[1] instanceof AbstractEmitter) && isFunction(inputs[1])) {
      const [input, reducer] = inputs;
      const input$ = isObservable(input) ? input : (<AbstractEmitter<any>>input).$;
      input$.pipe(completeWith(this.subject))
        .subscribe(value => this._emit(reducer(value, this._get())));
    } else {
      inputs.forEach(input => {
        const input$ = isObservable(input) ? input : (<AbstractEmitter<any>>input).$;
        input$.pipe(completeWith(this.subject)).subscribe(value => this._emit(<T>value));
      });
    }
    return this;
  }

  /**
   * Transmits values from the current emitter to one or more other emitters, states, or subjects.
   * It enables the propagation of data or events across multiple sources, effectively creating
   * a network of interconnected reactive sources
   *
   * @param outputs - One or more emitters, states, or subjects that will receive
   * the transmitted values from this emitter
   *
   * @returns the instance of the current emitter, allowing for method chaining
   */
  transmit(...outputs: (EmitterOrSubject<T> | EmitterOrSubject<void>)[]): this;

  /**
   * Transmits values from the current emitter to a state. By using a reducer function,
   * the emitted values can be transformed or customized to match the expected format of the state
   *
   * @param output - A state that will receive the transmitted values from this emitter
   *
   * @param reducer - A function that converts or transforms the emitted value
   * from the emitter type to the type expected by the state
   *
   * @returns the instance of the current emitter, allowing for method chaining
   */
  transmit<O>(output: AbstractState<O>, reducer: (value: T, state: O) => O): this;

  /**
   * Transmits values from the current emitter to another emitter or subject.
   * By using a reducer function, the emitted values can be transformed or customized to match
   * the expected format of the target emitter or subject
   *
   * @param output - An emitter or subject that will receive the transmitted values
   * from this emitter
   *
   * @param reducer - A function that converts or transforms the emitted value from the current
   * emitter's type to the type expected by the receiving emitter or subject
   *
   * @returns the instance of the current emitter, allowing for method chaining
   */
  transmit<O>(output: EmitterOrSubject<O>, reducer: (value: T) => O): this;

  transmit(...outputs: (EmitterOrSubject<any> | Fn)[]): this {
    this.throwIfCompleted('transmit');

    if (!(outputs[1] instanceof AbstractEmitter) && isFunction(outputs[1])) {
      if (outputs[0] instanceof AbstractEmitter) {
        const [outputEmitter, reducer] = outputs;
        this.$.pipe(completeWith((outputEmitter as any).subject))
          .subscribe(value => outputEmitter._emit(reducer(value, outputEmitter._get())));
      } else if (outputs[0] instanceof Subject) {
        const [outputSubject, reducer] = outputs;
        this.$.pipe(completeWith(outputSubject))
          .subscribe(value => outputSubject.next(reducer(value)));
      }
    } else {
      outputs.forEach(output => {
        if (output instanceof AbstractEmitter) {
          this.$.pipe(completeWith((output as any).subject))
            .subscribe(value => output._emit(value));
        } else if (output instanceof Subject) {
          this.$.pipe(completeWith(output)).subscribe(value => output.next(value));
        }
      });
    }
    return this;
  }

  /**
   * Creates a new stream with a side effect, similar to the RxJS `pipe` method.
   * This method allows you to apply a sequence of RxJS operators to the emitter's stream,
   * performing actions or side effects whenever the emitter emits a value. This can be
   * particularly useful for tasks like logging, debugging, or triggering external operations
   * in response to emitted values
   * @params op1, ...opX - RxJS operators that define the side effects
   * @returns the instance of the current emitter, allowing for method chaining
   */
  effect<A>(op1: OP<T, A>): this;

  /**
   * Creates a new stream with a side effect, similar to the RxJS `pipe` method.
   * This method allows you to apply a sequence of RxJS operators to the emitter's stream,
   * performing actions or side effects whenever the emitter emits a value. This can be
   * particularly useful for tasks like logging, debugging, or triggering external operations
   * in response to emitted values
   * @params op1, ...opX - RxJS operators that define the side effects
   * @returns the instance of the current emitter, allowing for method chaining
   */
  effect<A, B>(op1: OP<T, A>, op2: OP<A, B>): this;

  /**
   * Creates a new stream with a side effect, similar to the RxJS `pipe` method.
   * This method allows you to apply a sequence of RxJS operators to the emitter's stream,
   * performing actions or side effects whenever the emitter emits a value. This can be
   * particularly useful for tasks like logging, debugging, or triggering external operations
   * in response to emitted values
   * @params op1, ...opX - RxJS operators that define the side effects
   * @returns the instance of the current emitter, allowing for method chaining
   */
  effect<A, B, C>(op1: OP<T, A>, op2: OP<A, B>, op3: OP<B, C>): this;

  /**
   * Creates a new stream with a side effect, similar to the RxJS `pipe` method.
   * This method allows you to apply a sequence of RxJS operators to the emitter's stream,
   * performing actions or side effects whenever the emitter emits a value. This can be
   * particularly useful for tasks like logging, debugging, or triggering external operations
   * in response to emitted values
   * @params op1, ...opX - RxJS operators that define the side effects
   * @returns the instance of the current emitter, allowing for method chaining
   */
  effect<A, B, C, D>(op1: OP<T, A>, op2: OP<A, B>, op3: OP<B, C>, op4: OP<C, D>): this;

  /**
   * Creates a new stream with a side effect, similar to the RxJS `pipe` method.
   * This method allows you to apply a sequence of RxJS operators to the emitter's stream,
   * performing actions or side effects whenever the emitter emits a value. This can be
   * particularly useful for tasks like logging, debugging, or triggering external operations
   * in response to emitted values
   * @params op1, ...opX - RxJS operators that define the side effects
   * @returns the instance of the current emitter, allowing for method chaining
   */
  effect<A, B, C, D, E>(
    op1: OP<T, A>, op2: OP<A, B>, op3: OP<B, C>, op4: OP<C, D>, op5: OP<D, E>,
  ): this;

  /**
   * Creates a new stream with a side effect, similar to the RxJS `pipe` method.
   * This method allows you to apply a sequence of RxJS operators to the emitter's stream,
   * performing actions or side effects whenever the emitter emits a value. This can be
   * particularly useful for tasks like logging, debugging, or triggering external operations
   * in response to emitted values
   * @params op1, ...opX - RxJS operators that define the side effects
   * @returns the instance of the current emitter, allowing for method chaining
   */
  effect<A, B, C, D, E, F>(
    op1: OP<T, A>, op2: OP<A, B>, op3: OP<B, C>, op4: OP<C, D>, op5: OP<D, E>, op6: OP<E, F>,
  ): this;

  /**
   * Creates a new stream with a side effect, similar to the RxJS `pipe` method.
   * This method allows you to apply a sequence of RxJS operators to the emitter's stream,
   * performing actions or side effects whenever the emitter emits a value. This can be
   * particularly useful for tasks like logging, debugging, or triggering external operations
   * in response to emitted values
   * @params op1, ...opX - RxJS operators that define the side effects
   * @returns the instance of the current emitter, allowing for method chaining
   */
  effect<A, B, C, D, E, F, G>(
    op1: OP<T, A>, op2: OP<A, B>, op3: OP<B, C>, op4: OP<C, D>, op5: OP<D, E>, op6: OP<E, F>,
    op7: OP<F, G>,
  ): this;

  /**
   * Creates a new stream with a side effect, similar to the RxJS `pipe` method.
   * This method allows you to apply a sequence of RxJS operators to the emitter's stream,
   * performing actions or side effects whenever the emitter emits a value. This can be
   * particularly useful for tasks like logging, debugging, or triggering external operations
   * in response to emitted values
   * @params op1, ...opX - RxJS operators that define the side effects
   * @returns the instance of the current emitter, allowing for method chaining
   */
  effect<A, B, C, D, E, F, G, H>(
    op1: OP<T, A>, op2: OP<A, B>, op3: OP<B, C>, op4: OP<C, D>, op5: OP<D, E>, op6: OP<E, F>,
    op7: OP<F, G>, op8: OP<G, H>,
  ): this;

  /**
   * Creates a new stream with a side effect, similar to the RxJS `pipe` method.
   * This method allows you to apply a sequence of RxJS operators to the emitter's stream,
   * performing actions or side effects whenever the emitter emits a value. This can be
   * particularly useful for tasks like logging, debugging, or triggering external operations
   * in response to emitted values
   * @params op1, ...opX - RxJS operators that define the side effects
   * @returns the instance of the current emitter, allowing for method chaining
   */
  effect<A, B, C, D, E, F, G, H, I>(
    op1: OP<T, A>, op2: OP<A, B>, op3: OP<B, C>, op4: OP<C, D>, op5: OP<D, E>, op6: OP<E, F>,
    op7: OP<F, G>, op8: OP<G, H>, op9: OP<H, I>,
  ): this;

  /**
   * Creates a new stream with a side effect, similar to the RxJS `pipe` method.
   * This method allows you to apply a sequence of RxJS operators to the emitter's stream,
   * performing actions or side effects whenever the emitter emits a value. This can be
   * particularly useful for tasks like logging, debugging, or triggering external operations
   * in response to emitted values
   * @params op1, ...opX - RxJS operators that define the side effects
   * @returns the instance of the current emitter, allowing for method chaining
   */
  effect<A, B, C, D, E, F, G, H, I, J>(
    op1: OP<T, A>, op2: OP<A, B>, op3: OP<B, C>, op4: OP<C, D>, op5: OP<D, E>, op6: OP<E, F>,
    op7: OP<F, G>, op8: OP<G, H>, op9: OP<H, I>, op10: OP<I, J>,
  ): this;

  /**
   * Creates a new stream with a side effect, similar to the RxJS `pipe` method.
   * This method allows you to apply a sequence of RxJS operators to the emitter's stream,
   * performing actions or side effects whenever the emitter emits a value. This can be
   * particularly useful for tasks like logging, debugging, or triggering external operations
   * in response to emitted values
   * @params op1, ...opX - RxJS operators that define the side effects
   * @returns the instance of the current emitter, allowing for method chaining
   */
  effect<A, B, C, D, E, F, G, H, I, J, K>(
    op1: OP<T, A>, op2: OP<A, B>, op3: OP<B, C>, op4: OP<C, D>, op5: OP<D, E>, op6: OP<E, F>,
    op7: OP<F, G>, op8: OP<G, H>, op9: OP<H, I>, op10: OP<I, J>, op11: OP<J, K>,
    ...operators: OP<any, any>[]
  ): this;

  effect(...operators: OperatorFunction<any, any>[]): this {
    this.throwIfCompleted('effect');
    // @ts-ignore
    this.$.pipe(...operators).subscribe();
    return this;
  }

  /**
   * Creates a new stream with a side effect, similar to the RxJS `tap` operator.
   *
   * This method allows you to perform actions or side effects whenever the emitter emits a value,
   * without altering the value itself. It is useful for tasks like logging, debugging,
   * or triggering external operations in response to emitted values
   *
   * @param observer - a partial observer with lifecycle methods (`next`, `error`, `complete`)
   *
   * @returns the instance of the current emitter, allowing for method chaining
   */
  tap(observer: Partial<Observer<T>>): this;

  /**
   * Creates a new stream with a side effect, similar to the RxJS `tap` operator.
   *
   * This method allows you to perform actions or side effects whenever the emitter emits a value,
   * without altering the value itself. It is useful for tasks like logging, debugging,
   * or triggering external operations in response to emitted values
   *
   * @param next - a function that takes the emitted value and performs a side effect
   *
   * @returns the instance of the current emitter, allowing for method chaining
   */
  tap(next: (value: T) => void): this;

  tap(observerOrNext: Partial<Observer<T>> | ((value: T) => void)): this {
    this.throwIfCompleted('tap');
    this.$.pipe(tap(observerOrNext as any)).subscribe();
    return this;
  }

  /**
   * Executes actions that were deferred until the initialization of the emitter.
   * This method is typically called just before the emitter is fully initialized.
   * It serves as a stub that will be replaced by the actual function provided to the `onInit` method
   */
  protected executeDeferredActions(): void { // stub
  }

  /**
   * RxJS operator that manages all emitter streams by applying management operators
   * that modify or control stream behavior, such as filtering, mapping, or handling errors,
   * without altering the type of the emitted values
   */
  protected manager(): OperatorFunction<T, T> {
    return operator<T, T>((source, subscriber) => {
      if (!this.isInitStarted()) {
        this.initialize();
      }
      // @ts-ignore
      return (this.managementOperators ? source.pipe(...this.managementOperators) : source)
        .subscribe(subscriber);
    });
  }

  /**
   * Adds an emitter to the active group if the group is present.
   * Indicates that the emitter is created within the context of the active group
   */
  protected addToActiveGroup(): void {
    if (activeGroup) {
      (activeGroup as any).addGroupItem(this);
    }
  }
}
