import React from 'react';
import { useTranslation } from 'react-i18next';
import List from 'components/containers/List';
import Meta from 'components/common/Meta';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/common/Title';
import { Film } from 'schema/Film';
import { Person } from 'schema/Person';

export type FilmProp = Required<Omit<Film, 'characters'>> & {
  characters: Required<Omit<Person, 'films'>>[];
};

const FilmTemplate: React.FC<{
  film: FilmProp;
}> = ({ film }) => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Meta
        description={t('swapi.pages.films-film.description', {
          title: film.title,
        })}
      />
      <Title className="mb-2" sectionTitle={t('swapi.pages.films.title')}>
        {film.title}
      </Title>
      {film.episodeId && (
        <p className="mb-8">
          {t('swapi.pages.films-film.episode', {
            episodeId: film.episodeId,
          })}
        </p>
      )}
      <h2>{t('swapi.pages.films-film.characters')}</h2>
      <List
        items={film.characters.map((character) => ({
          id: character.id,
          label: character.name,
          path: `/characters/${character.id}`,
        }))}
      />
    </OneColumn>
  );
};

export default FilmTemplate;
