import React from 'react';
import { useTranslation } from 'react-i18next';
import List from 'components/containers/List';
import Meta from 'components/common/Meta';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/common/Title';
import { FilmListQuery } from 'typings/graphql/build';

const FilmsPage: React.FC<{
  data: FilmListQuery;
}> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Meta description={t('api.pages.films.description')} />
      <Title>{t('api.pages.films.title')}</Title>
      <List
        items={data.api.allFilms.map((film) => ({
          id: film.id,
          label: film.title,
          path: `/films/${film.id}`,
        }))}
      />
    </OneColumn>
  );
};

export default FilmsPage;
