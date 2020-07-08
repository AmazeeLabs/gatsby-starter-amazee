import { gql } from 'apollo-server';
import { mockFilmResolver, mockAllFilmsResolver } from './resolvers';

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

//
// Resolvers
//
// @TODO Add here.
// export const resolvers = {
//   Query: {
//     film: filmResolver,
//     allFilms: allFilmsResolver,
//   },
// };

//
// Mocked resolvers
//
export const mockResolvers = {
  Query: {
    Film: mockFilmResolver,
    allFilms: mockAllFilmsResolver,
  },
};
