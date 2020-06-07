import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import List from 'components/List';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
export const FilmQuery = graphql`
  query FilmQuery($id: ID!) {
    swapi {
      film(id: $id) {
        id
        title
        episodeId
        characters {
          id
          name
        }
      }
    }
  }
`;

const FilmPage: React.FC<{
  data: {
    swapi: {
      film: {
        id: string;
        title: string;
        episodeId: number;
        characters: {
          id: string;
          name: string;
        }[];
      };
    };
  };
}> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="mb-2">{data.swapi.film.title}</h1>
      {data.swapi.film.episodeId && (
        <p className="mb-8">
          {t('swapi.films.episode', 'Episode {{episodeId}}', {
            episodeId: data.swapi.film.episodeId,
          })}
        </p>
      )}
      <h2>{t('swapi.pages.characters', 'Characters')}</h2>
      <List
        items={data.swapi.film.characters.map((character) => ({
          id: character.id,
          label: character.name,
          path: `/characters/${character.id}`,
        }))}
      />
    </>
  );
};

export default FilmPage;
