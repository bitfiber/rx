import {forEachObj, Index} from '@bitfiber/utils';

import {StoreIndex, StoreItem} from '../../types';
import {AbstractEmitter} from '../../emitters/abstract-emitter/abstract-emitter';
import {AbstractGroup} from '../../groups/abstract-group/abstract-group';

/**
 * Takes an index of various items and filters out all non-`StoreItem` entries,
 * returning a new index that contains only `StoreItem` instances
 *
 * @template T - The type of the index containing various items, including `StoreItem` instances
 *
 * @param index - The original index that contains various items, including `StoreItem` instances
 *
 * @returns a filtered index containing only `StoreItem` instances
 */
export function getStoreIndex<T extends Index>(index: T): StoreIndex<T> {
  const storeIndex: Index<StoreItem> = {};
  forEachObj(index, (item: any, key: string) => {
    if (item instanceof AbstractEmitter || item instanceof AbstractGroup) {
      storeIndex[key] = item;
    }
  });
  return <StoreIndex<T>>storeIndex;
}
