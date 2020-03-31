import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Head from '../components/Head';

const IndexPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head />
      <h1 className="mb-8">{t('Welcome')}</h1>
      <p>{t('This is a Gatsby example project.')}</p>
    </>
  );
};

export default IndexPage;
