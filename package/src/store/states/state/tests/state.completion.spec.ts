import {state, State} from '@bitfiber/rx';

describe('@bitfiber/rx/store/state/completion', () => {
  let testState: State<string>;

  beforeEach(() => {
    testState = state<string>('initialValue');
  });

  it('State is not completed', () => {
    expect(testState.isCompleted()).toBeFalsy();
  });

  it('State is completed', () => {
    testState.complete();
    expect(testState.isCompleted()).toBeTruthy();
  });
});
