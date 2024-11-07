import {delay, of, switchMap, take} from 'rxjs';
import {asyncGroup, emitter, state, Store, transmit} from '@bitfiber/rx';

interface EntitiesFilters {
  search: string;
  page: number;
}

interface EntitiesState {
  dict1: string[];
  dict2: string[];
  dict3: string[];
  entities: string[];
  isLoading: boolean;
}

class EntitiesStore extends Store {
  start = emitter<void>(init => init
    .manage(take(1)));

  filters = state<EntitiesFilters>({search: '', page: 1})
    .useLazyEmission();

  dict1Req = asyncGroup<void, string[], Error>(dict1Req => {
    dict1Req.launch
      .receive(this.start)
      .receive(this.filters, () => undefined)
      .effect(
        switchMap((_, index) => of(
          ['dict1a', 'dict1b', ...(index === 1 ? ['dict1c'] : [])],
        ).pipe(delay(30), transmit(dict1Req))),
      );
  }, []);

  dict2Req = asyncGroup<void, string[], Error>(dict2Req => {
    dict2Req.launch
      .receive(this.start)
      .receive(this.filters, () => undefined)
      .effect(
        switchMap((_, index) => of(
          ['dict2a', 'dict2b', ...(index === 1 ? ['dict2c'] : [])],
        ).pipe(delay(30), transmit(dict2Req))),
      );
  }, []);

  dict3Req = asyncGroup<[string[], string[]], string[], Error>(dict3Req => {
    dict3Req.launch
      .zip(this.dict1Req.success, this.dict2Req.success, (dict1, dict2) => {
        return [dict1, dict2];
      })
      .effect(
        switchMap((_, index) => of(
          ['dict3a', 'dict3b', ...(index === 1 ? ['dict3c'] : [])],
        ).pipe(delay(30), transmit(dict3Req))),
      );
  }, []);

  entitiesReq = asyncGroup<EntitiesFilters, string[], Error>((entitiesReq, {launch}) => {
    launch
      .receive(this.dict3Req.success, () => this.filters())
      .effect(
        switchMap((_, index) => of(
          ['entity1', 'entity2', ...(index === 1 ? ['entity3'] : [])],
        ).pipe(delay(30), transmit(entitiesReq))),
      );
  }, []);

  data = state<EntitiesState>(
    {dict1: [], dict2: [], dict3: [], entities: [], isLoading: false},
    data => data
      .select(
        this.dict1Req.state,
        this.dict2Req.state,
        this.dict3Req.state,
        this.entitiesReq.state,
        (dict1State, dict2State, dict3State, entitiesState) => {
          return {
            ...data(),
            isLoading: dict1State.inProgress || dict2State.inProgress
              || dict3State.inProgress || entitiesState.inProgress,
          };
        },
      )
      .zip(
        this.dict1Req.success,
        this.dict2Req.success,
        this.dict3Req.success,
        this.entitiesReq.success,
        (dict1, dict2, dict3, entities) => {
          return {...data(), dict1, dict2, dict3, entities};
        },
      ),
  );

  ready = this.markAsReady();
}

describe('@bitfiber/rx/store/store2', () => {
  let testStore: EntitiesStore;

  beforeEach(() => {
    testStore = new EntitiesStore();
  });

  it('Final data is received', done => {
    testStore.initialize();
    testStore.data.tap(data => {
      if (data.entities.length === 3) {
        expect(testStore.data()).toEqual({
          dict1: ['dict1a', 'dict1b', 'dict1c'],
          dict2: ['dict2a', 'dict2b', 'dict2c'],
          dict3: ['dict3a', 'dict3b', 'dict3c'],
          entities: ['entity1', 'entity2', 'entity3'],
          isLoading: false,
        });
        done();
      }
    });

    setTimeout(() => {
      testStore.start.emit();

      setTimeout(() => {
        testStore.filters.set({search: 'aa', page: 2});
      }, 150);
    }, 30);
  });
});
