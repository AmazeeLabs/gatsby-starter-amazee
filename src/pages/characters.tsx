import React from 'react';
import { graphql } from 'gatsby';
import CharactersPage from 'components/pages/characters/CharactersPage';
import withPageWrapper from 'hocs/withPageWrapper';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
// https://www.gatsbyjs.org/docs/page-query/
export const AllPeopleQuery = graphql`
  query AllPeopleQuery {
    swapi {
      allPeople {
        id
        name
      }
    }
  }
`;

const Page: React.FC<{
  data: {
    swapi: {
      allPeople: {
        id: string;
        name: string;
      }[];
    };
  };
}> = ({ data }) => <CharactersPage characters={data.swapi.allPeople} />;

export default withPageWrapper(Page);
