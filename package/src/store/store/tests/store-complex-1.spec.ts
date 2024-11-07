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
  start = emitter<void>();

  filters = state<EntitiesFilters>({search: '', page: 1})
    .useLazyEmission();

  entitiesReq = asyncGroup<EntitiesFilters, string[], Error>((entitiesReq, {launch}) => {
    launch
      .receive(this.start, () => this.filters())
      .receive(this.filters)
      .effect(
        switchMap(() => of(['entity1', 'entity2']).pipe(delay(50), transmit(entitiesReq))),
      );
  }, []);

  data = state<EntitiesState>({entities: [], isLoading: false}, data => data
    .receive(this.entitiesReq.state, ({inProgress}) => {
      return {...data(), isLoading: inProgress};
    })
    .select(this.entitiesReq.success, entities => {
      return {...data(), entities};
    }));

  ready = this.markAsReady();
}

describe('@bitfiber/rx/store/store1', () => {
  let testStore: EntitiesStore;

  beforeEach(() => {
    testStore = new EntitiesStore();
  });

  it('Final data is received', done => {
    testStore.initialize();
    testStore.data.tap(data => {
      if (data.entities.length) {
        expect(testStore.data()).toEqual({
          entities: ['entity1', 'entity2'],
          isLoading: false,
        });
        done();
      }
    });

    setTimeout(() => {
      testStore.start.emit();
    }, 50);
  });
});
