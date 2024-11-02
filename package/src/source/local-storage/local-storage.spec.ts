import {equals, getWindow, Index} from '@bitfiber/utils';

import {LocalStorage, localStorage} from '../';

describe('@bitfiber/rx/source/localStorage', () => {
  let ls: LocalStorage;

  beforeEach(() => {
    const win = getWindow();

    // localStorage mock
    if (!win.localStorage) {
      let storage: Index = {};
      Object.defineProperty(
        win,
        'localStorage',
        {enumerable: true, configurable: true, writable: true},
      );

      win.localStorage = {
        length: 0,
        clear(): void {
          storage = {};
        },
        getItem(key: string): string | null {
          return storage[key] || null;
        },
        key(): string | null {
          return '';
        },
        removeItem(key: string): void {
          delete storage[key];
        },
        setItem(key: string, value: string): void {
          storage[key] = value;
        },
      };
    }

    ls = localStorage();
    ls.set('key', 'value');
  });

  it('Returns a value', () => {
    expect(ls.get('key')).toBe('value');
  });

  it('Sets a value', () => {
    ls.set('key', 'value2');
    expect(ls.get('key')).toBe('value2');
  });

  it('Removes a value', () => {
    ls.remove('key');
    expect(ls.get('key')).toBeUndefined();
  });

  it('Emits a value', done => {
    const result: string[] = [];
    const reference = ['value', 'value2'];
    const ob$ = ls.observe('key');
    ob$.subscribe();
    ob$.subscribe(v => {
      result.push(v);
      if (equals(result, reference)) {
        expect(result).toEqual(reference);
        done();
      }
    });
    ls.set('key', 'value2');
  });
});
