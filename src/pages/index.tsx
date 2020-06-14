import * as React from 'react';
import { useTranslation } from 'react-i18next';
import OneColumn from 'components/layouts/OneColumn';
import withPageWrapper from 'hocs/withPageWrapper';

const IndexPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <h1 className="mb-8">{t('swapi-pages.home.title', 'Welcome')}</h1>
      <p>{t('swapi-pages.home.text', 'This is a Gatsby example project.')}</p>
    </OneColumn>
  );
};

export default withPageWrapper(IndexPage);
