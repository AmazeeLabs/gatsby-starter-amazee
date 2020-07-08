import React from 'react';
import { useTranslation } from 'react-i18next';
import Meta from 'components/common/Meta';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/common/Title';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Meta description={t('api.pages.home.description')} />
      <Title isHomepage>{t('api.pages.home.title')}</Title>
      <p>{t('api.pages.home.text')}</p>
    </OneColumn>
  );
};

export default HomePage;
