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
 */
export const localizePath = (
  path: string,
  targetLanguage: string,
  currentLanguage: string
) => {
  if (currentLanguage === targetLanguage) {
    return path;
  }

  const segments = path.split('/').slice(1);

  // Strip the current language from the URL.
  if (currentLanguage !== defaultLanguage) {
    segments.splice(0, 1);
  }

  // Add the target language to the URL.
  if (targetLanguage !== defaultLanguage) {
    segments.unshift(targetLanguage);
  }

  // Remove any empty segments and then merge into a URL.
  return `/${segments.filter(s => s.length).join('/')}`;
};

/**
 * Remove a language prefix from the current path if present.
 *
 * @param path
 *   The path to process.
 * @param currentLanguage
 *   The current language.
 */
export const delocalizePath = (path: string, currentLanguage: string) => {
  if (currentLanguage === defaultLanguage) {
    return path;
  }
  const segments = path.split('/');
  segments.splice(1, 1);
  return `/${segments.filter(s => s.length).join('/')}`;
};
