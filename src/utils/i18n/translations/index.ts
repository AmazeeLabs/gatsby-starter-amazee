import { defaultNS } from '../languages';
import de from './de';
import en from './en';

export type TranslationData = {
  [key: string]: string | TranslationData;
};
type TranslationResource = {
  [languageCode: string]: {
    [defaultNS]: TranslationData;
  };
};

// TODO: Optionally, use a i18next backend plugins so the translated strings are
//   not stored in these files.
//   https://www.i18next.com/how-to/add-or-load-translations

// Translated strings for this project.
const translations: TranslationResource = {
  en: {
    [defaultNS]: en,
  },
  de: {
    [defaultNS]: de,
  },
};

export default translations;
