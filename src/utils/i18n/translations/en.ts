import { TranslationData } from './index';

const en: TranslationData = {
  //
  // Keys that are used in multiple places in src/components.
  //
  global: {
    // @TODO Update the site name.
    siteName: 'Star Wars Database',
  },

  //
  // Keys defined in src/components.
  //
  navigation: {
    main: {
      heading: 'Main navigation',
      home: 'Home',
      films: 'Films',
      characters: 'Characters',
    },
  },

  languageSwitcher: {
    select: {
      label: 'Change language:',
    },
  },

  //
  // Keys defined in src/components/pages. Note that NO translations should
  // be found in src/pages and src/templates.
  //
  pages: {},

  //
  // These swapi translations are only for the demo content and should be
  // deleted.
  //
  swapi: {
    pages: {
      home: {
        title: 'Welcome',
        text: 'This is a Gatsby example project.',
      },
      characters: {
        title: 'Characters',
      },
      'characters-character': {
        title: 'Films with "{{name}}"',
      },
      films: {
        title: 'Films',
      },
      'films-film': {
        episode: 'Episode {{episodeId}}',
        characters: 'Characters',
      },
    },
  },
};

export default en;
