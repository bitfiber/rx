import {EMPTY, of, OperatorFunction, throwError} from 'rxjs';

import {operator} from '../';

describe('@bitfiber/rx/operators/operator', () => {
  let op: OperatorFunction<string, string>;

  beforeEach(() => {
    op = operator((source, subscriber) => {
      return source.subscribe({
        next: value => subscriber.next(value + '2'),
        error: error => subscriber.error(new Error(error.message + '2')),
        complete: () => subscriber.complete(),
      });
    });
  });

  it('A value was passed', done => {
    of('value1').pipe(op).subscribe({
      next: value => {
        expect(value).toBe('value12');
        done();
      },
    });
  });

  it('An error was intercepted', done => {
    throwError(() => new Error('error1')).pipe(op).subscribe({
      error: error => {
        expect(error.message).toBe('error12');
        done();
      },
    });
  });

  it('An observable was completed', done => {
    EMPTY.pipe(op).subscribe({
      complete: () => {
        expect(true).toBeTruthy();
        done();
      },
    });
  });
});
