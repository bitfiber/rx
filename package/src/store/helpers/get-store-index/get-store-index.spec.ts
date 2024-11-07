import {mapObj} from '@bitfiber/utils';
import {asyncGroup, emitter, getStoreIndex, namedGroup, state} from '@bitfiber/rx';

describe('@bitfiber/rx/store/getStoreIndex', () => {
  it('Returns an index with store groups and emitters only', () => {
    const store = {
      counter: 0,
      state1: state<string>('initialValue1'),
      state2: state<string>('initialValue2'),
      emitter1: emitter<number>(),
      group1: namedGroup({state3: state<string>('initialValue3')}),
      group2: asyncGroup<string, number, number>(),
      arr: [],
    };
    const storeIndex = mapObj(getStoreIndex(store), () => true);

    expect(storeIndex).toEqual({
      state1: true,
      state2: true,
      emitter1: true,
      group1: true,
      group2: true,
    });
  });
});
