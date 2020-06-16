import React from 'react';
import { DecoratorFn } from '@storybook/react';
// eslint-disable-next-line deprecate/import
import PageWrapper from 'components/layouts/PageWrapper';

export const withPageWrapper: DecoratorFn = (storyFn) => (
  <PageWrapper>{storyFn()}</PageWrapper>
);
