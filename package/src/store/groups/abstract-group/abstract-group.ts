import {BfError} from '@bitfiber/utils';

import {StoreItem} from '../../types';
import {AbstractItem} from '../../common/abstract-item/abstract-item';

/**
 * Represents an abstract group that can aggregate and manage multiple items,
 * such as states, emitters, or other groups.
 *
 * The `AbstractGroup` class serves as a base class for implementing groups that can aggregate
 * and manage multiple instances of `AbstractEmitter`, `AbstractGroup`, or their subclasses.
 * This class provides foundational functionality for initializing, completing, managing,
 * and interacting with a collection of related items.
 *
 * Subclasses of `AbstractGroup` are expected to implement specific logic for managing
 * the group items and facilitating interactions among them
 */
export abstract class AbstractGroup extends AbstractItem {
  /**
   * Holds the collection of `StoreItem` instances that the group is responsible for managing.
   * The `items` array is populated by the `setItems` method, which is called once during
   * the initialization or configuration of the group
   */
  #items!: StoreItem[];

  /**
   * Flag indicating whether the group's operations are deferred
   */
  #deferred = false;

  /**
   * Registers a deferred actions hook that is called before the group is initialized.
   *
   * This hook allows you to perform any necessary setup or actions on the group, such as
   * initiating group items or configuring other settings, before the group begins emitting values
   *
   * @param deferredActions - any actions performed on the group
   * such as initiating group items and others
   *
   * @returns the instance of the current group, allowing for method chaining
   */
  onInit(deferredActions: (group: this, sameGroup: this) => void): this {
    this.throwIfInitialized('onInit');
    this.throwIfCompleted('onInit');
    if (this.#deferred) {
      throw new BfError(
        'The onInit function can only be used once',
        {code: 'bf_rx_store_AbstractGroup_onInit_1'},
      );
    }
    this.executeDeferredActions = () => deferredActions(this, this);
    this.#deferred = true;
    return this;
  }

  /**
   * Initiates the group and all its items.
   *
   * In most cases, this method will be called automatically by a group or store managing
   * the group, so you generally don't need to call it manually unless you have a specific
   * reason to do so
   *
   * @returns the instance of the current group, allowing for method chaining
   */
  initialize(): this {
    this.throwIfInitialized('initialize');
    this.throwIfCompleted('initialize');

    if (!this.#items) {
      throw new BfError(
        'You need to pass store items before initialization with method "setItems"',
        {code: 'bf_rx_store_AbstractGroup_initialize_1'},
      );
    }

    if (!this.isInitStarted()) {
      this.startInitialization();
      this.executeInnerDeferredActions();
      this.#items.forEach(item => !item.isInitialized() && item.initialize());
      this.executeDeferredActions();
      this.#items.forEach(item => !item.isInitialized() && item.finishInitialization());
      if (!this.isTwoStepInitialization()) {
        this.finishInitialization();
      }
    }

    return this;
  }

  /**
   * Completes the group and all its items,
   * signaling to all item subscribers that no more values will be emitted.
   *
   * Once the group is completed, Its items will no longer emit any values, and any subsequent
   * subscriptions will immediately receive an error.
   *
   * In most cases, this method will be called automatically by a group or store managing
   * the group, so you generally don't need to call it manually unless you have a specific
   * reason to do so
   */
  complete(): void {
    this.throwIfCompleted('complete');
    this.#items.forEach(item => !item.isCompleted() && item.complete());
    this.finishCompletion();
  }

  /**
   * Executes actions that were deferred until the initialization of the group. This method is called
   * just before the group is fully initialized. It serves as a stub that will be replaced by
   * the actual function provided to the `onInit` method
   */
  protected executeDeferredActions(): void { // stub
  }

  /**
   * Executes inner group actions that were deferred until the initialization of the group.
   * This method is called just before the group is fully initialized. It serves as a stub
   * that subclasses should override to implement specific deferred actions for their group items
   */
  protected executeInnerDeferredActions(): void { // stub
  }

  /**
   * Sets the provided array of store items to the group,
   * allowing the group to manage these items collectively.
   *
   * This method is called once during the initialization or configuration of the group
   *
   * @param items - An array of `StoreItem` instances to be managed by the group
   *
   */
  protected setItems(items: StoreItem[]): void {
    this.#items = items;
    this.#items.forEach(item => !item.isInitialized() && item.enableTwoStepInitialization());
  }
}
