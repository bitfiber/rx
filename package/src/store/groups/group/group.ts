import {AbstractGroup} from '../abstract-group/abstract-group';

/**
 * Creates a new `Group` instance that collects all subsequently created group items such as
 * emitters, states, and groups until `group.markAsReady()` is called
 */
export function group(): Group {
  return new Group();
}

/**
 * Represents a group that collects all subsequently created group items such as emitters, states,
 * and groups until `group.markAsReady()` is called
 */
export class Group extends AbstractGroup {
  /**
   * Marks the group as ready, indicating that all group items, such as emitters, states, and groups,
   * have been defined. This method must be called after all group items are defined!
   */
  override markAsReady(): boolean {
    return super.markAsReady();
  }
}
