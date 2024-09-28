import {StateGetter} from '@bitfiber/rx';
import {filter, take} from 'rxjs';
import {BfError, copy, Index, isDefined, isNumber, toHash, toSortedString} from '@bitfiber/utils';

import {emitter} from '../../emitters/emitter/emitter';
import {AbstractState} from '../../states/abstract-state/abstract-state';
import {AbstractGroup} from '../abstract-group/abstract-group';

/**
 * Represents the state and counters of an asynchronous action within an `AbstractAsyncGroup`
 */
export interface AsyncData {
  /**
   * The number of times the asynchronous action has succeeded
   */
  successCounter: number;

  /**
   * The number of times the asynchronous action has failed
   */
  failCounter: number;

  /**
   * Indicates whether the asynchronous action is currently in progress
   */
  inProgress: boolean;

  /**
   * Indicates whether the asynchronous action has completed successfully
   */
  successful: boolean;

  /**
   * Indicates whether the asynchronous action has failed
   */
  failed: boolean;
}

/**
 * Represents cached data for an asynchronous action, including the data and its expiration time
 * @template T - The type of the data being cached
 */
interface AsyncCacheData<T> {
  /**
   * The actual data that has been cached
   */
  data: T;

  /**
   * The timestamp (in milliseconds) when the cached data expires and should be refreshed or discarded
   */
  expiresAt: number;
}

/**
 * Represents an asynchronous group that manages the lifecycle of an asynchronous action,
 * including emitters for launching the action, handling its success, dealing with failures,
 * and maintaining the state of the asynchronous action.
 *
 * The `AbstractAsyncGroup` class extends `AbstractGroup` and is designed to facilitate the management
 * of asynchronous actions. This structure allows for organized and efficient management
 * of complex asynchronous workflows
 *
 * @template L - The type representing the data for the launch emitter
 * @template S - The type representing the data for the success emitter
 * @template F - The type representing the error data for the fail emitter
 */
export abstract class AbstractAsyncGroup<L, S, F> extends AbstractGroup {
  /**
   * An async state is initialized with this value
   * @readonly
   */
  protected readonly initialState: AsyncData = {
    successCounter: 0, failCounter: 0, inProgress: false, successful: false, failed: false,
  };

  /**
   * An emitter that triggers the start of an asynchronous action.
   * This emitter takes a payload of type `L`, which contains the necessary data
   * to initiate the action
   * @readonly
   */
  readonly launch = emitter<L>();

  /**
   * An emitter that triggers when an asynchronous action completes successfully.
   * This emitter takes a payload of type `S`, which contains the result or data associated
   * with the successful completion of the action
   * @readonly
   */
  readonly success = emitter<S>();

  /**
   * An emitter that triggers when an asynchronous action fails.
   * This emitter takes a payload of type `F`, which contains the error information or data
   * related to the failure of the action
   * @readonly
   */
  readonly fail = emitter<F>();

  /**
   * An emitter that triggers when the asynchronous action's entire lifecycle is completed,
   * whether it ends in success or failure. This emitter does not carry any payload (`void`),
   * as it simply serves as a notification that the process is fully complete
   * @readonly
   */
  readonly finish = emitter<void>();

  /**
   * The state that tracks the status of an asynchronous action,
   * including counters for successes and failures, as well as flags indicating whether the action
   * is in progress, has completed successfully, or has failed
   * @readonly
   */
  abstract readonly state: AbstractState<AsyncData> & StateGetter<AsyncData>;

  /**
   * Indicates whether caching is enabled for the asynchronous action
   */
  #hasCache = false;

  /**
   * Stores a unique identifier used for caching the results of the asynchronous action.
   * At the moment of launch, this cache key is generated from the launch payload and is assigned
   * for further use after the action succeeds
   */
  #cacheKey = '';

  /**
   * Defines the maximum number of entries allowed in the cache
   */
  #cacheSize = 0;

  /**
   * Holds either the cache lifetime in seconds or a callback function
   */
  #secOrFn!: number | (() => boolean);

  /**
   * Stores the keys of cached entries in the order they were added.
   * This array is used to manage the cache eviction process, typically
   * following FIFO strategy
   */
  #cacheQueue: string[] = [];

  /**
   * Controls whether the success state should be updated after a failure
   * when the fallback value is emitted by the success emitter
   */
  #needSuccessState = true;

  /**
   * Controls whether the finish event should be emitted after a failure
   * when the fallback value is emitted by the success emitter
   */
  #needSuccessFinish = true;

  /**
   * Holds an optional fallback value of type `S` that is used as a default success value
   * if the asynchronous action fails
   * @readonly
   */
  readonly #fallbackValue?: S;

