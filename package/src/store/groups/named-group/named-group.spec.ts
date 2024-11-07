import {
  AsyncGroup, asyncGroup, Emitter, emitter, NamedGroup, namedGroup, State, state,
} from '@bitfiber/rx';

describe('@bitfiber/rx/store/namedGroup', () => {
  let testGroup: NamedGroup<{
    state1: State<string>;
    state2: State<string>;
    emitter1: Emitter<number>;
    group1: NamedGroup<{state3: State<string>}>;
    group2: AsyncGroup<string, number, number>;
  }>;

  beforeEach(() => {
    testGroup = namedGroup({
      counter: 0,
      state1: state<string>('initialValue1'),
      state2: state<string>('initialValue2'),
      emitter1: emitter<number>(),
      group1: namedGroup({state3: state<string>('initialValue3')}),
      group2: asyncGroup<string, number, number>(),
    });
  });

  it('Group has all nested groups and emitters', () => {
    expect((testGroup as any).counter).toBeUndefined();
    expect(testGroup.state1 instanceof State).toBeTruthy();
    expect(testGroup.state2 instanceof State).toBeTruthy();
    expect(testGroup.emitter1 instanceof Emitter).toBeTruthy();
    expect(testGroup.group1.state3 instanceof State).toBeTruthy();
    expect(testGroup.group2 instanceof AsyncGroup).toBeTruthy();
    expect(testGroup.group2.launch instanceof Emitter).toBeTruthy();
    expect(testGroup.group2.success instanceof Emitter).toBeTruthy();
    expect(testGroup.group2.fail instanceof Emitter).toBeTruthy();
    expect(testGroup.group2.finish instanceof Emitter).toBeTruthy();
    expect(testGroup.group2.state instanceof State).toBeTruthy();
  });

  it('Nested groups and emitters are not initialized', () => {
    expect(testGroup.state1.isInitialized()).toBeFalsy();
    expect(testGroup.state2.isInitialized()).toBeFalsy();
    expect(testGroup.emitter1.isInitialized()).toBeFalsy();
    expect(testGroup.group1.isInitialized()).toBeFalsy();
    expect(testGroup.group1.state3.isInitialized()).toBeFalsy();
    expect(testGroup.group2.isInitialized()).toBeFalsy();
    expect(testGroup.group2.launch.isInitialized()).toBeFalsy();
    expect(testGroup.group2.success.isInitialized()).toBeFalsy();
    expect(testGroup.group2.fail.isInitialized()).toBeFalsy();
    expect(testGroup.group2.finish.isInitialized()).toBeFalsy();
    expect(testGroup.group2.state.isInitialized()).toBeFalsy();
  });

  it('Group initializes all nested groups and emitters', () => {
    testGroup.initialize();
    expect(testGroup.state1.isInitialized()).toBeTruthy();
    expect(testGroup.state2.isInitialized()).toBeTruthy();
    expect(testGroup.emitter1.isInitialized()).toBeTruthy();
    expect(testGroup.group1.isInitialized()).toBeTruthy();
    expect(testGroup.group1.state3.isInitialized()).toBeTruthy();
    expect(testGroup.group2.isInitialized()).toBeTruthy();
    expect(testGroup.group2.launch.isInitialized()).toBeTruthy();
    expect(testGroup.group2.success.isInitialized()).toBeTruthy();
    expect(testGroup.group2.fail.isInitialized()).toBeTruthy();
    expect(testGroup.group2.finish.isInitialized()).toBeTruthy();
    expect(testGroup.group2.state.isInitialized()).toBeTruthy();
  });

  it('Group completes all nested groups and emitters', () => {
    testGroup.complete();
    expect(testGroup.state1.isCompleted()).toBeTruthy();
    expect(testGroup.state2.isCompleted()).toBeTruthy();
    expect(testGroup.emitter1.isCompleted()).toBeTruthy();
    expect(testGroup.group1.isCompleted()).toBeTruthy();
    expect(testGroup.group1.state3.isCompleted()).toBeTruthy();
    expect(testGroup.group2.isCompleted()).toBeTruthy();
    expect(testGroup.group2.launch.isCompleted()).toBeTruthy();
    expect(testGroup.group2.success.isCompleted()).toBeTruthy();
    expect(testGroup.group2.fail.isCompleted()).toBeTruthy();
    expect(testGroup.group2.finish.isCompleted()).toBeTruthy();
    expect(testGroup.group2.state.isCompleted()).toBeTruthy();
  });
});
