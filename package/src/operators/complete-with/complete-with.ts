import {Observable, OperatorFunction} from 'rxjs';

import {operator} from '../';

/**
 * Returns an RxJS operator that completes the subscriber when the provided `trigger` observable
 * completes. Optionally, if `withError` is set to `true`, the subscriber will also complete
 * if the `trigger` observable errors
 *
 * @template T - The type of values emitted by the source observable.
 *
 * @param trigger - An observable that can trigger the completion of the subscriber
 * @param [withError] - If `true`, the subscriber will also complete when the `trigger` errors
 */
export function completeWith<T>(
  trigger: Observable<any>,
  withError?: boolean,
): OperatorFunction<T, T> {
  return operator<T, T>((source, subscriber) => {
    const sub = trigger.subscribe({
      complete: () => subscriber.complete(),
      error: () => withError && subscriber.complete(),
    });

    return source.subscribe({
      next: value => subscriber.next(value),
      error: error => {
        sub.unsubscribe();
        subscriber.error(error);
      },
      complete: () => {
        sub.unsubscribe();
        subscriber.complete();
      },
    });
  });
}
