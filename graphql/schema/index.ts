import { gql } from 'apollo-server';
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

const films: Film.Film[] = [
  {
    id: '1',
    title: 'A New Hope',
    episodeId: 4,
    characters: [],
  },
  {
    id: '2',
    title: 'The Empire Strikes Back',
    episodeId: 5,
    characters: [],
  },
  {
    id: '3',
    title: 'Return of the Jedi',
    episodeId: 6,
    characters: [],
  },
];

const people: Person.Person[] = [
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

people[0].films = [films[0], films[1]];
people[1].films = [films[1], films[2]];
people[2].films = [films[0], films[1], films[2]];

films[0].characters = [people[0], people[2]];
films[1].characters = [people[0], people[1], people[2]];
films[2].characters = [people[1], people[2]];

export const mockResolvers = <any>{
  Query: () => ({
    allFilms: () => films,
    allPeople: () => people,
    person: (_: any, { id }: { id: String }) => {
      return people.filter((person) => person.id === id).pop();
    },
    film: (_: any, { id }: { id: String }) => {
      return films.filter((film) => film.id === id).pop();
    },
  }),
};
