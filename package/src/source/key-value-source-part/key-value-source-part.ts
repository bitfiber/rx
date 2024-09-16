import {Observable, share} from 'rxjs';

import {KeyValueSource, DataSource} from '../';

/**
 * Implements the `DataSource` interface and provides functionality for managing a specific part
 * of a key-value source. It allows observing, retrieving, setting, and removing data associated
 * with a particular key
 *
 * @template T - The type of data stored in the part of the key-value source
 */
export class KeyValueSourcePart<T> implements DataSource<T> {
  /**
   * Allows subscribers to reactively observe changes or updates to the data
   * in the part of the key-value source
   */
  readonly $: Observable<T>;

  /**
   * The key associated with this part of the key-value source
   */
  protected readonly key: string;

  /**
   * The key-value source associated with this part of the data
   */
  protected readonly source: KeyValueSource<T>;

  /**
   * Creates an instance that has access to only certain data stored under a specific key
   * @param key - a key that is needed to gain access to data in a key-value source
   * @param source - an instance of a key-value source
   */
  constructor(key: string, source: KeyValueSource) {
    this.key = key;
    this.source = source;
    this.$ = this.source.observe(this.key).pipe(share());
  }

  /**
   * Retrieves the current value
   */
  get(): T {
    return this.source.get(this.key);
  }

  /**
   * Sets a new value
   * @param value
   */
  set(value: T): void {
    this.source.set(this.key, value);
  }

  /**
   * Removes the current value
   */
  remove(): void {
    this.source.remove(this.key);
  }
}
