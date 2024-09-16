import {isString, getWindow} from '@bitfiber/utils';
import {Subject, Observable, map, filter} from 'rxjs';

import {startWithDefined} from '../../operators';
import {KeyValueSource} from '../';
import {parseJson} from '../internal/internal';

/**
 * Holds a singleton instance of the `LocalStorage` class
 */
let source: LocalStorage | undefined;

/**
 * Creates and returns a singleton instance of `LocalStorage` and ensures that only one instance
 * is created. If the instance already exists, it returns the existing instance
 *
 * @template T - The type of the value stored in local storage. Defaults to `any`
 */
export function localStorage<T = any>(): LocalStorage<T> {
  return source ??= new LocalStorage<T>();
}

/**
 * Implements the `KeyValueSource` interface, allowing interaction
 * with the browser's local storage using key-value semantics. It provides methods for
 * retrieving, setting, observing, and removing key-value pairs stored in local storage
 *
 * @template T - The type of the value stored in local storage. Defaults to `any`
 */
export class LocalStorage<T = any> implements KeyValueSource<T> {
  /**
   * A reference to the global `window` object
   * @readonly
   */
  private readonly win = getWindow();

  /**
   * Emits a string representing the key whenever there is a change (e.g., set, remove)
   * in local storage. This allows observers to react to changes in specific keys
   * @readonly
   */
  private readonly subject = new Subject<string>();

  /**
   * Creates a singleton instance
   */
  constructor() {
    if (source) {
      return source;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      source = this;
      this.win.addEventListener('storage', this.storageChangeHandler);
    }
  }

  /**
   * Retrieves a value stored under the given key in local storage.
   * The retrieved value is parsed from its JSON string format into the expected type `T`.
   * If the key does not exist or if parsing fails, returns 'undefined'
   * @param key - The specific key under which the value is stored in local storage
   */
  get(key: string): T {
    const value = this.win.localStorage.getItem(key);
    return isString(value) ? <T>parseJson<T>(value) : <T>undefined;
  }

  /**
   * Sets a new value under the given key in local storage.
   * Before storing, the value is serialized to a JSON string format
   * @param key - The specific key under which the value will be stored
   * @param value - The new value to be stored, which will be stringified before being added
   */
  set(key: string, value: T): void {
    this.win.localStorage.setItem(key, JSON.stringify(value));
    this.subject.next(key);
  }

  /**
   * Removes a value associated with the provided key from local storage
   * @param key - The specific key under which the value is stored and should be removed
   */
  remove(key: string): void {
    this.win.localStorage.removeItem(key);
    this.subject.next(key);
  }

  /**
   * Creates and returns an observable that emits value changes
   * stored under the given key in local storage
   * @param key - The specific key under which the value is stored in local storage
   */
  observe(key: string): Observable<T> {
    return this.subject.pipe(
      filter(eKey => key === eKey),
      map(key => this.get(key)),
      startWithDefined(() => this.get(key)),
    );
  }

  /**
   * Destroys the reference to the instance and frees any associated resources
   */
  destroy(): void {
    this.subject.complete();
    this.win.removeEventListener('storage', this.storageChangeHandler);
    source = undefined;
  }

  /**
   * Handles storage change events and emits the updated key
   */
  private storageChangeHandler = (event: StorageEvent) => {
    const {key} = event;
    if (key) {
      this.subject.next(key);
    }
  };
}
