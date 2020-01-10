import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translatable strings for this project.
// TODO: Move them into separate files or use other i18next backend plugins.
// https://www.i18next.com/how-to/add-or-load-translations
const resources = {
  de: {
    translation: {
      'Star Wars Database': 'Star Wars Datenbank',
      'Films': 'Filme',
      'Films with "{{name}}"': 'Filme mit "{{name}}"',
      'Characters in "{{title}}"': 'Charaktere in "{{title}}"',
      'Welcome': 'Willkommen',
      'This is a Gatsby example project.':
        'Das ist ein beispielhaftes Gatsby Projekt.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
