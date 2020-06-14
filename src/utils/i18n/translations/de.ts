import { TranslationResource } from './index';

const de: TranslationResource = {
  de: {
    translation: {
      'global.siteName': 'Star Wars Datenbank',

      // Keys defined in gatsby-config.ts; see that file for more info.
      'navigation.home.title': 'Startseite',
      'navigation.films.title': 'Filme',
      'navigation.characters.title': 'Charaktere',

      // Keys defined in src/components.
      'languageSwitcher.select.label': 'Sprache ändern:',
      'navigation.main.heading': 'Hauptnavigation',

      // Keys defined in src/pages and src/templates. For an actual website,
      // remove the "swapi-" prefix used for the SWAPI demo content.
      'swapi-pages.home.title': 'Willkommen',
      'swapi-pages.home.text': 'Das ist ein beispielhaftes Gatsby Projekt.',
      'swapi-pages.characters.title': 'Charaktere',
      'swapi-pages.characters-character.title': 'Filme mit "{{name}}"',
      'swapi-pages.films.title': 'Filme',
      'swapi-pages.films-film.episode': 'Zeichen {{episodeId}}',
      'swapi-pages.films-film.characters': 'Charaktere',
    },
  },
};

export default de;
