import { CharacterFragment } from '../../../../typings/graphql/build';

// Films have circular references to Person, so they are created in the Film mocks.
export const people: CharacterFragment[] = [
  {
    id: '1',
    name: 'Luke Skywalker',
    films: [],
  },
  {
    id: '2',
    name: 'Leia Organa',
    films: [],
  },
  {
    id: '3',
    name: 'Han Solo',
    films: [],
  },
];
