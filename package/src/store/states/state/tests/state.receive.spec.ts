import {emitter, State, state} from '@bitfiber/rx';
import {delay, of} from 'rxjs';

describe('@bitfiber/rx/store/state/receive', () => {
  let testState: State<string>;

  beforeEach(() => {
    testState = state<string>('initialValue');
  });

  it('State receives value from emitter', done => {
    const someEmitter = emitter<string>();
    testState
      .receive(someEmitter)
      .tap(v => {
        if (v === 'value1') {
          expect(v).toBe('value1');
          done();
        }
      });
    someEmitter.emit('value1');
  });

  it('State receives value from emitter of another type', done => {
    const someEmitter = emitter<number>();
    testState
      .receive(someEmitter, v => `value${v}`)
      .tap(v => {
        if (v === 'value1') {
          expect(v).toBe('value1');
          done();
        }
      });
    someEmitter.emit(1);
  });

  it('State receives value from state', done => {
    const someState = state<string>('initialValue');
    testState
      .receive(someState)
      .tap(v => {
        if (v === 'value1') {
          expect(v).toBe('value1');
          done();
        }
      });
    someState.set('value1');
  });

  it('State receives initial value from state', done => {
    const someState = state<string>('initialValue2');
    testState
      .tap(v => {
        if (v === 'initialValue2') {
          expect(v).toBe('initialValue2');
          done();
        }
      })
      .receive(someState);
  });

  it('State receives value from state of another type', done => {
    const someState = state<number>(0);
    testState
      .receive(someState, v => `value${v}`)
      .tap(v => {
        if (v === 'value1') {
          expect(v).toBe('value1');
          done();
        }
      });
    someState.set(1);
  });

  it('State receives value from an observable', done => {
    const observable = of('value1');
    testState
      .tap(v => {
        if (v === 'value1') {
          expect(v).toBe('value1');
          done();
        }
      })
      .receive(observable);
  });

  it('State receives value from an observable of another type', done => {
    const observable = of(1);
    testState
      .tap(v => {
        if (v === 'value1') {
          expect(v).toBe('value1');
          done();
        }
      })
      .receive(observable, v => `value${v}`);
  });

  it('State receives value from multiple sources', done => {
    const someState = state<string>('value1');
    const observable = of('value2').pipe(delay(30));
    const someEmitter = emitter<string>();
    const result: string[] = [];
    testState
      .tap(v => {
        result.push(v);
        if (result.length === 4) {
          expect(result).toEqual(['initialValue', 'value1', 'value2', 'value3']);
          done();
        }
      })
      .receive(observable, someEmitter, someState);
    setTimeout(() => someEmitter.emit('value3'), 60);
  });
});
