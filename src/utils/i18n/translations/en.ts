import { TranslationData } from './index';

// This file can be split into multiple files quite easily. For example, one
// strategy is to include translation files with each component, which makes it
// easy for developers, but can be challenging if translators need to edit
// files.
//
// A strategy that is easier when translators need to edit files is to keep all
// language files next to each other and add directories for each language in
// this directory. For example, create multiple files in
// src/utils/i18n/translations/en and merge them together using the same
// method as above.
//
// To merge multiple translation files into this file, follow this pattern:
//
//   import enGlobal from 'utils/i18n/translations/en/global';
//   import enComponents from 'utils/i18n/translations/en/components';
//   import enPages from 'utils/i18n/translations/en/pages';
//
//   const en: TranslationData = {
//     ...enGlobal,
//     ...enComponents,
//     ...enPages,
//   };
//
//   export default en;

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
  footer: {
    legal: {
      copyright: 'All Rights Reserved.',
    },
  },

  languageSwitcher: {
    select: {
      label: 'Change language:',
    },
  },

  navigation: {
    main: {
      heading: 'Main navigation',
      home: 'Home',
      films: 'Films',
      characters: 'Characters',
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
