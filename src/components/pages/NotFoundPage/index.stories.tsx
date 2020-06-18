import React from 'react';
import { withPageWrapper } from 'utils/decorators';
import NotFound from './index';

export default {
  title: 'Pages/404 Not Found page',
  component: NotFound,
  decorators: [withPageWrapper],
};

export const Default = () => <NotFound />;
