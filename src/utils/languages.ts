// TODO: Define the list of languages for this project.
export const languages = {
  en: 'English',
  de: 'Deutsch',
};

// TODO: Define the default language.
export const defaultLanguage = 'en';

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
 * @param currentLanguage
 *   The current language.
 * @param defaultLanguage
 *   The default language.
 */
export const localizePath = (
  path: string,
  targetLanguage: string,
  currentLanguage: string,
  defaultLanguage: string
) => {
  if (currentLanguage === targetLanguage) {
    return path;
  }

  const segments = path.split('/').slice(1);

  if (currentLanguage === defaultLanguage) {
    segments.splice(0, 0, targetLanguage);
  } else if (targetLanguage === defaultLanguage) {
    segments.splice(0, 1);
  } else {
    segments.splice(0, 1, targetLanguage);
  }

  return `/${segments.filter(s => s.length).join('/')}`;
};

/**
 * Remove a language prefix from the current path if present.
 */
export const delocalizePath = (
  path: string,
  currentLanguage: string,
  defaultLanguage: string
) => {
  if (currentLanguage === defaultLanguage) {
    return path;
  }
  const segments = path.split('/');
  segments.splice(1, 1);
  return `/${segments.filter(s => s.length).join('/')}`;
};
