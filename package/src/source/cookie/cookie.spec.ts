import {equals, getDocument} from '@bitfiber/utils';

import {Cookie, cookie} from '../';

describe('@bitfiber/rx/source/cookie', () => {
  let cookieSource: Cookie;

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

    cookieSource = cookie();
    cookieSource.set('key', {value: 'value'});
  });

  it('Returns a value', () => {
    expect(cookieSource.get('key').value).toBe('value');
  });

  it('Sets a value', () => {
    cookieSource.set('key', {value: 'value2'});
    expect(cookieSource.get('key').value).toBe('value2');
  });

  it('Removes a value', () => {
    cookieSource.remove('key');
    expect(cookieSource.get('key').value).toBe('');
  });

  it('Emits a value', done => {
    const result: string[] = [];
    const reference = ['value', 'value2'];
    const ob$ = cookieSource.observe('key');
    ob$.subscribe();
    ob$.subscribe(data => {
      result.push(data.value as string);
      if (equals(result, reference)) {
        expect(result).toEqual(reference);
        done();
      }
    });
    cookieSource.set('key', {value: 'value2'});
  });
});
