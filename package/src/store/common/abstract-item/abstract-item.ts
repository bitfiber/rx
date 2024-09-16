import {BfError} from '@bitfiber/utils';

/**
 * AbstractItem serves as a foundational base class for the implementation
 * of various reactive store items such as emitters, states, groups, and stores.
 *
 * This abstract class provides core functionality and a common interface for these store items,
 * ensuring consistency and reusability across different parts of the reactive system. Subclasses
 * of `AbstractItem` are expected to extend and implement specific behaviors and data handling
 * logic that pertain to their respective roles, whether as an emitter, state, group, or store
 *
 * @abstract
 */
export abstract class AbstractItem {
  /**
   * A flag indicating whether the store item has been initialized
   */
  private initialized = false;

  /**
   * A flag indicating whether the store item has been completed
   */
  private completed = false;

  /**
   * A flag indicating whether the initialization process has started
   */
  private initStarted = false;

  /**
   * A flag indicating whether the store item uses two-step initialization
   */
  private hasTwoStepInitialization = false;

  /**
   * This abstract method must be implemented by subclasses of `AbstractItem` to perform
   * the necessary initialization steps specific to the store item being created, whether
   * it is an emitter, state, group, or store
   * @abstract
   */
  abstract initialize(): void;

  /**
   * This abstract method must be implemented by subclasses of `AbstractItem`
   * to define the necessary steps for gracefully completing the store item.
   * This may include releasing resources, unsubscribing from streams,
   * or performing final clean-up tasks
   * @abstract
   */
  abstract complete(): void;

  /**
   * Returns `true` if the store item has completed its initialization process,
   * otherwise it returns `false`
   */
  isInitialized(): boolean {
    return this.initialized;
  }

  /**
   * Returns `true` if the initialization of the store item has begun,
   * otherwise it returns `false`. It is useful for determining if the store item is
   * in the process of being initialized, which can help in managing operations
   * that depend on the store item's readiness or in avoiding multiple initialization attempts
   */
  isInitStarted(): boolean {
    return this.initStarted;
  }

  /**
   * Returns `true` if the store item is designed to be initialized in two distinct steps,
   * otherwise it returns `false`. A two-step initialization might be used in scenarios where
   * the store item needs to perform preliminary setup before completing its full initialization
   */
  isTwoStepInitialization(): boolean {
    return this.hasTwoStepInitialization;
  }

  /**
   * Configures the store item to require a two-step initialization,
   * allowing for a more controlled and phased initialization process.
   * When two-step initialization is enabled, the initialization process will
   * not be completed after calling the `initialize` function.
   * Instead, you must manually call the `finishInitialization` function to complete the process
   */
  enableTwoStepInitialization(): this {
    this.hasTwoStepInitialization = true;
    return this;
  }

  /**
   * Sets the internal state of the store item to indicate that the initialization process has begun
   */
  startInitialization(): void {
    this.initStarted = true;
  }

  /**
   * Sets the store item as fully initialized, indicating that all necessary setup
   * and preliminary steps have been completed, and the store item is now fully operational
   */
  finishInitialization(): void {
    this.initialized = true;
  }

  /**
   * Returns `true` if the store item's lifecycle or operation has been fully completed,
   * otherwise it returns `false`
   */
  isCompleted(): boolean {
    return this.completed;
  }

  /**
   * Sets the store item as completed, indicating that all necessary tasks, processes,
   * or operations have been finished, and no further actions should be taken on this store item
   */
  finishCompletion(): void {
    this.completed = true;
  }

  /**
   * Throws an error if the store item has already been initialized
   * @param methodName - The name of the method from which `throwIfInitialized` is called,
   * used to provide context in the error message
   * @throws BfError - an error indicating that the method cannot be called because
   * the store item has already been initialized
   */
  protected throwIfInitialized(methodName: string): void {
    if (this.isInitialized()) {
      throw new BfError(
        `You cannot call "${methodName}" as this store item has already been initialized`,
        {code: 'bf_rx_store_AbstractItem_throwIfInitialized_1', data: this},
      );
    }
  }

  /**
   * Throws an error if the item has already been completed
   * @param methodName - The name of the method from which `throwIfCompleted` is called,
   * used to provide context in the error message
   * @throws BfError - an error indicating that the method cannot be called because
   * the item has already been completed
   */
  protected throwIfCompleted(methodName: string): void {
    if (this.isCompleted()) {
      throw new BfError(
        `You cannot call "${methodName}" as this store item has already been completed`,
        {code: 'bf_rx_store_AbstractItem_throwIfCompleted_1', data: this},
      );
    }
  }
}
