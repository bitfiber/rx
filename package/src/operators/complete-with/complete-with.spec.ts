import {delay, EMPTY, interval, map, of, timeout} from 'rxjs';

import {completeWith} from '../';

describe('@bitfiber/rx/operators/completeWith', () => {
  it('A stream was completed after a while', done => {
    const trigger$ = of(1).pipe(delay(400), timeout(500));
    interval(50).pipe(completeWith(trigger$)).subscribe({
      complete: () => {
        expect(true).toBeTruthy();
        done();
      },
    });
  });

  it('A stream was completed by a previously completed trigger', done => {
    interval(50).pipe(completeWith(EMPTY)).subscribe({
      complete: () => {
        expect(true).toBeTruthy();
        done();
      },
    });
  });

  it('A stream was not completed due to an error', done => {
    const trigger$ = of(1).pipe(delay(200), map(() => {
      throw new Error('Some error');
    }));
    interval(50).pipe(completeWith(trigger$)).subscribe({
      next: num => {
        if (num > 8) {
          expect(true).toBeTruthy();
          done();
        }
      },
    });
  });

  it('A stream was completed due to an error when withError is true', done => {
    const trigger$ = of(1).pipe(delay(200), map(() => {
      throw new Error('Some error');
    }));
    interval(50).pipe(completeWith(trigger$, true)).subscribe({
      complete: () => {
        expect(true).toBeTruthy();
        done();
      },
    });
  });

  it('A stream is not completed because a trigger is not completed', done => {
    const trigger$ = interval(50);
    interval(50).pipe(completeWith(trigger$)).subscribe({
      next: num => {
        if (num >= 5) {
          expect(true).toBeTruthy();
          done();
        }
      },
    });
  });
});
