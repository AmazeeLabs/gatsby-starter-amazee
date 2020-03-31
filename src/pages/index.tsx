import * as React from 'react';
import { useTranslation } from 'react-i18next';
import OneColumn from 'components/layouts/OneColumn';
import Head from 'components/Head';
import withPageWrapper from 'hocs/withPageWrapper';

const IndexPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Head />
      <h1 className="mb-8">{t('swapi.pages.home.title')}</h1>
      <p>{t('swapi.pages.home.text')}</p>
    </OneColumn>
  );
};

export default withPageWrapper(IndexPage);
