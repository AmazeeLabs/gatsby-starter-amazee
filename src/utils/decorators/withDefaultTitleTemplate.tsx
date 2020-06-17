import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { DecoratorFn } from '@storybook/react';
import { defaultTitleTemplate } from 'utils/i18n';

const TitleTemplate = () => {
  const { t } = useTranslation();

  return (
    <Helmet
      titleTemplate={defaultTitleTemplate(t)}
      defaultTitle={t('global.siteName')}
    />
  );
};

export const withDefaultTitleTemplate: DecoratorFn = (storyFn) => (
  <>
    <TitleTemplate />
    {storyFn()}
  </>
);
