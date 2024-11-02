import {isString, getWindow} from '@bitfiber/utils';
import {Subject, Observable, filter, map, share} from 'rxjs';

import {startWithDefined} from '../../operators';
import {KeyValueSource} from '../';
import {parseJson} from '../internal/internal';

/**
 * Holds a singleton instance of the `SessionStorage` class
 */
let source: SessionStorage | undefined;

/**
 * Creates and returns a singleton instance of `SessionStorage` and ensures that only one instance
 * is created. If the instance already exists, it returns the existing instance
 *
 * @template T - The type of the value stored in session storage. Defaults to `any`
 */
export function sessionStorage<T = any>(): SessionStorage<T> {
  return source ??= new SessionStorage<T>();
}

/**
 * Implements the `KeyValueSource` interface, allowing interaction
 * with the browser's session storage using key-value semantics. It provides methods for
 * retrieving, setting, observing, and removing key-value pairs stored in session storage
 *
 * @template T - The type of the value stored in session storage. Defaults to `any`
 */
export class SessionStorage<T = any> implements KeyValueSource<T> {
  /**
   * A reference to the global `window` object
   * @readonly
   */
  private readonly win = getWindow();

  /**
   * Emits a string representing the key whenever there is a change (e.g., set, remove)
   * in session storage. This allows observers to react to changes in specific keys
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
    }
  }

  /**
   * Retrieves a value stored under the given key in session storage.
   * The retrieved value is parsed from its JSON string format into the expected type `T`.
   * If the key does not exist or if parsing fails, returns 'undefined'
   * @param key - The specific key under which the value is stored in session storage
   */
  get(key: string): T {
    const value = this.win.sessionStorage.getItem(key);
    return isString(value) ? <T>parseJson<T>(value) : <T>undefined;
  }

  /**
   * Sets a new value under the given key in session storage.
   * Before storing, the value is serialized to a JSON string format
   * @param key - The specific key under which the value will be stored
   * @param value - The new value to be stored, which will be stringified before being added
   */
  set(key: string, value: T): void {
    this.win.sessionStorage.setItem(key, JSON.stringify(value));
    this.subject.next(key);
  }

  /**
   * Removes a value associated with the provided key from session storage
   * @param key - The specific key under which the value is stored and should be removed
   */
  remove(key: string): void {
    this.win.sessionStorage.removeItem(key);
    this.subject.next(key);
  }

  /**
   * Creates and returns an observable that emits value changes
   * stored under the given key in session storage
   * @param key - The specific key under which the value is stored in session storage
   */
  observe(key: string): Observable<T> {
    return this.subject.pipe(
      filter(eKey => key === eKey),
      map(key => this.get(key)),
      share(),
      startWithDefined(() => this.get(key)),
    );
  }

  /**
   * Destroys the reference to the instance and frees any associated resources
   */
  destroy(): void {
    this.subject.complete();
    source = undefined;
  }
}
