import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { LocalizedLink, localizedNavigate } from '../../utils/localized-link';
import classnames from 'classnames';
import { useCurrentPath } from '../../hooks/current_path';

/**
 * Helper method to determine if a path is a sub-path of another one.
 */
export const isSubPathOf = (subPath: string, path: string) => {
  return ((a: string[], b: string[]) =>
    a.map((v, i) => b[i] === v).reduce((p, c) => p && c))(
    subPath.split('/').slice(0, path.split('/').length),
    path.split('/')
  );
};

/**
 * The navigation UI element.
 *
 * Accepts a list of navigation items and the current path as arguments.
 */
export const Navigation: React.FC<{
  /**
   * The list of navigation items.
   */
  items: {
    /**
     * The navigation item label.
     */
    label: string;
    /**
     * The path to navigate to.
     */
    path: string;
    /**
     * A brief description of the target page. Displayed on hover.
     */
    description: string;
  }[];

  /**
   * The current page path.
   */
  currentPath: string;
}> = ({ items, currentPath }) => {
  const { t } = useTranslation();

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
        onChange={event => localizedNavigate(event.target.value)}
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
            <LocalizedLink
              to={item.path}
              title={item.description}
              className={`block mx-5 first:ml-0 py-2 hover:text-amazee-yellow border-solid border-b-4 ${classnames(
                {
                  'border-amazee-dark': !isSubPathOf(currentPath, item.path),
                  'border-amazee-yellow': isSubPathOf(currentPath, item.path),
                }
              )}`}
            >
              {t(item.label)}
            </LocalizedLink>
          </li>
        ))}
      </ul>
    </nav>
  ) : null;
};

export const StaticNavigation: React.FC = () => {
  const currentPath = useCurrentPath();

  // Use static query allows to execute a query at build time from any
  // component. But without arguments.
  // TODO: Learn about static queries.
  // https://www.gatsbyjs.org/docs/static-query/#usestaticquery
  const data = useStaticQuery<{
    site: {
      siteMetadata: {
        navigation: {
          path: string;
          description: string;
          label: string;
        }[];
      };
    };
  }>(graphql`
    query StaticNavigationQuery {
      site {
        siteMetadata {
          navigation {
            description
            label
            path
          }
        }
      }
    }
  `);

  return (
    <Navigation
      items={data.site.siteMetadata.navigation}
      currentPath={currentPath}
    />
  );
};
