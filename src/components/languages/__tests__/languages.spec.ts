import { localizePath } from '../languages';

describe('localizePath', () => {

  it('does not add prefixes for the default language', () => {
    expect(localizePath('/', 'en', 'en', 'en')).toEqual('/');
    expect(localizePath('/a', 'en', 'en', 'en')).toEqual('/a');
  });

  it('returns the same path if target and current language are equal', () => {
    expect(localizePath('/', 'en', 'en', 'en')).toEqual('/');
    expect(localizePath('/a', 'en', 'en', 'en')).toEqual('/a');
    expect(localizePath('/de', 'de', 'de', 'en')).toEqual('/de');
    expect(localizePath('/de/a', 'de', 'de', 'en')).toEqual('/de/a');
  });

  it('adds the prefix if the target language is not the default language', () => {
    expect(localizePath('/', 'de', 'en', 'en')).toEqual('/de');
    expect(localizePath('/a', 'de', 'en', 'en')).toEqual('/de/a');
  });

  it('removes the prefix if the target language is the default language', () => {
    expect(localizePath('/de', 'en', 'de', 'en')).toEqual('/');
    expect(localizePath('/de/a', 'en', 'de', 'en')).toEqual('/a');
  });

  it('changes the prefix if the current and target languages are not the default language', () => {
    expect(localizePath('/de', 'fr', 'de', 'en')).toEqual('/fr');
    expect(localizePath('/de/a', 'fr', 'de', 'en')).toEqual('/fr/a');
  });
});
