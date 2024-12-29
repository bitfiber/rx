import {BfError, isFunction} from '@bitfiber/utils';

import {AbstractItem} from '../common/abstract-item/abstract-item';
import {group} from '../groups/group/group';

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

  // Fix TS2559: Type Store has no properties in common with type StoreHooks
  complete(): void;
}

/**
 * The `Store` class is a foundational component for implementing reactive state management and
 * handling asynchronous data flow in modules or entire applications. It serves as a central hub,
 * organizing and managing store items like emitters, states, and groups, ensuring seamless
 * interaction among them.
 *
 * Stores can also include methods to trigger specific actions, making them a powerful and
 * flexible tool for coordinating complex application logic. Their structured design simplifies
 * the development of scalable, maintainable, and reactive applications, ensuring consistency and
 * clarity in managing state and data flow.
 *
 * By implementing the `StoreHooks` interface, the store provides lifecycle hooks for executing
 * custom logic before and after key events, such as store initialization and completion.
 *
 * The `Store` class is an abstract foundation designed to serve as a base for specific store
 * implementations that define concrete collections of store items
 *
 * @abstract
 */
export abstract class Store extends AbstractItem implements StoreHooks {
  /**
   * Holds the group of store items managed by the store
   */
  private storeGroup = group();

  /**
   * Flag indicating that the `markAsReady()` method has been called for the store
   */
  private isReady = false;

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

    if (!this.isReady) {
      throw new BfError(
        'You need to call the `markAsReady` method after defining all store items',
        {code: 'bf_rx_store_AbstractStore_initialize_1'},
      );
    }

    if (!this.isInitStarted()) {
      this.startInitialization();

      // @ts-ignore
      if (isFunction(this.beforeStoreInit)) {
        // @ts-ignore
        this.beforeStoreInit();
      }

      if (beforeInit) {
        beforeInit(this);
      }

      this.storeGroup.initialize();
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

    this.storeGroup.complete();
    this.finishCompletion();

    // @ts-ignore
    if (isFunction(this.afterStoreComplete)) {
      // @ts-ignore
      this.afterStoreComplete();
    }
  }

  /**
   * Marks the store as ready, indicating that all store items, such as emitters, states, and groups,
   * have been defined. This method must be called after all store items are defined!
   */
  protected markAsReady(): boolean {
    this.isReady = true;
    return this.storeGroup.markAsReady();
  }
}
