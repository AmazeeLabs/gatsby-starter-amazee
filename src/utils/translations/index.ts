import de from './de';

export type TranslationResource = {
  [languageCode: string]: {
    translation: {
      [key: string]: string;
    };
  };
};

// TODO: Optionally, use a i18next backend plugins so the translated srings are
//   not stored in these files.
//   https://www.i18next.com/how-to/add-or-load-translations

// Translated strings for this project.
const translations: TranslationResource = {
  ...de,
};

export default translations;
