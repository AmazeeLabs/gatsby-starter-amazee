import React from 'react';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useCurrentPath } from 'hooks/current_path';
import { languageCodes, languageNames, navigate } from 'utils/i18n';

/**
 * Component that allows the user to switch the site's language.
 */
const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentPath = useCurrentPath();
  const currentLanguage = i18n.language;

  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) =>
    navigate(currentPath, {}, evt.target.value);

  return (
    <div>
      <label htmlFor="language-switcher" className="sr-only">
        {t('languageSwitcher.select.label')}
      </label>
      <select
        id="language-switcher"
        onChange={handleChange}
        value={currentLanguage}
        className="px-3 py-2 bg-amazee-gray appearance-none text-white"
      >
        {languageCodes.map((langCode) => (
          <option
            key={langCode}
            value={langCode}
            lang={langCode}
            className="text-black"
          >
            {languageNames[langCode]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
