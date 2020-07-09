import React from 'react';
import { graphql } from 'gatsby';
import CharacterTemplate from 'components/pages/characters/CharacterTemplate';
import withPageWrapper from 'hocs/withPageWrapper';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
// https://www.gatsbyjs.org/docs/page-query/
export const PersonQuery = graphql`
  query PersonQuery($id: ID!) {
    swapi {
      person: Person(id: $id) {
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
const Page: React.FC<{
  data: {
    swapi: {
      person: {
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
}> = ({ data }) => <CharacterTemplate character={data.swapi.person} />;

export default withPageWrapper(Page);
