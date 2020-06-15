import { TranslationData } from './index';

const de: TranslationData = {
  global: {
    siteName: 'Star Wars Datenbank',
    metadata: {
      description: 'Dies ist die Standardseitenbeschreibung.',
    },
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
        description: 'Die Homepage der SWAPI-Beispielseite',
        title: 'Willkommen',
        text: 'Das ist ein beispielhaftes Gatsby Projekt.',
      },
      characters: {
        description: 'Charaktere im Star Wars-Universum',
        title: 'Charaktere',
      },
      'characters-character': {
        description: 'Der Star Wars-Charakter, {{ name }}',
        title: 'Filme mit "{{ name }}"',
      },
      films: {
        description: 'Filme im Star Wars-Universum',
        title: 'Filme',
      },
      'films-film': {
        description: 'Der Star Wars-Film, {{ title }}',
        episode: 'Zeichen {{ episodeId }}',
        characters: 'Charaktere',
      },
    },
  },
};

export default de;
