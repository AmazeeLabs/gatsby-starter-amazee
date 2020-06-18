import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Link from 'components/common/Link';
import { useCurrentPath } from 'hooks/current_path';
import { navigate } from 'utils/i18n';
import { isSubPath } from 'utils/paths';

// TODO: Adjust the static site navigation. Or replace this with CMS API calls.
//   The text for these links are found by their key in the translation files.
export const navLinks = [
  { key: 'navigation.main.home', path: '/' },
  { key: 'navigation.main.films', path: '/films' },
  { key: 'navigation.main.characters', path: '/characters' },
];

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const currentPath = useCurrentPath();

  return (
    <nav
      role="navigation"
      aria-labelledby="navigation"
      className="page-centered bg-amazee-dark text-white py-2 sm:py-0"
    >
      <h2 id="navigation" className="sr-only">
        {t('navigation.main.heading')}
      </h2>

      {navLinks.length && (
        <select
          className="sm:hidden block appearance-none w-full bg-amazee-dark border-2 border-amazee-yellow px-3 py-2"
          onChange={(event) => navigate(event.target.value)}
        >
          {navLinks.map((item) => (
            <option key={item.path} value={item.path}>
              {t(item.key)}
            </option>
          ))}
        </select>
      )}

      {navLinks.length && (
        <ul className="hidden sm:flex">
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block mx-5 first:ml-0 py-2 hover:text-amazee-yellow border-solid border-b-4 ${classNames(
                  {
                    'border-amazee-dark': !isSubPath(currentPath, item.path),
                    'border-amazee-yellow': isSubPath(currentPath, item.path),
                  },
                )}`}
                noLinkStyles
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
