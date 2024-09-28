import {MemoryStorage, MemoryStoragePart, State, state} from '@bitfiber/rx';

describe('@bitfiber/rx/store/state/source', () => {
  let testSource: MemoryStoragePart;
  let testState: State<string | undefined>;

  beforeEach(() => {
    testSource = new MemoryStoragePart('someKey', new MemoryStorage());
    testState = state<string | undefined>(undefined);
  });

  it('State is undefined if state and source is undefined', () => {
    testState.connect(testSource);
    expect(testState.get()).toBeUndefined();
  });

  it('State receives a source value if source is defined', () => {
    testSource.set('value1');
    testState.connect(testSource);
    expect(testState.get()).toBe('value1');
  });

  it('State does not receive a source value if source is undefined', () => {
    testState.set('value1');
    testState.connect(testSource);
    expect(testState.get()).toBe('value1');
  });

  it('Undefined source receives a state value', () => {
    testState.set('value1');
    testState.connect(testSource);
    expect(testSource.get()).toBe('value1');
  });

  it('State receives a source value if both is defined', () => {
    testState.set('value1');
    testSource.set('value2');
    testState.connect(testSource);
    expect(testState.get()).toBe('value2');
  });

  it('Source receives a changed state value after initialization', done => {
    setTimeout(() => {
      testState.set('value1');
      setTimeout(() => {
        testSource.set('value2');
        setTimeout(() => {
          testState.connect(testSource);
          setTimeout(() => {
            testState.set('value3');
            setTimeout(() => {
              expect(testSource.get()).toBe('value3');
              done();
            });
          });
        });
      });
    });
  });

  it('State receives a changed source value after initialization', done => {
    setTimeout(() => {
      testState.set('value1');
      setTimeout(() => {
        testSource.set('value2');
        setTimeout(() => {
          testState.connect(testSource);
          setTimeout(() => {
            testSource.set('value3');
            setTimeout(() => {
              expect(testState.get()).toBe('value3');
              done();
            });
          });
        });
      });
    });
  });
});
