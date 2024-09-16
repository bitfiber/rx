import {state} from '@bitfiber/rx';
import {tap} from 'rxjs';

describe('@bitfiber/rx/store/state/lazyEmission', () => {
  it('Does not emit an initial value to subscribers with lazy emission', done => {
    const result: string [] = [];
    const testState = state<string>('initialValue')
      .useLazyEmission();

    testState
      .tap(v => {
        result.push(v);
      })
      .effect(tap(v => {
        result.push(v);
      }))
      .$.subscribe(v => {
        result.push(v);
      });

    setTimeout(() => {
      testState.set('value1');
      setTimeout(() => {
        expect(result).toEqual(['value1', 'value1', 'value1']);
        done();
      }, 30);
    }, 30);
  });

  it('Does not emit an initial value to subscribers with one-time lazy emission', done => {
    const result: string [] = [];
    const testState = state<string>('initialValue');

    testState
      .tap(v => {
        result.push(v);
      })
      .useLazyEmissionOnce().effect(tap(v => {
        result.push(`${v}once`);
      }))
      .$.subscribe(v => {
        result.push(v);
      });

    setTimeout(() => {
      testState.set('value1');
      setTimeout(() => {
        expect(result).toEqual(['initialValue', 'initialValue', 'value1', 'value1once', 'value1']);
        done();
      }, 30);
    }, 30);
  });
});
