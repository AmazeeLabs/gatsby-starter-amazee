import * as React from 'react';
import { graphql } from 'gatsby';
import { List } from '../components/list/list';
import { useTranslation } from 'react-i18next';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
export const FilmQuery = graphql`
  query FilmQuery($id: ID!) {
    swapi {
      Film(id: $id) {
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
      Film: {
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
      <h1 className="mb-8">
        {t('Characters in "{{title}}"', { title: data.swapi.Film.title })}
      </h1>
      <List
        items={data.swapi.Film.characters.map(character => ({
          id: character.id,
          label: character.name,
          path: `/persons/${character.id}`,
        }))}
      />
    </>
  );
};

export default FilmPage;
