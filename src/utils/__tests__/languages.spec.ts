import { delocalizePath, localizePath } from '../languages';

describe('localizePath', () => {
  it('does not add prefixes for the default language', () => {
    expect(localizePath('/', 'en', 'en')).toEqual('/');
    expect(localizePath('/a', 'en', 'en')).toEqual('/a');
  });

  it('returns the same path if target and current language are equal', () => {
    expect(localizePath('/', 'en', 'en')).toEqual('/');
    expect(localizePath('/a', 'en', 'en')).toEqual('/a');
    expect(localizePath('/de', 'de', 'de')).toEqual('/de');
    expect(localizePath('/de/a', 'de', 'de')).toEqual('/de/a');
  });

  it('adds the prefix if the target language is not the default language', () => {
    expect(localizePath('/', 'de', 'en')).toEqual('/de');
    expect(localizePath('/a', 'de', 'en')).toEqual('/de/a');
  });

  it('removes the prefix if the target language is the default language', () => {
    expect(localizePath('/de', 'en', 'de')).toEqual('/');
    expect(localizePath('/de/a', 'en', 'de')).toEqual('/a');
  });

  it('changes the prefix if the current and target languages are not the default language', () => {
    expect(localizePath('/de', 'fr', 'de')).toEqual('/fr');
    expect(localizePath('/de/a', 'fr', 'de')).toEqual('/fr/a');
  });
});

describe('delocalizePath', () => {
  it('does not change paths in the default language', () => {
    expect(delocalizePath('/', 'en')).toEqual('/');
    expect(delocalizePath('/a', 'en')).toEqual('/a');
  });

  it('removes the prefix if not in default language', () => {
    expect(delocalizePath('/de', 'de')).toEqual('/');
    expect(delocalizePath('/de/a', 'de')).toEqual('/a');
  });
});
