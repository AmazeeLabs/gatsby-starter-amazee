import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultLanguage, languageCodes } from './languages';
import translations from './translations';

i18n.use(initReactI18next).init({
  resources: translations,
  // Override language detection and use this language by default.
  lng: defaultLanguage,
  whitelist: languageCodes,

  debug: false,
  keySeparator: false,

  interpolation: {
    escapeValue: false, // Not needed for React since it escapes by default.
  },
});

export default i18n;
