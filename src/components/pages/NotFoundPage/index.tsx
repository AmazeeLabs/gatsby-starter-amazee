import React from 'react';
import { useTranslation } from 'react-i18next';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/common/Title';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Title headTitle={t('pages.404.error')}>{t('pages.404.title')}</Title>
      <p>{t('pages.404.text')}</p>
    </OneColumn>
  );
};

export default NotFoundPage;
