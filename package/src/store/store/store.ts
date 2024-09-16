import {BfError, isFunction} from '@bitfiber/utils';

import {StoreIndex} from '../types';
import {AbstractItem} from '../common/abstract-item/abstract-item';
import {namedGroup, NamedGroup} from '../groups/named-group/named-group';

/**
 * Represents optional hooks for `Store` that can be implemented to perform
 * actions before and after the store is initialized and completed
 */
export interface StoreHooks {
  /**
   * An optional hook that runs before the store is initialized
   */
  beforeStoreInit?(): void;

  /**
   * An optional hook that runs after the store has been initialized
   */
  afterStoreInit?(): void;

  /**
   * An optional hook that runs before the store is completed
   */
  beforeStoreComplete?(): void;

  /**
   * An optional hook that runs after the store has been completed
   */
  afterStoreComplete?(): void;
}

/**
 * Extends `AbstractItem`, implements the `StoreHooks` interface, and provides functionality
 * for managing store items such as emitters, states, and groups.
 *
 * The `Store` class handles the initialization and completion of these items, providing lifecycle hooks
 * that allow custom logic to be executed before and after key events such as store initialization
 * and completion. This class serves as a base for specific store implementations
 *
 * @abstract
 */// @ts-ignore
export abstract class Store extends AbstractItem implements StoreHooks {
  /**
   * Holds the group of store items managed by the store
   */
  #storeGroup!: NamedGroup<StoreIndex<any>>;

  /**
   * Initializes the store and all of its items, preparing it for use. Optionally, a `beforeInit`
   * callback function can be provided, which will be executed before the store is initialized
   *
   * @param [beforeInit] - An optional callback function that runs before the store is initialized
   *
   * @returns The current instance of the store, allowing for method chaining
   */
  initialize(beforeInit?: (store: this) => void): this {
    this.throwIfInitialized('initialize');
    this.throwIfCompleted('initialize');

    if (!this.isInitStarted()) {
      this.startInitialization();
      this.#storeGroup = namedGroup(this);

      // @ts-ignore
      if (isFunction(this.beforeStoreInit)) {
        // @ts-ignore
        this.beforeStoreInit();
      }

      if (beforeInit) {
        beforeInit(this);
      }

      this.#storeGroup.initialize();
      this.finishInitialization();

      // @ts-ignore
      if (isFunction(this.afterStoreInit)) {
        // @ts-ignore
        this.afterStoreInit();
      }
    }

    return this;
  }

  /**
   * Completes the store and all of its items, signaling that the store has finished
   * its operations and is now in a completed state. Once the store is completed,
   * no further changes or updates will be made to it or its items
   */
  complete(): void {
    this.throwIfCompleted('complete');
    if (!this.isInitialized()) {
      throw new BfError(
        'You cannot call "complete" as this store has not been initialized',
        {code: 'bf_rx_store_AbstractStore_complete_1'},
      );
    }

    // @ts-ignore
    if (isFunction(this.beforeStoreComplete)) {
      // @ts-ignore
      this.beforeStoreComplete();
    }

    this.#storeGroup.complete();
    this.finishCompletion();

    // @ts-ignore
    if (isFunction(this.afterStoreComplete)) {
      // @ts-ignore
      this.afterStoreComplete();
    }
  }
}
