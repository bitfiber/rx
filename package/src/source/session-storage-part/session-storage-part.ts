import {KeyValueSourcePart, sessionStorage} from '../';

/**
 * Creates and returns an instance of `SessionStoragePart`, allowing interaction
 * with a specific key-value pair stored in the browser's session storage
 *
 * @template T - The type of the value stored in session storage. Defaults to `string | undefined`
 *
 * @param key - The key used to access the value in session storage
 */
export function sessionStoragePart<T = string | undefined>(key: string): SessionStoragePart<T> {
  return new SessionStoragePart<T>(key);
}

/**
 * Extends `KeyValueSourcePart` and allows interaction with a particular
 * key in the browser's session storage. It provides methods for retrieving, setting, and observing
 * the value associated with the given key
 *
 * @template T - The type of the value stored in session storage. Defaults to `string | undefined`
 */
export class SessionStoragePart<T = string | undefined> extends KeyValueSourcePart<T> {
  /**
   * Creates an instance that provides access to a specific part of session storage
   * stored under a specific key
   * @param key - The key used to access the value in session storage
   */
  constructor(key: string) {
    super(key, sessionStorage());
  }
}
