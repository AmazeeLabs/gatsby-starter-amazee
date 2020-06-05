import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import List from 'components/List';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
export const PersonQuery = graphql`
  query PersonQuery($id: ID!) {
    swapi {
      Person(id: $id) {
        id
        name
        films {
          id
          title
          episodeId
        }
      }
    }
  }
`;

/**
 * The main visual template for the person page, including an apollo query.
 */
const PersonPage: React.FC<{
  data: {
    swapi: {
      Person: {
        id: string;
        name: string;
        films: {
          id: string;
          title: string;
          episodeId: string;
        }[];
      };
    };
  };
}> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="mb-8">
        {t('Films with "{{name}}"', { name: data.Person.name })}
      </h1>
      <List
        items={data.swapi.Person.films.map(film => ({
          id: film.id,
          label: `${film.title} (Episode ${film.episodeId})`,
          path: `/films/${film.id}`,
        }))}
      />
    </>
  );
};

export default PersonPage;
