import {equals, getWindow, Index} from '@bitfiber/utils';

import {LocalStoragePart, localStoragePart} from '../';

describe('@bitfiber/rx/source/localStoragePart', () => {
  let lsPart: LocalStoragePart;

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

    lsPart = localStoragePart('key');
    lsPart.set('value');
  });

  it('Returns a value', () => {
    expect(lsPart.get()).toBe('value');
  });

  it('Sets a value', () => {
    lsPart.set('value2');
    expect(lsPart.get()).toBe('value2');
  });

  it('Removes a value', () => {
    lsPart.remove();
    expect(lsPart.get()).toBeUndefined();
  });

  it('Emits a value', done => {
    const result: (string | undefined)[] = [];
    const reference = ['value', 'value2'];
    lsPart.$.subscribe(v => {
      result.push(v);
      if (equals(result, reference)) {
        expect(result).toEqual(reference);
        done();
      }
    });
    lsPart.set('value2');
  });
});
