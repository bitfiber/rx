import {extend, Index, values} from '@bitfiber/utils';

import {StoreItem, StoreIndex} from '../../types';
import {getStoreIndex} from '../../helpers/get-store-index/get-store-index';
import {AbstractGroup} from '../abstract-group/abstract-group';

/**
 * Represents a composite type that incorporates store items from the provided index and can manage
 * these items, each accessible by a unique key, inheriting the group management features
 * of `AbstractGroup`.
 *
 * This type is useful in scenarios where a group of store items needs to be managed collectively,
 * but each item must also be accessible by a specific key
 *
 * @template I - The type of the index used to access the `StoreItem` instances in the group
 */
export type NamedGroup<I extends Index<StoreItem>> = I & AbstractGroup;

/**
 * Creates a new `NamedGroup` instance with the store items from the provided index,
 * where each item is accessible by its unique key.
 *
 * This function also allows for an optional `onInit` callback, which can be used to perform
 * additional setup or configuration just before the group initialization
 *
 * @template I - The type of the index used to access the `StoreItem` instances in the group
 *
 * @param index - An index that contains `StoreItem` instances and other data,
 * each associated with a unique key
 * @param [onInit] - An optional callback function that is executed just before initialization
 */
export function namedGroup<I extends Index>(
  index: I,
  onInit?: (group: NamedGroup<StoreIndex<I>>, sameGroup: NamedGroup<StoreIndex<I>>) => void,
): NamedGroup<StoreIndex<I>> {
  const group = new NamedGroup(index);
  return onInit ? group.onInit(onInit) : group;
}

/**
 * Defines the signature for a constructor function that creates
 * a new instance of `NamedGroup`. The constructor takes an index of items, filters it to retain
 * only `StoreItem` instances, and returns a `NamedGroup` where each item is accessible
 * by its unique key
 *
 * @internal
 *
 * @template I - Extends `Index` that contains `StoreItem` instances and other data,
 * each associated with a unique key
 */
interface NamedGroupConstructor {
  new<I extends Index>(items: I): NamedGroup<StoreIndex<I>>;
}

/**
 * Represents a named group that incorporates store items from the provided index and can manage
 * these items, each accessible by a unique key
 *
 * @internal
 *
 * @template I - Extends `Index` that contains `StoreItem` instances and other data,
 * each associated with a unique key
 */
const NamedGroup = class NamedGroup<I extends Index> extends AbstractGroup {
  /**
   * Creates a new instance of the `NamedGroup` that incorporates store items from the provided index.
   *
   * The constructor takes an index containing various data and filters it to retain only
   * `StoreItem` instances in the final result. This filtered index is then merged into
   * the group instance, allowing each item in the group to be accessed by its unique key
   *
   * @param index - An index that contains `StoreItem` instances and other data,
   * each associated with a unique key
   */
  constructor(index: I) {
    super();
    const storeIndex = getStoreIndex(index);
    values(storeIndex).forEach(item => this.addGroupItem(item as StoreItem));
    extend(this, storeIndex);
    this.markAsReady();
  }
} as NamedGroupConstructor;
