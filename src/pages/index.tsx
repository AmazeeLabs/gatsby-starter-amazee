import * as React from 'react';

import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';

export const MoviesQuery = graphql`
  query MoviesQuery {
    swapi {
      allFilms {
        title
      }
    }
  }
`;

interface MoviesResult {
  swapi: {
    allFilms: {
      title: string
    }[]
  }
}

const IndexPage = ({data}: {data: MoviesResult}) => (
  <Layout>
    {data.swapi.allFilms.map(film => <p key={film.title}>{film.title}</p>)}
  </Layout>
);

export default IndexPage;
