import * as React from 'react';
import { List } from './list';

export default {
  title: 'List'
};

export const Filled = () => <List items={[
  {label: 'Item A', path: '/a', id: 'a'},
  {label: 'Item B', path: '/b', id: 'b'},
  {label: 'Item C', path: '/c', id: 'c'},
]} />;

export const Empty = () => <List items={[
  {label: 'Item A', path: '/a', id: 'a'},
  {label: 'Item B', path: '/b', id: 'b'},
  {label: 'Item C', path: '/c', id: 'c'},
]} />;
