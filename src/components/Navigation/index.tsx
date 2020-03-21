import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import Link from '../Link';
import navigate from '../../utils/navigate';
import { isSubPath } from '../../utils/paths';
import { useCurrentPath } from '../../hooks/current_path';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const currentPath = useCurrentPath();

  // useStaticQuery allows to execute a query at build time from any component,
  // but without arguments.
  // https://www.gatsbyjs.org/docs/static-query/#usestaticquery
  const data = useStaticQuery<{
    site: {
      siteMetadata: {
        navigation: {
          path: string;
          label: string;
        }[];
      };
    };
  }>(graphql`
    query StaticNavigationQuery {
      site {
        siteMetadata {
          navigation {
            label
            path
          }
        }
      }
    }
  `);
  const items = data.site.siteMetadata.navigation;

  return items.length ? (
    <nav
      role="navigation"
      aria-labelledby="navigation"
      className="page-centered bg-amazee-dark text-white py-2 sm:py-0"
    >
      <h2 id="navigation" className="sr-only">
        Main navigation
      </h2>
      <select
        className="sm:hidden block appearance-none w-full bg-amazee-dark border-2 border-amazee-yellow px-3 py-2"
        onChange={event => navigate(event.target.value)}
      >
        {items.map(item => (
          <option key={item.path} value={item.path}>
            {t(item.label)}
          </option>
        ))}
      </select>
      <ul className="hidden sm:flex">
        {items.map(item => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block mx-5 first:ml-0 py-2 hover:text-amazee-yellow border-solid border-b-4 ${classnames(
                {
                  'border-amazee-dark': !isSubPath(currentPath, item.path),
                  'border-amazee-yellow': isSubPath(currentPath, item.path),
                }
              )}`}
            >
              {t(item.label)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  ) : null;
};

export default Navigation;
