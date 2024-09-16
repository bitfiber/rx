import {State, state} from '@bitfiber/rx';

describe('@bitfiber/rx/store/state/initialization', () => {
  let testState: State<string>;

  beforeEach(() => {
    testState = state<string>('initialValue');
  });

  it('State is not initialized', () => {
    expect(testState.isInitialized()).toBeFalsy();
  });

  it('State is initialized', () => {
    testState.initialize();
    expect(testState.isInitialized()).toBeTruthy();
  });

  it('State is auto initialized after inner subscription', () => {
    testState.tap(() => true);
    expect(testState.isInitialized()).toBeTruthy();
  });

  it('onInit callback is not executed until initialization', () => {
    testState.onInit(e => e.tap(() => true));
    expect(testState.isInitialized()).toBeFalsy();
  });

  it('onInit callback is executed during initialization', done => {
    testState.onInit(e => e.tap(v => {
      expect(v).toBe('value2');
      done();
    }));

    setTimeout(() => {
      testState.set('value1');
      setTimeout(() => {
        testState.set('value2');
        setTimeout(() => {
          testState.initialize();
          setTimeout(() => {
            testState.set('value3');
          });
        });
      });
    });
  });

  it('State has an initial value', done => {
    testState.tap(v => {
      expect(v).toBe('initialValue');
      done();
    });
    testState.set('value2');
  });
});