  /**
   * Holds an index of cached entries, where each key maps to an `AsyncCacheData` object
   * containing the cached data and its expiration time
   * @readonly
   */
  readonly #cacheIndex: Index<AsyncCacheData<S>> = {};

  /**
   * Creates the instance and optionally accepts a `fallbackValue`, which serves as
   * a default value in case the asynchronous action fails, ensuring that the success emitter
   * always returns a value
   *
   * @param [fallbackValue] - An optional fallback value of type `S` that will be used
   * as the default success value if the asynchronous action fails
   */
  constructor(fallbackValue?: S) {
    super();
    this.#fallbackValue = fallbackValue;
  }

  /**
   * Enables caching, allowing the results of the asynchronous action
   * to be stored and reused based on certain conditions. The cache can be configured to expire
   * after a specified lifetime or to be used conditionally based on a callback function
   *
   * @param secOrFn - The lifetime of the cache in seconds, or a callback function
   * that returns a boolean value. If the callback returns `true`, the cache will be used
   *
   * @param [cacheSize=10] - The maximum number of entries in the cache. If the cache size
   * exceeds this limit, the earliest entries will be deleted following a FIFO strategy
   *
   * @returns the instance of the current group, allowing for method chaining
   */
  useCache(secOrFn: number | (() => boolean), cacheSize = 10): this {
    this.throwIfInitialized('useCache');
    this.throwIfCompleted('useCache');
    if (this.#hasCache) {
      throw new BfError(
        'The useCache function can only be used once',
        {code: 'bf_rx_store_AsyncGroup_useCache_1'},
      );
    }

    this.#hasCache = true;
    this.#cacheSize = cacheSize;
    this.#secOrFn = secOrFn;

    const realLaunchEmit = this.launch._emit.bind(this.launch);

    this.launch._emit = (value: L) => {
      const key = toHash(toSortedString(value)) || 'default';
      const cacheData = this.#cacheIndex[key];

      if (isDefined(cacheData) && (isNumber(this.#secOrFn)
        ? this.#secOrFn === 0 || cacheData.expiresAt > Date.now()
        : this.#secOrFn())) {
        this.#cacheKey = '';
        this.success.emit(cacheData.data);
      } else {
        this.#cacheKey = key;
        realLaunchEmit(value);
      }

      return this.launch;
    };

    return this;
  }

  /**
   * Executes inner group actions that were deferred until the initialization of the group.
   * This method is called just before the group is fully initialized
   */
  protected override executeInnerDeferredActions(): void {
    this.initializeSuccess();
    this.initializeFinish();
    this.initializeState();
  }

  protected initializeSuccess(): void {
    if (isDefined(this.#fallbackValue)) {
      const fail$ = this.fail.$.pipe(take(1), filter(() => this.state().successCounter === 0));
      this.success.receive(fail$, () => {
        this.#needSuccessState = false;
        this.#needSuccessFinish = false;
        return copy(this.#fallbackValue as S);
      });
    }

    if (this.#hasCache) {
      this.success.tap(data => {
        if (this.#cacheKey) {
          if (this.#cacheSize && this.#cacheQueue.length === this.#cacheSize) {
            const firstCacheKey = this.#cacheQueue.shift() as string;
            delete this.#cacheIndex[firstCacheKey];
          }
          this.#cacheQueue.push(this.#cacheKey);
          this.#cacheIndex[this.#cacheKey] = {
            data, expiresAt: isNumber(this.#secOrFn) ? (Date.now() + (this.#secOrFn * 1000)) : 0,
          };
        }
      });
    }
  }

  protected initializeFinish(): void {
    this.finish
      .receive(this.success.$.pipe(filter(() => {
        const needSuccessFinish = this.#needSuccessFinish;
        this.#needSuccessFinish = true;
        return needSuccessFinish;
      })), () => undefined)
      .receive(this.fail, () => undefined);
  }

  protected initializeState(): void {
    this.state
      .receive(this.launch, (_, {successCounter, failCounter}) => ({
        successCounter,
        failCounter,
        inProgress: true,
        successful: false,
        failed: false,
      }))
      .receive(this.success.$.pipe(filter(() => {
        const needSuccessState = this.#needSuccessState;
        this.#needSuccessState = true;
        return needSuccessState;
      })), (_, {successCounter, failCounter}) => ({
        successCounter: ++successCounter,
        failCounter,
        inProgress: false,
        successful: true,
        failed: false,
      }))
      .receive(this.fail, (_, {successCounter, failCounter}) => ({
        successCounter,
        failCounter: ++failCounter,
        inProgress: false,
        successful: false,
        failed: true,
      }));
  }
}
