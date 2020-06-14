import { delocalizePath, localizePath } from '../languages';
import { expect } from 'chai';

describe('localizePath', function () {
  it('does not add prefixes for the default language', function () {
    expect(localizePath('/', 'en')).to.equal('/');
    expect(localizePath('/a', 'en')).to.equal('/a');
  });

  it('returns the same path if target and current language are equal', function () {
    expect(localizePath('/', 'en')).to.equal('/');
    expect(localizePath('/a', 'en')).to.equal('/a');
    expect(localizePath('/de', 'de')).to.equal('/de');
    expect(localizePath('/de/a', 'de')).to.equal('/de/a');
  });

  it('adds the prefix if the target language is not the default language', function () {
    expect(localizePath('/', 'de')).to.equal('/de');
    expect(localizePath('/a', 'de')).to.equal('/de/a');
  });

  it('removes the prefix if the target language is the default language', function () {
    expect(localizePath('/de', 'en')).to.equal('/');
    expect(localizePath('/de/a', 'en')).to.equal('/a');
  });

  it('changes the prefix if the current and target languages are not the default language', function () {
    expect(localizePath('/de', 'fr')).to.equal('/fr');
    expect(localizePath('/de/a', 'fr')).to.equal('/fr/a');
  });
});

describe('delocalizePath', function () {
  it('does not change paths in the default language', function () {
    expect(delocalizePath('/')).to.equal('/');
    expect(delocalizePath('/a/b')).to.equal('/a/b');
  });

  it('removes the prefix if not in default language', function () {
    expect(delocalizePath('/de')).to.equal('/');
    expect(delocalizePath('/de/a/b')).to.equal('/a/b');
  });
});
