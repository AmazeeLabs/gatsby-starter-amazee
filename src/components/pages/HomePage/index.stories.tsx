import React from 'react';
import { withPageWrapper } from 'utils/decorators';
import HomePage from './index';

export default {
  title: 'Pages/Home page',
  component: HomePage,
  decorators: [withPageWrapper],
};

export const Default = () => <HomePage />;
