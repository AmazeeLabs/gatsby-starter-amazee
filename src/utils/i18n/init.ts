import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultLanguage, defaultNS, languageCodes } from './languages';
import translations from './translations';

i18next
  .use(initReactI18next)
  // https://www.i18next.com/overview/configuration-options
  .init({
    resources: translations,
    // Override language detection and use this language by default.
    lng: defaultLanguage,
    // Each language can have its own list of languages to fallback to if a
    // given translation key isn't available for that language.
    // https://www.i18next.com/principles/fallback#fallback-language
    fallbackLng: {
      de: ['en'],
      default: ['en'],
    },
    whitelist: languageCodes,
    defaultNS,

    interpolation: {
      escapeValue: false, // Not needed for React since it escapes by default.
    },

    debug: false, // Logs i18n info to the console.
    // keySeparator: false, // Removes the ability to nest keys in translation files.
    saveMissing: false,
  });

export default i18next;
