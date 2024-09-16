import {of, Subject, switchMap, throwError} from 'rxjs';
import {BfError} from '@bitfiber/utils';
import {asyncGroup, AsyncGroup, emitter, Emitter, State, state, StateGetter} from '@bitfiber/rx';

import {transmit} from './transmit';

describe('@bitfiber/rx/store/operators/transmit', () => {
  let starter: Subject<string>;
  let dataSubject: Subject<number>;
  let errorSubject: Subject<Error>;
  let finishSubject: Subject<void>;
  let dataEmitter: Emitter<number>;
  let errorEmitter: Emitter<Error>;
  let finishEmitter: Emitter<void>;
  let dataState: State<number> & StateGetter<number>;
  let errorState: State<Error> & StateGetter<Error>;
  let finishState: State<any> & StateGetter<any>;
  let group: AsyncGroup<string, number, Error>;

  beforeEach(() => {
    starter = new Subject<string>();
    dataSubject = new Subject<number>();
    errorSubject = new Subject<Error>();
    finishSubject = new Subject<void>();
    dataEmitter = emitter<number>();
    errorEmitter = emitter<Error>();
    finishEmitter = emitter<void>();
    dataState = state<number>(0);
    errorState = state<Error>(new Error());
    finishState = state<any>(null);
    group = asyncGroup<string, number, Error>();
  });

  it('Transmits data to the subject', done => {
    starter
      .pipe(switchMap(() => of(1).pipe(transmit(dataSubject))))
      .subscribe();

    dataSubject.subscribe(v => {
      expect(v).toBe(1);
      done();
    });

    starter.next('data');
  });

  it('Transmits data to the emitter', done => {
    starter
      .pipe(switchMap(() => of(1).pipe(transmit(dataEmitter))))
      .subscribe();

    dataEmitter.tap(v => {
      expect(v).toBe(1);
      done();
    });

    starter.next('data');
  });

  it('Transmits data to the state', done => {
    starter
      .pipe(switchMap(() => of(1).pipe(transmit(dataState))))
      .subscribe();

    dataState.tap(v => {
      if (v === 1) {
        expect(v).toBe(1);
        done();
      }
    });

    starter.next('data');
  });

  it('Transmits data to the finish subject', done => {
    starter
      .pipe(switchMap(() => of(1).pipe(transmit(dataSubject, errorSubject, finishSubject))))
      .subscribe();

    finishSubject.subscribe(() => {
      expect(1).toBe(1);
      done();
    });

    starter.next('data');
  });

  it('Transmits data to the finish emitter', done => {
    starter
      .pipe(switchMap(() => of(1).pipe(transmit(dataEmitter, errorEmitter, finishEmitter))))
      .subscribe();

    finishEmitter.tap(() => {
      expect(1).toBe(1);
      done();
    });

    starter.next('data');
  });

  it('Transmits data to the finish state', done => {
    let counter = 0;
    starter
      .pipe(switchMap(() => of(1).pipe(transmit(dataState, errorState, finishState))))
      .subscribe();

    finishState.tap(() => {
      ++counter;
      if (counter === 2) {
        expect(1).toBe(1);
        done();
      }
    });

    starter.next('data');
  });

  it('Transmits data to the async group success emitter', done => {
    starter
      .pipe(switchMap(() => of(1).pipe(transmit(group))))
      .subscribe();

    group.success.tap(v => {
      expect(v).toBe(1);
      done();
    });

    starter.next('data');
  });

  it('Transmits data to the async group finish emitter', done => {
    starter
      .pipe(switchMap(() => of(1).pipe(transmit(group))))
      .subscribe();

    group.finish.tap(() => {
      expect(1).toBe(1);
      done();
    });

    starter.next('data');
  });

  it('Transmits error to the subject', done => {
    starter
      .pipe(switchMap(() => throwError(() => new Error())
        .pipe(transmit(dataSubject, errorSubject))))
      .subscribe();

    errorSubject.subscribe(v => {
      expect(v instanceof Error).toBeTruthy();
      done();
    });

    starter.next('error');
  });

  it('Transmits error to the emitter', done => {
    starter
      .pipe(switchMap(() => throwError(() => new Error())
        .pipe(transmit(dataEmitter, errorEmitter))))
      .subscribe();

    errorEmitter.tap(v => {
      expect(v instanceof Error).toBeTruthy();
      done();
    });

    starter.next('error');
  });

  it('Transmits error to the state', done => {
    let counter = 0;
    starter
      .pipe(switchMap(() => throwError(() => new BfError())
        .pipe(transmit(dataState, errorState))))
      .subscribe();

    errorState.tap(v => {
      ++counter;
      if (counter === 2) {
        expect(v instanceof Error).toBeTruthy();
        done();
      }
    });

    starter.next('error');
  });

  it('Transmits error to the finish subject', done => {
    starter
      .pipe(switchMap(() => throwError(() => new Error())
        .pipe(transmit(dataSubject, errorSubject, finishSubject))))
      .subscribe();

    finishSubject.subscribe(() => {
      expect(1).toBe(1);
      done();
    });

    starter.next('data');
  });

  it('Transmits error to the finish emitter', done => {
    starter
      .pipe(switchMap(() => throwError(() => new Error())
        .pipe(transmit(dataEmitter, errorEmitter, finishEmitter))))
      .subscribe();

    finishEmitter.tap(() => {
      expect(1).toBe(1);
      done();
    });

    starter.next('data');
  });

  it('Transmits error to the finish state', done => {
    let counter = 0;
    starter
      .pipe(switchMap(() => throwError(() => new Error())
        .pipe(transmit(dataState, errorState, finishState))))
      .subscribe();

    finishState.tap(() => {
      ++counter;
      if (counter === 2) {
        expect(1).toBe(1);
        done();
      }
    });

    starter.next('data');
  });

  it('Transmits error to the async group fail emitter', done => {
    starter
      .pipe(switchMap(() => throwError(() => new Error())
        .pipe(transmit(group))))
      .subscribe();

    group.fail.tap(v => {
      expect(v instanceof Error).toBeTruthy();
      done();
    });

    starter.next('error');
  });

  it('Transmits error to the async group finish emitter', done => {
    starter
      .pipe(switchMap(() => throwError(() => new Error())
        .pipe(transmit(group))))
      .subscribe();

    group.finish.tap(() => {
      expect(1).toBe(1);
      done();
    });

    starter.next('error');
  });
});
