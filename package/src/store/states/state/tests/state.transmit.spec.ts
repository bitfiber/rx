import {emitter, State, state} from '@bitfiber/rx';
import {Subject} from 'rxjs';

describe('@bitfiber/rx/store/state/transmit', () => {
  let testState: State<string>;

  beforeEach(() => {
    testState = state<string>('initialValue');
  });

  it('State transmits value to emitter', done => {
    const someEmitter = emitter<string>();
    testState.transmit(someEmitter);
    someEmitter.tap(v => {
      expect(v).toBe('value1');
      done();
    });
    testState.set('value1');
  });

  it('State transmits value to emitter of another type', done => {
    const someEmitter = emitter<number>();
    testState.transmit(someEmitter, v => Number(v));
    someEmitter.tap(v => {
      expect(v).toBe(1);
      done();
    });
    testState.set('1');
  });

  it('State transmits value to state', done => {
    const someState = state<string>('initialValue2');
    testState.transmit(someState);
    someState.tap(v => {
      if (v === 'value1') {
        expect(v).toBe('value1');
        done();
      }
    });
    testState.set('value1');
  });

  it('State transmits value to state of another type', done => {
    const someState = state<number>(0);
    testState.transmit(someState, v => Number(v));
    someState.tap(v => {
      if (v === 1) {
        expect(v).toBe(1);
        done();
      }
    });
    testState.set('1');
  });

  it('State transmits value to a subject', done => {
    const subject = new Subject<string>();
    testState.transmit(subject);
    subject.subscribe(v => {
      expect(v).toBe('value1');
      done();
    });
    testState.set('value1');
  });

  it('State transmits value to a subject of another type', done => {
    const subject = new Subject<number>();
    testState.transmit(subject, v => Number(v));
    subject.subscribe(v => {
      expect(v).toBe(1);
      done();
    });
    testState.set('1');
  });

  it('State transmits value to multiple sources', done => {
    const someState = state<string>('initialValue2');
    const someEmitter = emitter<string>();
    const result: string[] = [];

    testState.transmit(someEmitter, someState);

    someState.tap(v => {
      result.push(`${v}S`);
      if (result.length === 3) {
        expect(result).toEqual(['initialValueS', 'value2E', 'value2S']);
        done();
      }
    });

    someEmitter.tap(v => {
      result.push(`${v}E`);
      if (result.length === 3) {
        expect(result).toEqual(['initialValueS', 'value2S', 'value2E']);
        done();
      }
    });

    setTimeout(() => testState.set('value2'));
  });
});
