import {Nullish} from '@bitfiber/utils';
import {Subject} from 'rxjs';

import {startWithDefined} from '../';

describe('@bitfiber/rx/operators/startWithDefined', () => {
  const subject = new Subject<number | Nullish>();

  it('A stream starts from a certain value', done => {
    subject.pipe(startWithDefined(() => 5)).subscribe({
      next: v => {
        expect(v).toBe(5);
        done();
      },
    });
    subject.next(1);
  });

  it('A stream starts from a certain value when nonNullish is true', done => {
    subject.pipe(startWithDefined(() => 5, true)).subscribe({
      next: v => {
        expect(v).toBe(5);
        done();
      },
    });
    subject.next(1);
  });

  it('A stream starts from null', done => {
    subject.pipe(startWithDefined(() => null)).subscribe({
      next: v => {
        expect(v).toBeNull();
        done();
      },
    });
    subject.next(5);
  });

  it('A stream does not start from null when nonNullish is true', done => {
    subject.pipe(startWithDefined(() => null, true)).subscribe({
      next: v => {
        expect(v).toBe(5);
        done();
      },
    });
    subject.next(5);
  });

  it('A stream does not start from undefined', done => {
    subject.pipe(startWithDefined(() => undefined)).subscribe({
      next: v => {
        expect(v).toBe(5);
        done();
      },
    });
    subject.next(5);
  });

  it('A stream does not start from undefined when nonNullish is true', done => {
    subject.pipe(startWithDefined(() => undefined, true)).subscribe({
      next: v => {
        expect(v).toBe(5);
        done();
      },
    });
    subject.next(5);
  });
});
