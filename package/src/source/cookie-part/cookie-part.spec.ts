import {equals, getDocument} from '@bitfiber/utils';

import {cookiePart, CookiePart} from '../';

describe('@bitfiber/rx/source/cookiePart', () => {
  let part: CookiePart;

  beforeEach(() => {
    const doc = getDocument();
    let cookies = '';

    // Cookie mock
    Object.defineProperty(doc, 'cookie', {
      enumerable: true,
      configurable: true,
      get() {
        return cookies;
      },
      set(fullCookie) {
        cookies = fullCookie;
      },
    });

    part = cookiePart('key');
    part.set({value: 'value'});
  });

  it('Returns a value', () => {
    expect(part.get().value).toBe('value');
  });

  it('Sets a value', () => {
    part.set({value: 'value2'});
    expect(part.get().value).toBe('value2');
  });

  it('Removes a value', () => {
    part.remove();
    expect(part.get().value).toBe('');
  });

  it('Emits a value', done => {
    const result: (string | undefined)[] = [];
    const reference = ['value', 'value2'];
    part.$.subscribe(data => {
      result.push(data.value);
      if (equals(result, reference)) {
        expect(result).toEqual(reference);
        done();
      }
    });
    part.set({value: 'value2'});
  });
});
