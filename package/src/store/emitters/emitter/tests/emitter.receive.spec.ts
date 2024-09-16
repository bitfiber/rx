import {emitter, Emitter, state} from '@bitfiber/rx';
import {of} from 'rxjs';

describe('@bitfiber/rx/store/emitter/receive', () => {
  let testEmitter: Emitter<string>;

  beforeEach(() => {
    testEmitter = emitter<string>();
  });

  it('Emitter receives value from emitter', done => {
    const someEmitter = emitter<string>();
    testEmitter
      .receive(someEmitter)
      .tap(v => {
        expect(v).toBe('value1');
        done();
      });
    someEmitter.emit('value1');
  });

  it('Emitter receives value from emitter of another type', done => {
    const someEmitter = emitter<number>();
    testEmitter
      .receive(someEmitter, v => `value${v}`)
      .tap(v => {
        expect(v).toBe('value1');
        done();
      });
    someEmitter.emit(1);
  });

  it('Emitter receives value from state', done => {
    const someState = state<string>('initialValue');
    testEmitter
      .receive(someState)
      .tap(v => {
        expect(v).toBe('value1');
        done();
      });
    someState.set('value1');
  });

  it('Emitter receives initial value from state', done => {
    const someState = state<string>('initialValue');
    testEmitter
      .tap(v => {
        expect(v).toBe('initialValue');
        done();
      })
      .receive(someState);
    someState.set('value1');
  });

  it('Emitter receives value from state of another type', done => {
    const someState = state<number>(0);
    testEmitter
      .receive(someState, v => `value${v}`)
      .tap(v => {
        expect(v).toBe('value1');
        done();
      });
    someState.set(1);
  });

  it('Emitter receives value from an observable', done => {
    const observable = of('value1');
    testEmitter
      .tap(v => {
        expect(v).toBe('value1');
        done();
      })
      .receive(observable);
  });

  it('Emitter receives value from an observable of another type', done => {
    const observable = of(1);
    testEmitter
      .tap(v => {
        expect(v).toBe('value1');
        done();
      })
      .receive(observable, v => `value${v}`);
  });

  it('Emitter receives value from multiple sources', done => {
    const observable = of('value1');
    const someState = state<string>('value2');
    const someEmitter = emitter<string>();
    const result: string[] = [];
    testEmitter
      .tap(v => {
        result.push(v);
        if (result.length === 3) {
          expect(result).toEqual(['value1', 'value2', 'value3']);
          done();
        }
      })
      .receive(observable, someEmitter, someState);
    someEmitter.emit('value3');
  });
});
