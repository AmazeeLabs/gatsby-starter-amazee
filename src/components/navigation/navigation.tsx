import * as React from 'react';

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
    <ul>
      {items.map(item => <li key={item.path}>{item.label}</li>)}
    </ul>
  ) : null
);
