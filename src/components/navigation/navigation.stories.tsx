import * as React from 'react';
import { Navigation } from './navigation';

export default {
  title: 'Navigation',
  component: Navigation,
};

export const Active = () => <Navigation items={[
  {label: 'Item A', path: '/a', description: 'Got to page A'},
  {label: 'Item B', path: '/b', description: 'Got to page B'},
  {label: 'Item C', path: '/c', description: 'Got to page C'},
]} currentPath={'/'} />;

export const Empty = () => <Navigation items={[]} currentPath={'/'} />;
