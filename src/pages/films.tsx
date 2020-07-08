import React from 'react';
import { graphql } from 'gatsby';
import FilmsPage from 'components/pages/films/FilmsPage';
import withPageWrapper from 'hocs/withPageWrapper';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
// https://www.gatsbyjs.org/docs/page-query/
export const FilmsQuery = graphql`
  query FilmsQuery {
    api {
      allFilms {
        id
        title
      }
    }
  }
`;

const Page: React.FC<{
  data: {
    api: {
      allFilms: {
        id: string;
        title: string;
      }[];
    };
  };
}> = ({ data }) => <FilmsPage films={data.api.allFilms} />;

export default withPageWrapper(Page);
