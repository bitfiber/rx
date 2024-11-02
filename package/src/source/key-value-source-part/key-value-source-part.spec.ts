import {equals} from '@bitfiber/utils';

import {KeyValueSourcePart, MemoryStorage} from '../';

describe('@bitfiber/rx/source/KeyValueSourcePart', () => {
  let part: KeyValueSourcePart<string>;

  beforeEach(() => {
    part = new KeyValueSourcePart('someKey', new MemoryStorage());
    part.set('value');
  });

  it('Returns a value', () => {
    expect(part.get()).toBe('value');
  });

  it('Sets a value', () => {
    part.set('value2');
    expect(part.get()).toBe('value2');
  });

  it('Removes a value', () => {
    part.remove();
    expect(part.get()).toBeUndefined();
  });

  it('Emits a value', done => {
    const result: (string | undefined)[] = [];
    const reference = ['value', 'value2'];
    part.$.subscribe();
    part.$.subscribe(v => {
      result.push(v);
      if (equals(result, reference)) {
        expect(result).toEqual(reference);
        done();
      }
    });
    part.set('value2');
  });
});
