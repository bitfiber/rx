import {emitter, Emitter} from '@bitfiber/rx';

describe('@bitfiber/rx/store/emitter/initialization', () => {
  let testEmitter: Emitter<string>;

  beforeEach(() => {
    testEmitter = emitter<string>();
  });

  it('Emitter is not initialized', () => {
    expect(testEmitter.isInitialized()).toBeFalsy();
  });

  it('Emitter is initialized', () => {
    testEmitter.initialize();
    expect(testEmitter.isInitialized()).toBeTruthy();
  });

  it('Emitter is auto initialized after inner subscription', () => {
    testEmitter.tap(() => true);
    expect(testEmitter.isInitialized()).toBeTruthy();
  });

  it('onInit callback is not executed until initialization', () => {
    testEmitter.onInit(e => e.tap(() => true));
    expect(testEmitter.isInitialized()).toBeFalsy();
  });

  it('onInit callback is executed during initialization', done => {
    testEmitter.onInit(e => e.tap(v => {
      expect(v).toBe('value2');
      done();
    }));
    testEmitter.emit('value1');
    testEmitter.initialize();
    testEmitter.emit('value2');
  });

  it('Emitter has no an initial value', done => {
    testEmitter.emit('value1');
    testEmitter.tap(v => {
      expect(v).toBe('value2');
      done();
    });
    testEmitter.emit('value2');
  });
});
