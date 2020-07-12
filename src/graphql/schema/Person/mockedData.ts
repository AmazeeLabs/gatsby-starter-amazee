import { Person } from './index';

// Films have circular references to Person, so they are created in the Film mocks.
export const people: Person[] = [
  {
    id: 'cj0nv9p8yewci0130wjy4o5fa',
    name: 'Luke Skywalker',
    films: [],
  },
  {
    id: 'cj0nv9pakewcq01303eu3xuy1',
    name: 'Leia Organa',
    films: [],
  },
  {
    id: 'cj0nv9pdlewd80130bs5vgryn',
    name: 'Han Solo',
    films: [],
  },
  {
    id: 'cj0nv9p9gewck0130h8f8esy0',
    name: 'C-3PO',
    films: [],
  },
];
