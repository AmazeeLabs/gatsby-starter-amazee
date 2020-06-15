import { TranslationData } from './index';

const de: TranslationData = {
  global: {
    siteName: 'Star Wars Datenbank',
  },

  navigation: {
    main: {
      heading: 'Hauptnavigation',
      home: 'Startseite',
      films: 'Filme',
      characters: 'Charaktere',
    },
  },

  languageSwitcher: {
    select: {
      label: 'Sprache ändern:',
    },
  },

  pages: {},

  swapi: {
    pages: {
      home: {
        title: 'Willkommen',
        text: 'Das ist ein beispielhaftes Gatsby Projekt.',
      },
      characters: {
        title: 'Charaktere',
      },
      'characters-character': {
        title: 'Filme mit "{{ name }}"',
      },
      films: {
        title: 'Filme',
      },
      'films-film': {
        episode: 'Zeichen {{ episodeId }}',
        characters: 'Charaktere',
      },
    },
  },
};

export default de;
