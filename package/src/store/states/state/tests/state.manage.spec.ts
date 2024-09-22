import {state, State} from '@bitfiber/rx';
import {equals} from '@bitfiber/utils';
import {delay, map, tap} from 'rxjs';

describe('@bitfiber/rx/store/state/manage', () => {
  let testState: State<string>;

  beforeEach(() => {
    testState = state<string>('initialValue');
  });

  it('State manages all own streams', done => {
    const reference = ['initialValue2', 'initialValue2', 'value12', 'value12'];
    const result: string[] = [];
    let passed = false;
    testState
      .manage(delay(30), map(v => `${v}2`))
      .tap(v => {
        result.push(v);
        if (!passed && equals(result, reference)) {
          passed = true;
          expect(result).toEqual(reference);
          done();
        }
      })
      .effect(tap(v => {
        result.push(v);
        if (!passed && equals(result, reference)) {
          passed = true;
          expect(result).toEqual(reference);
          done();
        }
      }));

    testState.set('value1');
  });
});
