import React from 'react';
import { graphql } from 'gatsby';
import FilmTemplate from 'components/pages/films/FilmTemplate';
import withPageWrapper from 'hocs/withPageWrapper';
import { FilmDetailsQuery } from 'typings/graphql/build';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
// https://www.gatsbyjs.org/docs/page-query/
export const FilmQuery = graphql`
  query FilmDetails($id: ID!) {
    api {
      film: Film(id: $id) {
        ...Film
      }
    }
  }
`;

const Page: React.FC<{
  data: FilmDetailsQuery;
}> = ({ data }) =>
  data.api.film ? <FilmTemplate film={data.api.film} /> : <div />;

export default withPageWrapper(Page);
