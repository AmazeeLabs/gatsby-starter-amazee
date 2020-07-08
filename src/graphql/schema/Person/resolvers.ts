import { people as mockPeople } from '../mockedData';
import { CharacterFragment } from '../../../../typings/graphql/build';

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
): CharacterFragment | undefined => {
  const { id, name } = args || {};

  if (id) {
    return mockPeople.filter((person) => person.id === id).pop();
  }

  if (name) {
    return mockPeople.filter((person) => person.name === name).pop();
  }

  return undefined;
};
