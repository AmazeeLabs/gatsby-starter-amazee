import React from 'react';
import { useTranslation } from 'react-i18next';
import List from 'components/containers/List';
import Meta from 'components/common/Meta';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/common/Title';
import { Person } from 'schema/Person';
import { Film } from 'schema/Film';

export type CharacterProp = Required<Omit<Person, 'films'>> & {
  films: Required<Omit<Film, 'characters'>>[];
};

/**
 * The main template for character pages.
 */
const CharacterTemplate: React.FC<{
  character: CharacterProp;
}> = ({ character }) => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Meta
        description={t('swapi.pages.characters-character.description', {
          name: character.name,
        })}
      />
      <Title
        sectionTitle={t('swapi.pages.characters.title')}
        headTitle={character.name}
      >
        {t('swapi.pages.characters-character.title', {
          name: character.name,
        })}
      </Title>
      <List
        items={character.films.map((film) => ({
          id: film.id,
          label: `${film.title} (${t('swapi.pages.films-film.episode', {
            episodeId: film.episodeId,
          })})`,
          path: `/films/${film.id}`,
        }))}
      />
    </OneColumn>
  );
};

export default CharacterTemplate;
