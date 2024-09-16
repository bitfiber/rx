import {KeyValueSourcePart} from '../key-value-source-part/key-value-source-part';
import {memoryStorage, MemoryStorage} from '../memory-storage/memory-storage';

/**
 * Creates an instance of `MemoryStoragePart`, which provides
 * access to the data stored under the specified key in the memory storage
 *
 * @template T - The type of data stored under the specific key. Defaults to `string | undefined`
 *
 * @param key - The key that is used to access the value in the memory storage
 */
export function memoryStoragePart<T = string | undefined>(key: string): MemoryStoragePart<T> {
  return new MemoryStoragePart<T>(key);
}

/**
 * Extends `KeyValueSourcePart` and allows interacting with the data stored
 * under a specific key in the memory storage. It enables retrieving, setting, observing,
 * and removing data associated with the specified key
 *
 * @template T - The type of data stored under the specific key. Defaults to `string | undefined`
 */
export class MemoryStoragePart<T = string | undefined> extends KeyValueSourcePart<T> {
  /**
   * Creates an instance that allows interacting with the data stored under a specific key
   * in the memory storage
   *
   * @param key - The key used to access the value in the memory storage
   * @param [storage] - Optional memory storage instance. If not provided,
   * a singleton memory storage is used
   */
  constructor(key: string, storage?: MemoryStorage) {
    super(key, storage || memoryStorage());
  }
}
