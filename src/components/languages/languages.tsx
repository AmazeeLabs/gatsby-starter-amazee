import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { defaultLanguage, languages } from '../../../languages';
import { useCurrentPath } from '../../hooks/current_path';
import { navigate } from 'gatsby';
import { ChangeEvent } from 'react';

const languageOptions: { [key: string]: string } = languages;

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

/**
 * Component allowing the user to switch the current site language.
 */
export const Languages: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentPath = useCurrentPath();
  const currentLanguage = i18n.language;

  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    console.log(
      localizePath(
        currentPath,
        evt.target.value,
        defaultLanguage,
        defaultLanguage
      )
    );
    navigate(
      localizePath(
        currentPath,
        evt.target.value,
        defaultLanguage,
        defaultLanguage
      )
    );
  };

  return (
    <div>
      <label htmlFor="language-switcher" className="sr-only">
        {t('Change language:')}
      </label>
      <select
        id="language-switcher"
        onChange={handleChange}
        value={currentLanguage}
        className="px-3 py-2 bg-amazee-gray appearance-none text-white"
      >
        {Object.keys(languages).map(lang => (
          <option key={lang} value={lang}>
            {languageOptions[lang]}
          </option>
        ))}
      </select>
    </div>
  );
};
