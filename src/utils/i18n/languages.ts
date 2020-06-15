// When i18next is using the "cimode" language, t() will return the
// translation key. @see https://www.i18next.com/overview/api#changelanguage
const devLangaugeCode = 'cimode';

// TODO: Define the list of languages for this project.
export const languageNames: { [key: string]: string } = {
  en: 'English',
  de: 'Deutsch',
  [devLangaugeCode]: 'Developer',
};

// TODO: Decide which build environments can see the fake "cimode" language.
const displayDeveloperLanguage = true;
export const languageCodes = Object.keys(languageNames).filter(
  (language) => language !== devLangaugeCode || displayDeveloperLanguage,
);

// TODO: Define the default language.
export const defaultLanguage = 'en';

// This is the default i18next namespace. https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
export const defaultNS = 'translation';

// Helper function used by localizePath and delocalizePath.
const getPathSegments = (path: string) => {
  const segments = path.split('/').slice(1);

  // Strip the current language from the URL.
  if (languageCodes.includes(segments[0])) {
    segments.splice(0, 1);
  }

  // Remove any empty segments.
  return segments.filter((s) => s.length);
};

/**
 * Handle language prefixes on paths.
 *
 * Adds, removes or replaces the prefix on a given path, based on the current,
 * target and default language.
 *
 * @param path
 *   The path to process.
 * @param targetLanguage
 *   The target language.
 */
export const localizePath = (path: string, targetLanguage: string) => {
  const segments = getPathSegments(path);

  // Add the target language to the URL.
  if (targetLanguage !== defaultLanguage) {
    segments.unshift(targetLanguage);
  }

  return `/${segments.join('/')}`;
};

/**
 * Remove a language prefix from the current path if present.
 *
 * @param path
 *   The path to process.
 */
export const delocalizePath = (path: string) => {
  return `/${getPathSegments(path).join('/')}`;
};
