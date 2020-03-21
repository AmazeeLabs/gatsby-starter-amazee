import { delocalizePath, localizePath } from '../languages';

describe('localizePath', () => {
  it('does not add prefixes for the default language', () => {
    expect(localizePath('/', 'en')).toEqual('/');
    expect(localizePath('/a', 'en')).toEqual('/a');
  });

  it('returns the same path if target and current language are equal', () => {
    expect(localizePath('/', 'en')).toEqual('/');
    expect(localizePath('/a', 'en')).toEqual('/a');
    expect(localizePath('/de', 'de')).toEqual('/de');
    expect(localizePath('/de/a', 'de')).toEqual('/de/a');
  });

  it('adds the prefix if the target language is not the default language', () => {
    expect(localizePath('/', 'de')).toEqual('/de');
    expect(localizePath('/a', 'de')).toEqual('/de/a');
  });

  it('removes the prefix if the target language is the default language', () => {
    expect(localizePath('/de', 'en')).toEqual('/');
    expect(localizePath('/de/a', 'en')).toEqual('/a');
  });

  it('changes the prefix if the current and target languages are not the default language', () => {
    expect(localizePath('/de', 'fr')).toEqual('/fr');
    expect(localizePath('/de/a', 'fr')).toEqual('/fr/a');
  });
});

describe('delocalizePath', () => {
  it('does not change paths in the default language', () => {
    expect(delocalizePath('/')).toEqual('/');
    expect(delocalizePath('/a/b')).toEqual('/a/b');
  });

  it('removes the prefix if not in default language', () => {
    expect(delocalizePath('/de')).toEqual('/');
    expect(delocalizePath('/de/a/b')).toEqual('/a/b');
  });
});
