import { TranslationData } from './index';

const en: TranslationData = {
  //
  // Keys that are used in multiple places in src/components.
  //
  global: {
    // @TODO Update the site name.
    siteName: 'Star Wars Database',
    metadata: {
      description: 'This is the default page description.',
    },
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
  pages: {
    404: {
      error: '404: Not Found',
      title: 'Page not found',
      text: 'This page cannot be found.',
    },
  },

  //
  // These swapi translations are only for the demo content and should be
  // deleted.
  //
  swapi: {
    pages: {
      home: {
        description: 'The homepage of the SWAPI example site',
        title: 'Welcome',
        text: 'This is a Gatsby example project.',
      },
      characters: {
        description: 'Characters in the Star Wars universe',
        title: 'Characters',
      },
      'characters-character': {
        description: 'The Star Wars character, {{ name }}',
        title: 'Films with "{{name}}"',
      },
      films: {
        description: 'Films in the Star Wars universe',
        title: 'Films',
      },
      'films-film': {
        description: 'The Star Wars film, {{ title }}',
        episode: 'Episode {{episodeId}}',
        characters: 'Characters',
      },
    },
  },
};

export default en;
