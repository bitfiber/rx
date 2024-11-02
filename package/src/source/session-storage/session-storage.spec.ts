import {equals, getWindow, Index} from '@bitfiber/utils';

import {SessionStorage, sessionStorage} from '../';

describe('@bitfiber/rx/source/sessionStorage', () => {
  let ss: SessionStorage;

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

    ss = sessionStorage();
    ss.set('key', 'value');
  });

  it('Returns a value', () => {
    expect(ss.get('key')).toBe('value');
  });

  it('Sets a value', () => {
    ss.set('key', 'value2');
    expect(ss.get('key')).toBe('value2');
  });

  it('Removes a value', () => {
    ss.remove('key');
    expect(ss.get('key')).toBeUndefined();
  });

  it('Emits a value', done => {
    const result: string[] = [];
    const reference = ['value', 'value2'];
    const ob$ = ss.observe('key');
    ob$.subscribe();
    ob$.subscribe(v => {
      result.push(v);
      if (equals(result, reference)) {
        expect(result).toEqual(reference);
        done();
      }
    });
    ss.set('key', 'value2');
  });
});
