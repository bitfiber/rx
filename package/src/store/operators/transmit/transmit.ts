import {catchError, EMPTY, OperatorFunction, Subject, tap} from 'rxjs';

import {operator} from '../../../operators';
import {AbstractEmitter} from '../../emitters/abstract-emitter/abstract-emitter';
import {AbstractAsyncGroup} from '../../groups/async-group/abstract-async-group';

/**
 * Transmits the result of the asynchronous action to the provided emitter
 * or group, allowing success, failure, and completion actions or effects to be performed.
 * It can also transmit to additional emitters for failure and finish actions or effects
 *
 * @template L - The type representing the data for the launch emitter
 * @template S - The type representing the data for the success emitter
 * @template F - The type representing the error data for the fail emitter
 *
 * @param emitterOrGroup - The primary emitter, state, subject, or async group
 * that will receive the success data
 *
 * @param [failEmitter] - An optional emitter, state, or subject that will emit the failure data
 * after a failed action
 *
 * @param [finishEmitter] - An optional emitter, state, or subject that will emit once
 * the asynchronous action is completed, either successfully or with a failure
 *
 * @returns An RxJS operator that transmits the data to the corresponding emitter
 */
export function transmit<L, S, F>(
  emitterOrGroup: AbstractEmitter<S> | Subject<S> | AbstractAsyncGroup<L, S, F>,
  failEmitter?: AbstractEmitter<F> | Subject<F> | null,
  finishEmitter?: AbstractEmitter<void> | Subject<void>,
): OperatorFunction<S, S> {
  return operator<S, S>((source, subscriber) => {
    return source
      .pipe(
        tap(data => {
          if (emitterOrGroup instanceof AbstractAsyncGroup) {
            emitterOrGroup.success.emit(data);
          } else if (emitterOrGroup instanceof AbstractEmitter) {
            emitterOrGroup._emit(data);
          } else {
            emitterOrGroup.next(data);
          }

          if (finishEmitter) {
            if (finishEmitter instanceof AbstractEmitter) {
              finishEmitter._emit();
            } else {
              finishEmitter.next();
            }
          }
        }),
        catchError(error => {
          if (emitterOrGroup instanceof AbstractAsyncGroup) {
            emitterOrGroup.fail.emit(error);
          }

          if (failEmitter) {
            if (failEmitter instanceof AbstractEmitter) {
              failEmitter._emit(error);
            } else {
              failEmitter.next(error);
            }
          }

          if (finishEmitter) {
            if (finishEmitter instanceof AbstractEmitter) {
              finishEmitter._emit();
            } else {
              finishEmitter.next();
            }
          }

          return EMPTY;
        }),
      )
      .subscribe(subscriber);
  });
}
