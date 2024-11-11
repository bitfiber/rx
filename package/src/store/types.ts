import {PickType} from '@bitfiber/utils';
import {Observable, Subject} from 'rxjs';

import {AbstractEmitter, AbstractGroup} from '../';

/**
 * Represents a state that can be invoked as a function to retrieve its current value
 */
export type StateGetter<T> = () => T;

/**
 * Represents a reactive source that can be an emitter, state, or subject
 */
export type EmitterOrSubject<T> = AbstractEmitter<T> | Subject<T>;

/**
 * Represents a reactive source that can be an emitter, state or observable
 */
export type EmitterOrObservable<T> = AbstractEmitter<T> | Observable<T>;

/**
 * Represents a tuple of emitters, states or observables
 */
export type EmitterOrObservableTuple<T> = {[K in keyof T]: EmitterOrObservable<T[K]>};

/**
 * Represents a store item, which can be an emitter, state, or group
 */
export type StoreItem<T = any> = AbstractEmitter<T> | AbstractGroup;

/**
 * Represents an object where all properties are restricted to being `StoreItem` types
 */
export type StoreIndex<T> = PickType<T, StoreItem>;

/**
 * Represents a function that spreads tuple values as individual arguments
 */
export type SpreadFn<I extends any[], O> = (
  v1: I[0], v2: I[1], v3: I[2], v4: I[3], v5: I[4], v6: I[5], v7: I[6], v8: I[7], v9: I[8],
  v10: I[9], v11: I[10], v12: I[11], v13: I[12], v14: I[13], v15: I[14], v16: I[15], ...vx: any
) => O;
