import {emitter, Emitter} from '@bitfiber/rx';
import {equals} from '@bitfiber/utils';
import {delay, map, tap} from 'rxjs';

describe('@bitfiber/rx/store/emitter/manage', () => {
  let testEmitter: Emitter<string>;

  beforeEach(() => {
    testEmitter = emitter<string>();
  });

  it('Emitter manages all own streams', done => {
    const reference = ['value12', 'value12'];
    const result: string[] = [];
    let passed = false;
    testEmitter
      .manage(delay(100), map(v => `${v}2`))
      .tap(v => {
        result.push(v);
        if (!passed && equals(result, reference)) {
          passed = true;
          expect(result).toEqual(reference);
          done();
        }
      })
      .effect(delay(100), tap(v => {
        result.push(v);
        if (!passed && equals(result, reference)) {
          passed = true;
          expect(result).toEqual(reference);
          done();
        }
      }));

    testEmitter.emit('value1');
  });
});
