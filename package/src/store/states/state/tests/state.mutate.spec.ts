import {Index} from '@bitfiber/utils';
import {State, state} from '@bitfiber/rx';

describe('@bitfiber/rx/store/state/mutate', () => {
  let testState: State<Index>;

  beforeEach(() => {
    testState = state<Index>({initialValue: true});
  });

  it('Initial value is changed', () => {
    testState.mutate(state => (state['value1'] = true));
    expect(testState.get()).toEqual({initialValue: true, value1: true});
  });

  it('Callback returns an initial value', () => {
    testState.mutate(state => {
      expect(state).toEqual({initialValue: true});
    });
  });

  it('Strict comparison: the same value is emitted', done => {
    let counter = 0;
    testState.compareBy('strict');
    testState.tap(() => ++counter);

    setTimeout(() => {
      testState.mutate(state => (state['value1'] = true));
      setTimeout(() => {
        testState.mutate(state => (state['value2'] = true));
        setTimeout(() => {
          testState.mutate(state => (state['value2'] = true));
          setTimeout(() => {
            expect(counter).toBe(4);
            done();
          });
        });
      });
    });
  });

  it('Equals comparison: the same value emitted', done => {
    let counter = 0;
    testState.compareBy('equals');
    testState.tap(() => ++counter);

    setTimeout(() => {
      testState.mutate(state => (state['value1'] = true));
      setTimeout(() => {
        testState.mutate(state => (state['value2'] = true));
        setTimeout(() => {
          testState.mutate(state => (state['value2'] = true));
          setTimeout(() => {
            expect(counter).toBe(4);
            done();
          });
        });
      });
    });
  });

  it('Custom comparison: the same value is emitted', done => {
    let counter = 0;
    testState.compareBy((a, b) => a.value2 && b.value2);
    testState.tap(() => ++counter);

    setTimeout(() => {
      testState.mutate(state => (state['value1'] = true));
      setTimeout(() => {
        testState.mutate(state => (state['value2'] = true));
        setTimeout(() => {
          testState.mutate(state => (state['value2'] = true));
          setTimeout(() => {
            expect(counter).toBe(4);
            done();
          });
        });
      });
    });
  });
});
