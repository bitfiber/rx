import {emitter, Emitter, state} from '@bitfiber/rx';
import {Subject} from 'rxjs';

describe('@bitfiber/rx/store/emitter/transmit', () => {
  let testEmitter: Emitter<string>;

  beforeEach(() => {
    testEmitter = emitter<string>();
  });

  it('Emitter transmits value to emitter', done => {
    const someEmitter = emitter<string>();
    testEmitter.transmit(someEmitter);
    someEmitter.tap(v => {
      expect(v).toBe('value1');
      done();
    });
    testEmitter.emit('value1');
  });

  it('Emitter transmits value to emitter of another type', done => {
    const someEmitter = emitter<number>();
    testEmitter.transmit(someEmitter, v => Number(v));
    someEmitter.tap(v => {
      expect(v).toBe(1);
      done();
    });
    testEmitter.emit('1');
  });

  it('Emitter transmits value to state', done => {
    const someState = state<string>('initialValue');
    testEmitter.transmit(someState);
    someState.tap(v => {
      if (v === 'value1') {
        expect(v).toBe('value1');
        done();
      }
    });
    testEmitter.emit('value1');
  });

  it('Emitter transmits value to state of another type', done => {
    const someState = state<number>(0);
    testEmitter.transmit(someState, v => Number(v));
    someState.tap(v => {
      if (v === 1) {
        expect(v).toBe(1);
        done();
      }
    });
    testEmitter.emit('1');
  });

  it('Emitter transmits value to a subject', done => {
    const subject = new Subject<string>();
    testEmitter.transmit(subject);
    subject.subscribe(v => {
      expect(v).toBe('value1');
      done();
    });
    testEmitter.emit('value1');
  });

  it('Emitter transmits value to a subject of another type', done => {
    const subject = new Subject<number>();
    testEmitter.transmit(subject, v => Number(v));
    subject.subscribe(v => {
      expect(v).toBe(1);
      done();
    });
    testEmitter.emit('1');
  });

  it('Emitter transmits value to multiple sources', done => {
    const someState = state<string>('initialValue');
    const someEmitter = emitter<string>();
    const result: string[] = [];

    testEmitter.transmit(someEmitter, someState);

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

    testEmitter.emit('value2');
  });
});
