import { gql } from 'apollo-server';
import { mockPersonResolver, mockAllPeopleResolver } from './resolvers';
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
