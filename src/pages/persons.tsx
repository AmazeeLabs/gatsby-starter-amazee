import * as React from 'react';
import { graphql } from 'gatsby';
import List from '../components/List';
import { useTranslation } from 'react-i18next';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
// TODO: Learn about Gatsby's GraphQL layer.
// https://www.gatsbyjs.org/docs/graphql-concepts/
export const PersonsQuery = graphql`
  query PersonsQuery {
    swapi {
      allPersons {
        id
        name
      }
    }
  }
`;

const PersonsPage: React.FC<{
  data: {
    swapi: {
      allPersons: {
        id: string;
        name: string;
      }[];
    };
  };
}> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="mb-8">{t('Characters')}</h1>
      <List
        items={data.swapi.allPersons.map(person => ({
          id: person.id,
          label: person.name,
          path: `/persons/${person.id}`,
        }))}
      />
    </>
  );
};

export default PersonsPage;
