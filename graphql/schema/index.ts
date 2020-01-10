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

const persons: Person.Person[] = [
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

persons[0].films = [films[0], films[1]];
persons[1].films = [films[1], films[2]];
persons[2].films = [films[0], films[1], films[2]];

films[0].characters = [persons[0], persons[2]];
films[1].characters = [persons[0], persons[1], persons[2]];
films[2].characters = [persons[1], persons[2]];

export const mockResolvers = <any>{
  Query: () => ({
    allFilms: () => films,
    allPersons: () => persons,
    Person: (_: any, { id }: { id: String }) => {
      return persons.filter((person) => person.id === id).pop();
    },
    Film: (_: any, { id }: { id: String }) => {
      return films.filter((film) => film.id === id).pop();
    },
  }),
};
