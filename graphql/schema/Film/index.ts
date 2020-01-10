import { gql } from 'apollo-server';
import { Person } from '../Person';

//
// TypeScript definition
//
export interface Film {
  id?: string;
  title?: string;
  episodeId?: number;
  characters?: Person[];
}

//
// GraphQL type definition
//
export const TypeDef = gql`
  extend type Query {
    allFilms: [Film]!
    Film(id: ID, title: String): Film
  }

  type Film {
    id: ID!
    title: String!
    episodeId: Int!
    characters: [Person]!
  }
`;
