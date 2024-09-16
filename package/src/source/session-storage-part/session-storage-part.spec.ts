import {equals, getWindow, Index} from '@bitfiber/utils';

import {SessionStoragePart, sessionStoragePart} from '../';

describe('@bitfiber/rx/source/sessionStoragePart', () => {
  let ssPart: SessionStoragePart;

  beforeEach(() => {
    const win = getWindow();

    // sessionStorage mock
    if (!win.sessionStorage) {
      let storage: Index = {};
      Object.defineProperty(
        win,
        'sessionStorage',
        {enumerable: true, configurable: true, writable: true},
      );

      win.sessionStorage = {
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

    ssPart = sessionStoragePart('key');
    ssPart.set('value');
  });

  it('Returns a value', () => {
    expect(ssPart.get()).toBe('value');
  });

  it('Sets a value', () => {
    ssPart.set('value2');
    expect(ssPart.get()).toBe('value2');
  });

  it('Removes a value', () => {
    ssPart.remove();
    expect(ssPart.get()).toBeUndefined();
  });

  it('Emits a value', done => {
    const result: (string | undefined)[] = [];
    const reference = ['value', 'value2'];
    ssPart.$.subscribe(v => {
      result.push(v);
      if (equals(result, reference)) {
        expect(result).toEqual(reference);
        done();
      }
    });
    ssPart.set('value2');
  });
});
