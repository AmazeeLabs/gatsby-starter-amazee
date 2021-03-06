import React from 'react';
import { useTranslation } from 'react-i18next';
import Meta from 'components/common/Meta';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/common/Title';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Meta description={t('swapi.pages.home.description')} />
      <Title isHomepage>{t('swapi.pages.home.title')}</Title>
      <p>{t('swapi.pages.home.text')}</p>
    </OneColumn>
  );
};

export default HomePage;
