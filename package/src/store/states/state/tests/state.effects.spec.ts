import {state, State} from '@bitfiber/rx';
import {equals} from '@bitfiber/utils';
import {tap} from 'rxjs';

describe('@bitfiber/rx/store/state/effects', () => {
  let testState: State<string>;
  const reference = ['initialValue', 'value1'];
  let result: string[] = [];
  let passed = false;

  beforeEach(() => {
    testState = state<string>('initialValue');
    result = [];
    passed = false;
  });

  it('State tap emits a value', done => {
    testState.tap(v => {
      result.push(v);
      if (!passed && equals(result, reference)) {
        passed = true;
        expect(result).toEqual(reference);
        done();
      }
    });
    testState.set('value1');
  });

  it('State effect emits a value', done => {
    testState.effect(tap(v => {
      result.push(v);
      if (!passed && equals(result, reference)) {
        passed = true;
        expect(result).toEqual(reference);
        done();
      }
    }));
    testState.set('value1');
  });

  it('State observable emits a value', done => {
    testState.$.subscribe(v => {
      result.push(v);
      if (!passed && equals(result, reference)) {
        passed = true;
        expect(result).toEqual(reference);
        done();
      }
    });
    testState.set('value1');
  });
});
