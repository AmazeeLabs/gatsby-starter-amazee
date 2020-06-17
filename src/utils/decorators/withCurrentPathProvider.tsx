import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { CurrentPathProvider } from 'hooks/current_path';
import { navLinks } from 'components/global/Navigation';
import { useTranslation } from 'react-i18next';

const Provider: React.FC<{ path?: string; withSelector?: boolean }> = ({
  path = '/',
  withSelector,
  children,
}) => {
  const { t } = useTranslation();
  const selectOptions: { [key: string]: string } = {};

  navLinks.forEach((item) => {
    selectOptions[t(item.key)] = item.path;
  });
  selectOptions.Other = '/non-matching-path';

  return (
    <CurrentPathProvider
      path={
        withSelector
          ? select<string>('Current path', selectOptions, path)
          : path
      }
    >
      {children}
    </CurrentPathProvider>
  );
};

// Provider with no selector.
export const withCurrentPathProviderFallback: DecoratorFn = (storyFn) => (
  <Provider>{storyFn()}</Provider>
);

// Provider with a path selector.
export const withCurrentPathProvider = ({
  path = '/',
  withSelector = false,
}): DecoratorFn => (storyFn) => (
  <Provider path={path} withSelector={withSelector}>
    {storyFn()}
  </Provider>
);
