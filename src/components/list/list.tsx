import * as React from 'react';
import { Link } from '../../utils/localized-link';

export interface ListProps {
  /**
   * List item definitions, containing a unique id, a label and a path.
   */
  items: {
    id: string,
    label: string
    path: string
  }[]
}

/**
 * A simple list of links.
 */
export const List = ({items}: ListProps) => (
  items.length ? (
    <ul>
      {items.map(item => (
        <li key={item.id} className="border-solid border-gray-300 border-b-2 last:border-b-0">
          <Link className="block px-5 py-2 hover:bg-gray-100" to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  ) : <p className="text-center italic">No results found.</p>
);
