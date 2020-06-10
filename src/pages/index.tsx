import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'components/Head';
import withPageWrapper from 'hocs/withPageWrapper';

const IndexPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head />
      <h1 className="mb-8">{t('swapi.homepage.title', 'Welcome')}</h1>
      <p>{t('swapi.homepage.text', 'This is a Gatsby example project.')}</p>
    </>
  );
};

export default withPageWrapper(IndexPage);
