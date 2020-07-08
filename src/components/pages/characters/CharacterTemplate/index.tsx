import React from 'react';
import { useTranslation } from 'react-i18next';
import List from 'components/containers/List';
import Meta from 'components/common/Meta';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/common/Title';
import { graphql } from 'gatsby';
import { CharacterFragment } from '../../../../../typings/graphql/build';

export const fragment = graphql`
  fragment Character on api_Person {
    id
    name
    films {
      id
      title
      episodeId
    }
  }
`;

/**
 * The main template for character pages.
 */
const CharacterTemplate: React.FC<{ character: CharacterFragment }> = ({
  character,
}) => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Meta
        description={t('api.pages.characters-character.description', {
          name: character.name,
        })}
      />
      <Title
        sectionTitle={t('api.pages.characters.title')}
        headTitle={character.name}
      >
        {t('api.pages.characters-character.title', {
          name: character.name,
        })}
      </Title>
      {character.films && (
        <List
          items={character.films.map((film) => ({
            id: film.id,
            label: `${film.title} (${t('api.pages.films-film.episode', {
              episodeId: film.episodeId,
            })})`,
            path: `/films/${film.id}`,
          }))}
        />
      )}
    </OneColumn>
  );
};

export default CharacterTemplate;
