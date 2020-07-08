import React from 'react';
import { graphql } from 'gatsby';
import CharacterTemplate from 'components/pages/characters/CharacterTemplate';
import withPageWrapper from 'hocs/withPageWrapper';
import { CharacterDetailsQuery } from 'typings/graphql/build';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
// https://www.gatsbyjs.org/docs/page-query/
export const PersonQuery = graphql`
  query CharacterDetails($id: ID!) {
    api {
      person: Person(id: $id) {
        ...Character
      }
    }
  }
`;

/**
 * The main visual template for the person page, including an apollo query.
 */
const Page: React.FC<{
  data: CharacterDetailsQuery;
}> = ({ data }) =>
  data.api.person ? <CharacterTemplate character={data.api.person} /> : <div />;

export default withPageWrapper(Page);
