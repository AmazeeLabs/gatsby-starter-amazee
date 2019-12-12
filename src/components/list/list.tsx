import * as React from 'react';
import { Link } from 'gatsby';

export interface ListItem {
  id: string,
  label: string
  path: string
}

export const List = ({items}: {items: ListItem[]}) => (
  items.length ? (
    <ul>
      {items.map(item => (
        <li key={item.id} className="border-solid border-gray-300 border-b-2 last:border-b-0">
          <Link className="block px-5 py-2 hover:bg-gray-100" to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  ) : null
);
