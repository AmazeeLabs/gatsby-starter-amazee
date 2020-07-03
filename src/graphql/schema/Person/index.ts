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
    allPersons: [Person]!
    Person(id: ID, name: String): Person
  }

  type Person {
    id: ID!
    name: String!
    films: [Film]!
  }
`;

//
// Mocked resolvers
//
export const mockResolvers = {
  Query: {
    Person: mockPersonResolver,
    allPersons: mockAllPeopleResolver,
  },
};
