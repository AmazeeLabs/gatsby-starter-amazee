import React from 'react';
import { graphql } from 'gatsby';
import CharactersPage from 'components/pages/characters/CharactersPage';
import withPageWrapper from 'hocs/withPageWrapper';
import { CharacterListQuery } from '../../typings/graphql/build';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
// https://www.gatsbyjs.org/docs/page-query/
export const query = graphql`
  query CharacterList {
    api {
      allPersons {
        id
        name
      }
    }
  }
`;

const Page: React.FC<{
  data: CharacterListQuery;
}> = ({ data }) => <CharactersPage characters={data.api.allPersons} />;

export default withPageWrapper(Page);
