import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { languages, localizePath } from '../../utils/languages';
import { useCurrentPath } from '../../hooks/current_path';
import { navigate } from 'gatsby';
import { ChangeEvent } from 'react';

const languageOptions: { [key: string]: string } = languages;

/**
 * Component that allows the user to switch the site's language.
 */
const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentPath = useCurrentPath();
  const currentLanguage = i18n.language;

  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    navigate(localizePath(currentPath, evt.target.value));
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

export default LanguageSwitcher;
