import {Observable, OperatorFunction, Subscriber, TeardownLogic} from 'rxjs';

/**
 * Creates a custom RxJS operator that can be used in the `pipe` function of an observable.
 * This operator allows you to apply custom transformation logic to the observable stream
 *
 * @template T - The type of values emitted by the source observable
 * @template R - The type of values emitted by the transformed observable after applying the operator
 *
 * @param fn - A function that takes the source observable and the subscriber,
 * and returns teardown logic to clean up resources when the observable completes or errors
 */
export function operator<T, R>(fn: (
  source: Observable<T>,
  subscriber: Subscriber<R>,
) => TeardownLogic): OperatorFunction<T, R> {
  return (source: Observable<T>): Observable<R> => {
    return new Observable<R>(subscriber => {
      return fn(source, subscriber);
    });
  };
}
