import {equals} from '@bitfiber/utils';

import {memoryStorage, MemoryStorage} from '../';

describe('@bitfiber/rx/source/memoryStorage', () => {
  let ms: MemoryStorage;

  beforeEach(() => {
    ms = memoryStorage();
    ms.set('key', 'value');
  });

  it('Returns a value', () => {
    expect(ms.get('key')).toBe('value');
  });

  it('Sets a value', () => {
    ms.set('key', 'value2');
    expect(ms.get('key')).toBe('value2');
  });

  it('Removes a value', () => {
    ms.remove('key');
    expect(ms.get('key')).toBeUndefined();
  });

  it('Emits a value', done => {
    const result: string[] = [];
    const reference = ['value', 'value2'];
    ms.observe('key').subscribe(v => {
      result.push(v);
      if (equals(result, reference)) {
        expect(result).toEqual(reference);
        done();
      }
    });
    ms.set('key', 'value2');
  });
});
