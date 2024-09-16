import {isDefined, isNullish} from '@bitfiber/utils';
import {isObservable, Observable, of, OperatorFunction, take, tap} from 'rxjs';

import {operator} from '../';

/**
 * Instantly emits a value from the provided getter if the value is defined.
 * If the getter returns an observable, the value will be emitted when the observable emits,
 * but only if no values have been emitted previously.
 * Optionally, if `nonNullish` is set to `true`, `null` or `undefined` values will not be emitted
 *
 * @template T - The type of the values emitted by the observable
 * @template U - A subtype of `T` representing the specific value type emitted
 *
 * @param getter - A function that returns an initial value or
 * an observable that emits the initial value
 * @param [nonNullish] - If `true`, `null` or `undefined` values will not be emitted
 */
export function startWithDefined<T, U extends T>(
  getter: () => U | Observable<U>,
  nonNullish?: boolean,
): OperatorFunction<T, T> {
  return operator<T, T>((source, subscriber) => {
    const value = getter();
    const observable = isObservable(value) ? value : of(value);

    const valueSub = observable
      .pipe(take(1))
      .subscribe(value => {
        if (nonNullish ? !isNullish(value) : isDefined(value)) {
          subscriber.next(<T>value);
        }
      });

    const sourceSub = source
      .pipe(tap(() => valueSub.unsubscribe()))
      .subscribe(subscriber);

    return () => {
      valueSub.unsubscribe();
      sourceSub.unsubscribe();
    };
  });
}
