import {
  AsyncGroup, asyncGroup, Emitter, emitter, NamedGroup, group, namedGroup, State, state, Group,
} from '@bitfiber/rx';

describe('@bitfiber/rx/store/group', () => {
  let testGroup: Group;
  let state1: State<string>;
  let emitter1: Emitter<number>;
  let group1: NamedGroup<{state3: State<string>}>;
  let group2: AsyncGroup<string, number, number>;

  beforeEach(() => {
    testGroup = group();
    state1 = state<string>('initialValue1');
    emitter1 = emitter<number>();
    group1 = namedGroup({state3: state<string>('initialValue3')});
    group2 = asyncGroup<string, number, number>();
    testGroup.markAsReady();
  });

  it('Nested groups and emitters are not initialized', () => {
    expect(testGroup.isInitialized()).toBeFalsy();
    expect(state1.isInitialized()).toBeFalsy();
    expect(emitter1.isInitialized()).toBeFalsy();
    expect(group1.isInitialized()).toBeFalsy();
    expect(group1.state3.isInitialized()).toBeFalsy();
    expect(group2.isInitialized()).toBeFalsy();
    expect(group2.launch.isInitialized()).toBeFalsy();
    expect(group2.success.isInitialized()).toBeFalsy();
    expect(group2.fail.isInitialized()).toBeFalsy();
    expect(group2.finish.isInitialized()).toBeFalsy();
    expect(group2.state.isInitialized()).toBeFalsy();
  });

  it('Group initializes all nested groups and emitters', () => {
    testGroup.initialize();
    expect(testGroup.isInitialized()).toBeTruthy();
    expect(state1.isInitialized()).toBeTruthy();
    expect(emitter1.isInitialized()).toBeTruthy();
    expect(group1.isInitialized()).toBeTruthy();
    expect(group1.state3.isInitialized()).toBeTruthy();
    expect(group2.isInitialized()).toBeTruthy();
    expect(group2.launch.isInitialized()).toBeTruthy();
    expect(group2.success.isInitialized()).toBeTruthy();
    expect(group2.fail.isInitialized()).toBeTruthy();
    expect(group2.finish.isInitialized()).toBeTruthy();
    expect(group2.state.isInitialized()).toBeTruthy();
  });

  it('Group completes all nested groups and emitters', () => {
    testGroup.complete();
    expect(testGroup.isCompleted()).toBeTruthy();
    expect(state1.isCompleted()).toBeTruthy();
    expect(emitter1.isCompleted()).toBeTruthy();
    expect(group1.isCompleted()).toBeTruthy();
    expect(group1.state3.isCompleted()).toBeTruthy();
    expect(group2.isCompleted()).toBeTruthy();
    expect(group2.launch.isCompleted()).toBeTruthy();
    expect(group2.success.isCompleted()).toBeTruthy();
    expect(group2.fail.isCompleted()).toBeTruthy();
    expect(group2.finish.isCompleted()).toBeTruthy();
    expect(group2.state.isCompleted()).toBeTruthy();
  });
});
