import React from 'react';
import { useTranslation } from 'react-i18next';
import List from 'components/containers/List';
import Meta from 'components/common/Meta';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/common/Title';
import { graphql } from 'gatsby';
import { FilmFragment } from 'typings/graphql/build';

export const fragment = graphql`
  fragment Film on api_Film {
    id
    title
    episodeId
    characters {
      id
      name
    }
  }
`;

const FilmTemplate: React.FC<{ film: FilmFragment }> = ({ film }) => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Meta
        description={t('api.pages.films-film.description', {
          title: film.title,
        })}
      />
      <Title className="mb-2" sectionTitle={t('api.pages.films.title')}>
        {film.title}
      </Title>
      {film.episodeId && (
        <p className="mb-8">
          {t('api.pages.films-film.episode', {
            episodeId: film.episodeId,
          })}
        </p>
      )}
      <h2>{t('api.pages.films-film.characters')}</h2>
      {film.characters && (
        <List
          items={film.characters.map((character) => ({
            id: character.id,
            label: character.name,
            path: `/characters/${character.id}`,
          }))}
        />
      )}
    </OneColumn>
  );
};

export default FilmTemplate;
