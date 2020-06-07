import { gql } from 'apollo-server';
import merge from 'lodash/merge';
import * as Film from './Film';
import * as Person from './Person';

export const typeDefs = [
  gql`
    type Query {
      _empty: String
    }
  `,
  Film.TypeDef,
  Person.TypeDef,
];

let mergedMockResolvers: any = {};
mergedMockResolvers = merge(
  mergedMockResolvers,
  Film.mockResolvers,
  Person.mockResolvers,
);
export const mockResolvers = {
  ...mergedMockResolvers,
  Query: () => mergedMockResolvers.Query,
};
