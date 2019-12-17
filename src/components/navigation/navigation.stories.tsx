import * as React from 'react';
import { Navigation } from './navigation';
import { withKnobs, text, number } from '@storybook/addon-knobs';

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
  Array.from(Array(number('Items', 3, {
    range: true,
    min: 0,
    max: 10
  })).keys()).map(v => v + 1).map((v) => ({
    label: text('Label', `Item ${String.fromCharCode(64 + v)}`,  `Item ${v}`),
    path: text('Path', `/${String.fromCharCode(64 + v).toLowerCase()}`, `Item ${v}`),
    description: text('Description', `Got to page ${String.fromCharCode(64 + v)}`, `Item ${v}`)
  }))
} currentPath={text('Active Path', '/a')} />;
