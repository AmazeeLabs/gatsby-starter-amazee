import * as React from 'react';
import { useTranslation } from 'react-i18next';

const IndexPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="mb-8">{t('swapi.homepage.title', 'Welcome')}</h1>
      <p>{t('swapi.homepage.text', 'This is a Gatsby example project.')}</p>
    </>
  );
};

export default IndexPage;
