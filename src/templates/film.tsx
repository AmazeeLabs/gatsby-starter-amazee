import * as React from 'react';
import { graphql } from 'gatsby';
import { Header } from '../components/header/header';
import { StaticNavigation } from '../components/navigation/navigation';
import { List } from '../components/list/list';

export const FilmQuery = graphql`
  query FilmQuery($id: ID!) {
    swapi {
      Film(id: $id) {
        id
        title
        episodeId
        characters {
          id
          name
        }
      }
    }
  }
`;

interface FilmResult {
  swapi: {
    Film: {
      id: string
      title: string
      episodeId: number
      characters: {
        id: string
        name: string
      }[]
    }
  }
}

const MoviePage = ({data, location}: {data: FilmResult, location: Location}) => (
  <div>
    <Header/>
    <StaticNavigation currentPath={location.pathname}/>
    <div className="page-centered py-8">
      <h1 className="mb-8">Characters in &quot;{data.swapi.Film.title}&quot;</h1>
      <List items={data.swapi.Film.characters.map(character => ({
        id: character.id,
        label: character.name,
        path: `/person/${character.id}`,
      }))} />
    </div>
  </div>
);

export default MoviePage;
