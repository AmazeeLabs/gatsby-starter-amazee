import * as React from 'react';
import { graphql } from 'gatsby';
import { List } from '../components/list/list';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
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

const MoviePage = ({data}: {data: FilmResult}) => (
  <>
    <h1 className="mb-8">Characters in &quot;{data.swapi.Film.title}&quot;</h1>
    <List items={data.swapi.Film.characters.map(character => ({
      id: character.id,
      label: character.name,
      path: `/person/${character.id}`,
    }))} />
  </>
);

export default MoviePage;
