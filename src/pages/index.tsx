import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Meta from 'components/Meta';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/Title';
import withPageWrapper from 'hocs/withPageWrapper';

const IndexPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Meta description={t('swapi.pages.home.description')} />
      <Title className="mb-8" isHomepage>
        {t('swapi.pages.home.title')}
      </Title>
      <p>{t('swapi.pages.home.text')}</p>
    </OneColumn>
  );
};

export default withPageWrapper(IndexPage);
