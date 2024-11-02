import {BfError, Index} from '@bitfiber/utils';
import {filter, map, Observable, share, Subject} from 'rxjs';

import {startWithDefined} from '../../operators';
import {KeyValueSource} from '../';

let source: MemoryStorage | undefined;

/**
 * Creates a singleton instance of `MemoryStorage`, ensuring that only one instance of
 * the in-memory key-value storage exists
 *
 * @template T - The type of data stored in the memory storage. Defaults to `any`
 */
export function memoryStorage<T = any>(): MemoryStorage<T> {
  return source ??= new MemoryStorage<T>();
}

/**
 * Implements the `KeyValueSource` interface and allows storing, retrieving, observing,
 * and managing key-value pairs directly in memory. It provides a simple storage mechanism
 * that exists only during the runtime of the application
 *
 * @template T - The type of data stored in the memory storage. Defaults to `any`
 */
export class MemoryStorage<T = any> implements KeyValueSource<T> {
  /**
   * Holds the key-value pairs stored in memory
   */
  private data: Index<T> = {};

  /**
   * A flag indicating whether the storage has been destroyed
   */
  private destroyed = false;

  /**
   * Emits a string representing the key whenever there is a change (e.g., set, remove)
   * in local storage. This allows observers to react to changes in specific keys
   * @readonly
   */
  private readonly subject = new Subject<string>();

  /**
   * Retrieves the value associated with the specified key
   * @param key - The key for which to retrieve the value
   */
  get(key: string): T {
    this.throwIfDestroyed('get');
    return this.data[key];
  }

  /**
   * Sets a value for the specified key
   * @param key - The key to associate the value with
   * @param value - The value to be set for the key
   */
  set(key: string, value: T): void {
    this.throwIfDestroyed('set');
    this.data[key] = value;
    this.subject.next(key);
  }

  /**
   * Removes the value associated with the specified key
   * @param key - The key for which to remove the value
   */
  remove(key: string): void {
    this.throwIfDestroyed('remove');
    delete this.data[key];
    this.subject.next(key);
  }

  /**
   * Returns an observable that will emit value changes for a specific key
   * @param key - The key for which to observe value changes
   */
  observe(key: string): Observable<T> {
    this.throwIfDestroyed('observe');
    return this.subject.pipe(
      filter(eKey => key === eKey),
      map(key => this.get(key)),
      share(),
      startWithDefined(() => this.get(key)),
    );
  }

  /**
   * Destroys the memory storage, releasing all stored key-value pairs
   */
  destroy(): void {
    this.throwIfDestroyed('destroy');
    this.subject.complete();
    this.data = {};
    this.destroyed = true;
  }

  /**
   * Throws an error if the memory storage has been destroyed
   * @param methodName - The name of the method attempting to perform an operation
   * on the destroyed storage
   */
  protected throwIfDestroyed(methodName: string): void {
    if (this.destroyed) {
      throw new BfError(
        `You cannot call "${methodName}" as the memory storage has already been destroyed`,
        {code: 'bf_rx_source_MemoryStorage_throwIfDestroyed_1', data: this},
      );
    }
  }
}
