import {emitter, Emitter, state} from '@bitfiber/rx';
import {of} from 'rxjs';

describe('@bitfiber/rx/store/emitter/select', () => {
  let testEmitter: Emitter<string>;

  beforeEach(() => {
    testEmitter = emitter<string>();
  });

  it('Emitter selects value from emitters', done => {
    const someEmitter1 = emitter<string>();
    const someEmitter2 = emitter<number>();
    testEmitter
      .select(someEmitter1, someEmitter2, (v1, v2) => v1 + v2)
      .tap(v => {
        expect(v).toBe('value12');
        done();
      });
    someEmitter1.emit('value1');
    someEmitter2.emit(2);
  });

  it('Emitter selects value from states', done => {
    const someState1 = state<string>('value1');
    const someState2 = state<number>(2);
    testEmitter
      .tap(v => {
        expect(v).toBe('value12');
        done();
      })
      .select(someState1, someState2, (v1, v2) => v1 + v2);
  });

  it('Emitter selects value from observables', done => {
    const observable1 = of('value1');
    const observable2 = of(2);
    testEmitter
      .tap(v => {
        expect(v).toBe('value12');
        done();
      })
      .select(observable1, observable2, (v1, v2) => v1 + v2);
  });

  it('Emitter selects value from different sources', done => {
    const observable = of('value1');
    const someState = state<string>('value2');
    const someEmitter = emitter<string>();
    testEmitter
      .tap(v => {
        expect(v).toBe('value1value2value3');
        done();
      })
      .select(observable, someState, someEmitter, (v1, v2, v3) => v1 + v2 + v3);
    someEmitter.emit('value3');
  });
});
