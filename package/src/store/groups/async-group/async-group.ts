import {state} from '../../states/state/state';
import {AbstractAsyncGroup, AsyncData} from './abstract-async-group';

/**
 * Creates a new `AsyncGroup` instance that manages the lifecycle of an asynchronous action,
 * including emitters for launching the action, handling its success, dealing with failures,
 * and maintaining the state of the asynchronous action.
 *
 * This function also allows for an optional `onInit` callback, which can be used to perform
 * additional setup or configuration just before the group initialization.
 *
 * The fallback value is used as a default success value in case the asynchronous action fails,
 * ensuring that the success emitter always returns a value
 *
 * @template L - The type representing the data for the launch emitter
 * @template S - The type representing the data for the success emitter
 * @template F - The type representing the error data for the fail emitter
 *
 * @param [onInit] - An optional callback function executed just before the group initialization
 * @param [fallbackValue] - An optional fallback value of type `S` that will be used
 * as the default success value if the asynchronous action fails
 */
export function asyncGroup<L, S, F>(
  onInit?: (group: AsyncGroup<L, S, F>, sameGroup: AsyncGroup<L, S, F>) => void,
  fallbackValue?: S,
): AsyncGroup<L, S, F> {
  const group = new AsyncGroup<L, S, F>(fallbackValue);
  return onInit ? group.onInit(onInit) : group;
}

/**
 * Represents an asynchronous group that manages the lifecycle of an asynchronous action,
 * including emitters for launching the action, handling its success, dealing with failures,
 * and maintaining the state of the asynchronous action.
 *
 * The `AsyncGroup` class extends `AbstractAsyncGroup` and is designed to facilitate the management
 * of asynchronous actions. This structure allows for organized and efficient management
 * of complex asynchronous workflows
 *
 * @template L - The type representing the data for the launch emitter
 * @template S - The type representing the data for the success emitter
 * @template F - The type representing the error data for the fail emitter
 */
export class AsyncGroup<L, S, F> extends AbstractAsyncGroup<L, S, F> {
  /**
   * The state that tracks the status of an asynchronous action,
   * including counters for successes and failures, as well as flags indicating whether the action
   * is in progress, has completed successfully, or has failed
   * @readonly
   */
  readonly state = state<AsyncData>(this.initialState, state => this.onStateInit(state));

  /**
   * Creates the instance and optionally accepts a `fallbackValue`, which serves as
   * a default value in case the asynchronous action fails, ensuring that the success emitter
   * always returns a value
   *
   * @param [fallbackValue] - An optional fallback value of type `S` that will be used
   * as the default success value if the asynchronous action fails
   */
  constructor(fallbackValue?: S) {
    super(fallbackValue);
    this.setItems([this.launch, this.success, this.fail, this.finish, this.state]);
  }
}
