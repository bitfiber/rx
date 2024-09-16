import {equals} from '@bitfiber/utils';

import {MemoryStoragePart, memoryStoragePart} from '../';

describe('@bitfiber/rx/source/memoryStoragePart', () => {
  let msPart: MemoryStoragePart;

  beforeEach(() => {
    msPart = memoryStoragePart('key');
    msPart.set('value');
  });

  it('Returns a value', () => {
    expect(msPart.get()).toBe('value');
  });

  it('Sets a value', () => {
    msPart.set('value2');
    expect(msPart.get()).toBe('value2');
  });

  it('Removes a value', () => {
    msPart.remove();
    expect(msPart.get()).toBeUndefined();
  });

  it('Emits a value', done => {
    const result: (string | undefined)[] = [];
    const reference = ['value', 'value2'];
    msPart.$.subscribe(v => {
      result.push(v);
      if (equals(result, reference)) {
        expect(result).toEqual(reference);
        done();
      }
    });
    msPart.set('value2');
  });
});
