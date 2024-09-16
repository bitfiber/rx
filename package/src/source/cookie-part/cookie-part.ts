import {Cookie, cookie, CookieParams, CookieValue, KeyValueSourcePart} from '../';

/**
 * Creates and returns an instance of `CookiePart`, allowing interaction
 * with a specific key in the browser's cookie storage. You can also provide optional `removeParams`
 * for managing cookie removal
 *
 * @template T - The type of the value stored in the cookie.
 * Defaults to `CookieValue<string | undefined>`
 *
 * @param key - The key used to access the value in the browser cookie
 * @param [removeParams] - Optional parameters for managing cookie removal
 */
export function cookiePart<T = CookieValue<string | undefined>>(
  key: string,
  removeParams?: CookieParams,
): CookiePart<T> {
  return new CookiePart<T>(key, removeParams);
}

/**
 * Extends `KeyValueSourcePart` and allows interaction with a particular
 * key in the browser's cookie storage. It provides methods for retrieving, setting, and observing
 * the cookie value associated with the given key
 *
 * @template T - The type of the value stored in the cookie.
 * Defaults to `CookieValue<string | undefined>`
 */
export class CookiePart<T = CookieValue<string | undefined>> extends KeyValueSourcePart<T> {
  /**
   * Optional parameters for managing the removal of the cookie
   * @readonly
   */
  private readonly removeParams?: CookieParams;

  /**
   * Creates an instance that provides access to a specific part of the browser cookie
   * stored under a specific key
   * @param key - The key used to access the value in the browser cookie
   * @param [removeParams] - Optional parameters to configure the removal of the cookie
   */
  constructor(key: string, removeParams?: CookieParams) {
    super(key, cookie());
    this.removeParams = removeParams;
  }

  /**
   * Removes the cookie stored under the specific key
   */
  override remove(): void {
    (this.source as Cookie).remove(this.key, this.removeParams);
  }
}
