import React from 'react';
import { graphql } from 'gatsby';
import FilmsPage from 'components/pages/films/FilmsPage';
import withPageWrapper from 'hocs/withPageWrapper';
import { FilmListQuery } from 'typings/graphql/build';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
// https://www.gatsbyjs.org/docs/page-query/
export const query = graphql`
  query FilmList {
    api {
      allFilms {
        id
        title
      }
    }
  }
`;

const Page: React.FC<{
  data: FilmListQuery;
}> = ({ data }) => <FilmsPage data={data} />;

export default withPageWrapper(Page);
