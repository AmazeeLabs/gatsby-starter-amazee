import * as React from 'react';
import { graphql, Link, navigate, useStaticQuery } from 'gatsby';
import classnames from 'classnames';

export interface NavigationItem {
  label: string
  path: string
  description: string
}

export interface NavigationProps {
  items: NavigationItem[]
  currentPath: string
}

export const isSubPathOf = (subPath: string, path: string) => {
  return ((a: string[], b: string[]) =>
    a.map((v, i) => b[i] === v).reduce((p, c) => p && c)
  )(
    subPath.split('/').slice(0, path.split('/').length),
    path.split('/')
  ) ;
};

/**
 * The navigation element.
 *
 * @param items
 * @param currentPath
 * @constructor
 */
export const Navigation = ({items, currentPath}: NavigationProps) => (
  items.length ? (
    <div className="page-centered bg-amazee-dark text-white py-2 sm:py-0">
      <select
        className=" sm:hidden block appearance-none w-full bg-amazee-dark border-2 border-amazee-yellow px-3 py-2"
        onChange={(event) => navigate(event.target.value)}
      >
        {items.map(item => (
          <option key={item.path} value={item.path}>{item.label}</option>
        ))}
      </select>
      <ul className="hidden sm:flex">
        {items.map(item => (
          <li key={item.path}>
            <Link to={item.path} title={item.description} className={
              `block mx-5 first:ml-0 py-2 hover:text-amazee-yellow border-solid border-b-4 ${classnames({
                'border-amazee-dark': !isSubPathOf(currentPath, item.path),
                'border-amazee-yellow': isSubPathOf(currentPath, item.path),
              })}`
            }>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null
);

export const StaticNavigation = ({currentPath}: {currentPath: string}) => {

  const data : {
    site: {
      siteMetadata: {
        navigation: NavigationItem[]
      }
    }
  } = useStaticQuery(graphql`
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

  return <Navigation items={data.site.siteMetadata.navigation} currentPath={currentPath}/>;
};
