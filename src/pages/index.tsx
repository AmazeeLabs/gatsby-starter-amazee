import * as React from 'react';
import { graphql } from 'gatsby';
import { Header } from '../components/header/header';
import { StaticNavigation } from '../components/navigation/navigation';
import { List } from '../components/list/list';

export const FilmsQuery = graphql`
  query FilmsQuery {
    swapi {
      allFilms {
        id
        title
        episodeId
      }
    }
  }
`;

interface FilmsResult {
  swapi: {
    allFilms: {
      id: string
      title: string
      episodeId: number
    }[]
  }
}

const IndexPage = ({data, location}: {data: FilmsResult, location: Location}) => (
  <div>
    <Header/>
    <StaticNavigation currentPath={location.pathname}/>
    <div className="page-centered py-8">
      <h1 className="mb-8">Movie listing</h1>
      <List items={data.swapi.allFilms.map(film => ({
        id: film.id,
        label: film.title,
        path: `/film/${film.id}`,
      }))} />
    </div>
  </div>
);

export default IndexPage;
