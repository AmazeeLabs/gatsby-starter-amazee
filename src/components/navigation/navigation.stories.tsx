import * as React from 'react';
import { Navigation } from './navigation';
import { withKnobs, array, text} from '@storybook/addon-knobs';

export default {
  title: 'Navigation',
  component: Navigation,
  decorators: [withKnobs],
};

export const Active = () => <Navigation items={[
  {label: 'Item A', path: '/a', description: 'Got to page A'},
  {label: 'Item B', path: '/b', description: 'Got to page B'},
  {label: 'Item C', path: '/c', description: 'Got to page C'},
]} currentPath={'/a'} />;

export const Inactive = () => <Navigation items={[
  {label: 'Item A', path: '/a', description: 'Got to page A'},
  {label: 'Item B', path: '/b', description: 'Got to page B'},
  {label: 'Item C', path: '/c', description: 'Got to page C'},
]} currentPath={'/d'} />;

export const Empty = () => <Navigation items={[]} currentPath={'/'} />;

export const Playground = () => <Navigation items={
  array('Items', ['a', 'b', 'c']).map((v, i) => ({
    label: text('Label', `Item ${v.toUpperCase()}`,  `Item ${i + 1}`),
    path: text('Path', `/${v}`, `Item ${i + 1}`),
    description: text('Description', `Got to page ${v}`, `Item ${i + 1}`)
  }))
} currentPath={text('Active Path', '/a')} />;
