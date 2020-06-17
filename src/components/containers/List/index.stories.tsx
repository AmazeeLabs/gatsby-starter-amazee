import React from 'react';
import { withOneColumn } from 'utils/decorators';
import List from './index';

export default {
  title: 'Components/List',
  component: List,
  decorators: [withOneColumn],
};

export const Filled = () => (
  <List
    items={[
      { label: 'Item A', path: '/a', id: 'a' },
      { label: 'Item B', path: '/b', id: 'b' },
      { label: 'Item C', path: '/c', id: 'c' },
    ]}
  />
);

export const Empty = () => <List items={[]} />;
