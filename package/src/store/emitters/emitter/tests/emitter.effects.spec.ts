import {emitter, Emitter} from '@bitfiber/rx';
import {tap} from 'rxjs';

describe('@bitfiber/rx/store/emitter/effects', () => {
  let testEmitter: Emitter<string>;

  beforeEach(() => {
    testEmitter = emitter<string>();
  });

  it('Emitter tap emits a value', done => {
    testEmitter.tap(v => {
      expect(v).toBe('value1');
      done();
    });
    testEmitter.emit('value1');
  });

  it('Emitter effect emits a value', done => {
    testEmitter.effect(tap(v => {
      expect(v).toBe('value1');
      done();
    }));
    testEmitter.emit('value1');
  });

  it('Emitter observable emits a value', done => {
    testEmitter.$.subscribe(v => {
      expect(v).toBe('value1');
      done();
    });
    testEmitter.emit('value1');
  });
});
