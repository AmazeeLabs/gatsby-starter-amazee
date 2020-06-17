import React from 'react';
import OneColumn from 'components/layouts/OneColumn';
import { CurrentPathProvider } from 'hooks/current_path';
import { withCurrentPathProvider } from 'utils/decorators';
import Navigation from './index';

export default {
  title: 'Unused Components/Global/Navigation',
  component: Navigation,
};

export const Default = () => <Navigation />;
Default.story = {
  decorators: [withCurrentPathProvider({ path: '/', withSelector: true })],
};

export const NoActiveItem = () => (
  <CurrentPathProvider path="/non-matching-path">
    <Navigation />
  </CurrentPathProvider>
);

export const PartialPathMatch = () => (
  <CurrentPathProvider path="/films/some-sub-page">
    <Navigation />{' '}
    <OneColumn>
      <p>
        The current path of this page is: <code>/films/some-sub-page</code>
      </p>
    </OneColumn>
  </CurrentPathProvider>
);
