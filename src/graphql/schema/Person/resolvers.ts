import { Person } from './index';
import { people as mockPeople } from '../mockedData';

//
// Resolvers
//

// @TODO Add resolvers here.

//
// Mocked resolvers
//

export const mockAllPeopleResolver = () => mockPeople;

/* eslint-disable @typescript-eslint/no-unused-vars */
export const mockPersonResolver = (
  parent?: any,
  args?: { id?: string; name?: string },
  context?: any,
  info?: any,
): Person | undefined => {
  const { id, name } = args || {};

  if (id) {
    return mockPeople.filter((person) => person.id === id).pop();
  }

  if (name) {
    return mockPeople.filter((person) => person.name === name).pop();
  }

  return {};
};
