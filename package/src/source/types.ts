import {Observable} from 'rxjs';

/**
 * Represents a data source that can be observed, retrieved, modified, or removed.
 * It provides an observable for monitoring changes
 * @template T - The type of data stored in the data source
 */
export interface DataSource<T> {
  /**
   * An observable that allows subscribers to reactively observe changes or updates to the data
   */
  $: Observable<T>;

  /**
   * Retrieves the current value from the data source
   */
  get(): T;

  /**
   * Sets a new value for the data source.
   * This method updates the value in the data source and notifies observers of the change
   * @param value - The new value to be set for the data source
   */
  set(value: T): void;

  /**
   * Removes the current value from the data source
   */
  remove(): void;
}

/**
 * Represents a generic, writable key-value source with methods
 * for getting, setting, removing, and observing values associated with a specific key.
 * It also includes a method to destroy the source, allowing for cleanup when it is no longer needed
 * @template T - The type of the values stored in the key-value source. Defaults to `any`
 */
export interface KeyValueSource<T = any> {
  /**
   * Retrieves the value associated with the specified key
   * @param key - The key for which to retrieve the value
   */
  get(key: string): T;

  /**
   * Sets a value for the specified key
   * @param key - The key to associate the value with
   * @param value - The value to be set for the key
   */
  set(key: string, value: T): void;

  /**
   * Removes the value associated with the specified key
   * @param key - The key for which to remove the value
   */
  remove(key: string): void;

  /**
   * Observes changes to the value associated with the specified key
   * @param key - The key to observe for changes
   * @returns An observable that emits the value associated with the key
   */
  observe(key: string): Observable<T>;

  /**
   * Destroys the key-value source, releasing any resources held by it
   */
  destroy(): void;
}
