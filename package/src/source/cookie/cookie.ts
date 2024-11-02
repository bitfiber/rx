import {isString, extend, getDocument, getWindow, stub} from '@bitfiber/utils';
import {Subject, Observable, map, filter, share} from 'rxjs';

import {startWithDefined} from '../../operators';
import {KeyValueSource} from '../';
import {parseJson} from '../internal/internal';

/**
 * Represents the optional parameters that can be used when setting a cookie
 */
export interface CookieParams {
  /**
   * Specifies the URL path that must exist in the requested URL for the cookie to be valid
   */
  path?: string;

  /**
   * Specifies the domain for which the cookie is valid
   */
  domain?: string;

  /**
   * Specifies the expiration date for the cookie. If not set, the cookie is considered
   * a session cookie
   */
  expires?: Date;

  /**
   * Specifies the maximum age of the cookie in seconds. Overrides `expires` if both are set
   */
  maxAge?: number;

  /**
   * Indicates whether the cookie should only be sent over secure protocols like HTTPS
   */
  secure?: boolean;

  /**
   * Specifies the `SameSite` policy for the cookie, which controls how cookies are sent
   * with cross-site requests
   */
  sameSite?: 'strict' | 'lax';
}

/**
 * Represents a value stored in a cookie
 * @template T - The type of the value stored in the cookie
 */
export interface CookieValue<T> {
  /**
   * The value to be stored in the cookie
   */
  value: T;
}

/**
 * Combines cookie parameters with the value to be stored in a cookie
 * @template T - The type of the value stored in the cookie
 */
export type CookieData<T> = CookieParams & CookieValue<T>;

/**
 * Holds a singleton instance of the `Cookie` class
 */
let source: Cookie | undefined;

/**
 * Creates and returns a singleton instance of the `Cookie` class and ensures that only one
 * instance is created. If the instance already exists, it returns the existing one
 *
 * @template T - The type of the value stored in the cookie. Defaults to `any`
 */
export function cookie<T = any>(): Cookie<T> {
  return source ??= new Cookie<T>();
}

/**
 * Provides access to browser cookies as a key-value storage.
 *
 * The `Cookie` class implements the `KeyValueSource` interface, allowing interaction with
 * browser cookies using key-value semantics. It provides methods for retrieving, setting,
 * observing, and removing cookies
 *
 * @template T - The type of data stored in the cookie. Defaults to `any`
 */
export class Cookie<T = any> implements KeyValueSource<T> {
  /**
   * A reference to the global `document` object
   * @readonly
   */
  private readonly doc = getDocument();

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

  private readonly channel!: BroadcastChannel;
  private lastCookie = this.doc.cookie;

  /**
   * Creates a singleton instance
   */
  constructor() {
    if (source) {
      return source;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      source = this;
      this.channel = getBroadcastChannel('BfCookieChannel');
      this.expandCookie();
    }
  }

  /**
   * Returns the value of the cookie associated with the given key
   * and parses it as JSON. If the cookie does not exist, returns `undefined`
   * @param key - The specific key under which the cookie value is stored
   */
  get(key: string): T {
    const cookie = this.doc.cookie.replace(/^\s+/g, '').split(';').find(row => row.startsWith(key));
    const value = cookie?.split('=')[1];
    return <T>{value: isString(value) ? parseJson<any>(decodeURIComponent(value)) : undefined};
  }

  /**
   * Sets a cookie with the specified key and value, stringified before being added to the cookie.
   * Additional parameters, such as cookie options (e.g., `expires`, `path`),
   * can be provided as part of the `data` object
   *
   * @param key - The specific key under which the value will be stored
   * @param data - An object containing the new value to store, as well as optional cookie parameters
   */ // @ts-ignore
  set(key: string, data: CookieData<T>): void {
    const {value, path, domain, expires, maxAge, secure, sameSite} = data;
    const _value = encodeURIComponent(JSON.stringify(value));
    const _path = `; path=${path || '/'}`;
    const _domain = domain ? `; domain=${domain}` : '';
    const _expires = expires ? `; expires=${expires.toUTCString()}` : '';
    const _maxAge = maxAge ? `; max-age=${maxAge}` : '';
    const _secure = secure === false ? '' : '; secure';
    const _sameSite = sameSite ? `; samesite=${sameSite}` : '';
    this.doc.cookie = `${key}=${_value}${_expires}${_maxAge}${_path}${_domain}${_secure}${_sameSite}`;
    this.subject.next(key);
  }

  /**
   * Removes the cookie associated with the given key. Optionally, you can
   * provide `CookieParams` to specify additional options, such as the path or domain, to ensure
   * the correct cookie is removed
   *
   * @param key - The specific key (name) of the cookie to be removed
   * @param [params] - Optional parameters that can be used to specify the cookie's path, domain, etc.
   */
  remove(key: string, params?: CookieParams): void {
    const {hostname} = this.win.location;
    const expires = new Date(1970, 1, 1);
    this.set(key, extend({path: '/'}, params || {domain: hostname}, {
      value: <T>'', expires, maxAge: -1,
    }));
  }

  /**
   * Creates and returns an observable that emits value changes of the cookie
   * associated with the specified key. This allows reactive monitoring of the cookie value
   * @param key - The specific key (name) under which the cookie value is stored
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
    this.channel.close();
    source = undefined;
  }

  /**
   * Expands the native browser cookie functionality with custom logic
   */
  private expandCookie(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const originalCookie = 'originalCookie';
    const docPrototype = typeof Document === 'function' ? Document.prototype : {};
    const nativeCookieDescriptor = Object.getOwnPropertyDescriptor(docPrototype, 'cookie') || {};

    // Listen cookieChange messages from other same-origin tabs/frames
    this.channel.onmessage = event => {
      const {key, newCookie} = event.data.detail;
      this.lastCookie = newCookie;
      this.subject.next(key);
    };

    // Expand original document.cookie
    Object.defineProperty(docPrototype, originalCookie, nativeCookieDescriptor);
    Object.defineProperty(docPrototype, 'cookie', {
      enumerable: true,
      configurable: true,
      get() {
        return this[originalCookie];
      },
      set(fullCookie) {
        this[originalCookie] = fullCookie;
        const newCookie = this[originalCookie];
        const key = self.getKey(fullCookie);

        if (key && newCookie !== self.lastCookie) {
          try {
            // Dispatch cookieChange messages to other same-origin tabs/frames
            self.channel.postMessage({
              detail: {key, newCookie, lastCookie: self.lastCookie},
            });
          } finally {
            self.lastCookie = newCookie;
          }
        }
      },
    });
  }

  /**
   * Extracts and returns the key name under which a value is stored from a full cookie string
   * @param fullCookie - The full cookie string from which to extract the key
   */
  private getKey(fullCookie: string): string | undefined {
    const cookies = fullCookie.replace(/^\s+/g, '').split(';');
    for (let i = 0; i < cookies.length; i++) {
      const key = cookies[i].split('=')[0];
      if (key && !['path', 'domain', 'expires', 'max-age', 'secure', 'samesite'].includes(key)) {
        return key;
      }
    }
    return undefined;
  }
}

/**
 * Creates and returns either a `BroadcastChannel` instance or a stub service
 * if `BroadcastChannel` is not supported
 * @param channelName - The name of the broadcast channel to create
 */
function getBroadcastChannel(channelName: string): BroadcastChannel {
  return typeof BroadcastChannel === 'function'
    ? new BroadcastChannel(channelName)
    : <BroadcastChannel>{close: stub, postMessage: stub};
}
