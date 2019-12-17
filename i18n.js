import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  de: {
    translation: {
      'Amazee Labs Gatsby Starter': 'Amazee Labs Gatsby Starter - German',
      'Movie listing': 'Filmliste',
      'Films with "{{name}}"': 'Filme mit "{{name}}"',
      'Characters in "{{title}}"': 'Charaktere in "{{title}}"',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
