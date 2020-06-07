import * as React from 'react';
import { DecoratorFn } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { CurrentPathProvider } from 'hooks/current_path';
import Navigation from './index';

export default {
  title: 'Components/Navigation',
  component: Navigation,
};

const pathDecorator: DecoratorFn = (storyFn) => (
  <CurrentPathProvider
    path={select<string>(
      'Current path',
      {
        Home: '/',
        Films: '/films',
        Characters: '/characters',
        Other: '/non-matching-path',
      },
      '/',
    )}
  >
    {storyFn()}
  </CurrentPathProvider>
);

export const Default = () => <Navigation />;
Default.story = {
  decorators: [pathDecorator],
};

export const NoActiveItem = () => (
  <CurrentPathProvider path="/non-matching-path">
    <Navigation />
  </CurrentPathProvider>
);
