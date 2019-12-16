import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {defaultLanguage, languages} from '../../../languages';
import { useCurrentPath } from '../../hooks/current_path';
import { navigate } from 'gatsby';

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
export const localizePath = (path: string, targetLanguage: string, currentLanguage: string, defaultLanguage: string) => {
  if (currentLanguage === targetLanguage) {
    return path;
  }

  const segments = path.split('/').slice(1);

  if (currentLanguage === defaultLanguage) {
    segments.splice(0, 0, targetLanguage);
  }
  else if (targetLanguage === defaultLanguage) {
    segments.splice(0, 1);
  }
  else {
    segments.splice(0, 1, targetLanguage);
  }

  return `/${segments.filter(s => s.length).join('/')}`;
};

export const Languages = () => {
  const {t, i18n} = useTranslation();
  const currentPath = useCurrentPath();
  const currentLanguage = i18n.language;

  return (
    <div>
      <label htmlFor="language-switcher" className="sr-only">{t('Change language:')}</label>
      <select id="language-switcher" onChange={evt => navigate(evt.target.value)} value={currentPath} className="px-3 py-2 bg-amazee-gray appearance-none text-white">
        {Object.keys(languages).map(lang => (
          <option key={lang} value={localizePath(currentPath, lang, currentLanguage, defaultLanguage)}>
            {languages[lang]}
          </option>
        ))}
      </select>
    </div>
  );
};
