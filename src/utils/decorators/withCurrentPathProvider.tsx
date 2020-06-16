import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { CurrentPathProvider } from 'hooks/current_path';
import { navLinks } from 'components/Navigation';
import { useTranslation } from 'react-i18next';

const Provider: React.FC = ({ children }) => {
  const { t } = useTranslation();
  const selectOptions: { [key: string]: string } = {};

  navLinks.forEach((item) => {
    selectOptions[t(item.key)] = item.path;
  });
  selectOptions.Other = '/non-matching-path';

  return (
    <CurrentPathProvider
      path={select<string>('Current path', selectOptions, '/')}
    >
      {children}
    </CurrentPathProvider>
  );
};

export const withCurrentPathProvider: DecoratorFn = (storyFn) => (
  <Provider>{storyFn()}</Provider>
);
