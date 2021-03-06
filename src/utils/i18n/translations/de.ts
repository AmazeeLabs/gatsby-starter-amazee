import { TranslationData } from './index';

const de: TranslationData = {
  global: {
    siteName: 'Star Wars Datenbank',
    metadata: {
      description: 'Dies ist die Standardseitenbeschreibung.',
    },
  },

  footer: {
    legal: {
      copyright: 'Alle Rechte vorbehalten.',
    },
  },

  languageSwitcher: {
    select: {
      label: 'Sprache ändern:',
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

  pages: {
    404: {
      error: '404: Nicht Gefunden',
      title: 'Seite nicht gefunden',
      text: 'Diese Seite kann nicht gefunden werden.',
    },
  },

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
