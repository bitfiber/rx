import {delay, of, switchMap} from 'rxjs';
import {asyncGroup, emitter, state, Store, transmit} from '@bitfiber/rx';

interface EntitiesFilters {
  search: string;
  page: number;
}

interface EntitiesState {
  entities: string[];
  isLoading: boolean;
}

class EntitiesStore extends Store {
  notInitializedBeforeInit = false;
  initializedAfterInit = false;
  notCompletedBeforeComplete = false;
  completedAfterComplete = false;

  start = emitter<void>();

  filters = state<EntitiesFilters>({search: '', page: 1})
    .useLazyEmission();

  entitiesReq = asyncGroup<EntitiesFilters, string[], Error>((entitiesReq, {launch}) => {
    launch
      .receive(this.start, () => this.filters())
      .receive(this.filters)
      .effect(switchMap(() => of(['entity1', 'entity2']).pipe(delay(100))), transmit(entitiesReq));
  });

  data = state<EntitiesState>({entities: [], isLoading: false}, data => data
    .select(this.entitiesReq.success, this.entitiesReq.state, (entities, {inProgress}) => {
      return {entities, isLoading: inProgress};
    }));

  beforeStoreInit(): void {
    if (!this.isInitialized()) {
      this.notInitializedBeforeInit = true;
    }
  }

  afterStoreInit(): void {
    if (this.isInitialized()) {
      this.initializedAfterInit = true;
    }
  }

  beforeStoreComplete(): void {
    if (!this.isCompleted()) {
      this.notCompletedBeforeComplete = true;
    }
  }

  afterStoreComplete(): void {
    if (this.isCompleted()) {
      this.completedAfterComplete = true;
    }
  }
}

describe('@bitfiber/rx/store/abstractStore', () => {
  let testStore: EntitiesStore;

  beforeEach(() => {
    testStore = new EntitiesStore();
  });

  it('Nested groups and emitters are not initialized', () => {
    expect(testStore.start.isInitialized()).toBeFalsy();
    expect(testStore.filters.isInitialized()).toBeFalsy();
    expect(testStore.data.isInitialized()).toBeFalsy();
    expect(testStore.entitiesReq.launch.isInitialized()).toBeFalsy();
    expect(testStore.entitiesReq.success.isInitialized()).toBeFalsy();
    expect(testStore.entitiesReq.fail.isInitialized()).toBeFalsy();
    expect(testStore.entitiesReq.finish.isInitialized()).toBeFalsy();
    expect(testStore.entitiesReq.state.isInitialized()).toBeFalsy();
  });

  it('Store initializes all nested groups and emitters', () => {
    testStore.initialize();
    expect(testStore.start.isInitialized()).toBeTruthy();
    expect(testStore.filters.isInitialized()).toBeTruthy();
    expect(testStore.data.isInitialized()).toBeTruthy();
    expect(testStore.entitiesReq.launch.isInitialized()).toBeTruthy();
    expect(testStore.entitiesReq.success.isInitialized()).toBeTruthy();
    expect(testStore.entitiesReq.fail.isInitialized()).toBeTruthy();
    expect(testStore.entitiesReq.finish.isInitialized()).toBeTruthy();
    expect(testStore.entitiesReq.state.isInitialized()).toBeTruthy();
  });

  it('Hook "beforeStoreInit" is called before initialization', () => {
    testStore.initialize();
    expect(testStore.notInitializedBeforeInit).toBeTruthy();
  });

  it('Hook "afterStoreInit" is called after initialization', () => {
    testStore.initialize();
    expect(testStore.initializedAfterInit).toBeTruthy();
  });

  it('Initiate callback is called before initialization', () => {
    testStore.initialize(() => {
      expect(testStore.isInitialized()).toBeFalsy();
    });
  });

  it('Initiate callback has an argument "store" which is the same as "testStore"', () => {
    testStore.initialize(store => {
      expect(testStore === store).toBeTruthy();
    });
  });

  it('Store completes all nested groups and emitters', () => {
    testStore.initialize();
    testStore.complete();
    expect(testStore.start.isCompleted()).toBeTruthy();
    expect(testStore.filters.isCompleted()).toBeTruthy();
    expect(testStore.data.isCompleted()).toBeTruthy();
    expect(testStore.entitiesReq.launch.isCompleted()).toBeTruthy();
    expect(testStore.entitiesReq.success.isCompleted()).toBeTruthy();
    expect(testStore.entitiesReq.fail.isCompleted()).toBeTruthy();
    expect(testStore.entitiesReq.finish.isCompleted()).toBeTruthy();
    expect(testStore.entitiesReq.state.isCompleted()).toBeTruthy();
  });

  it('Hook "beforeStoreComplete" is called before completion', () => {
    testStore.initialize();
    testStore.complete();
    expect(testStore.notCompletedBeforeComplete).toBeTruthy();
  });

  it('Hook "afterStoreComplete" is called after completion', () => {
    testStore.initialize();
    testStore.complete();
    expect(testStore.completedAfterComplete).toBeTruthy();
  });
});
