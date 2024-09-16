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
