import { gql } from 'apollo-server';
import { Film } from '../Film';
import { mockPersonResolver, mockAllPeopleResolver } from './resolvers';

//
// TypeScript definition
//
export interface Person {
  id?: string;
  name?: string;
  films?: Film[];
}

//
// GraphQL type definition
//
export const TypeDef = gql`
  extend type Query {
    allPeople: [Person]!
    person(id: ID, name: String): Person
  }

  type Person {
    id: ID!
    name: String!
    films: [Film]!
  }
`;

//
// Resolvers
//
// @TODO Add here.
// export const resolvers = {
//   Query: {
//     person: personResolver,
//     allPeople: allPeopleResolver,
//   },
// };

//
// Mocked resolvers
//
export const mockResolvers = {
  Query: {
    person: mockPersonResolver,
    allPeople: mockAllPeopleResolver,
  },
};
