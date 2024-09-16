import {KeyValueSourcePart, localStorage} from '../';

/**
 * Creates and returns an instance of `LocalStoragePart`, allowing interaction
 * with a specific key-value pair stored in the browser's local storage
 *
 * @template T - The type of the value stored in local storage. Defaults to `string | undefined`
 *
 * @param key - The key used to access the value in local storage
 */
export function localStoragePart<T = string | undefined>(key: string): LocalStoragePart<T> {
  return new LocalStoragePart<T>(key);
}

/**
 * Extends `KeyValueSourcePart` and allows interaction with a particular
 * key in the browser's local storage. It provides methods for retrieving, setting, and observing
 * the value associated with the given key
 *
 * @template T - The type of the value stored in local storage. Defaults to `string | undefined`
 */
export class LocalStoragePart<T = string | undefined> extends KeyValueSourcePart<T> {
  /**
   * Creates an instance that provides access to a specific part of local storage
   * stored under a specific key
   * @param key - The key used to access the value in local storage
   */
  constructor(key: string) {
    super(key, localStorage());
  }
}
