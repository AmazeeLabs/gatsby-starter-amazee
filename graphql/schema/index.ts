import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    allFilms: [Film]!
    allPersons: [Person]!
    Person(id: ID!): Person
    Film(id: ID!): Film
  }

  type Film {
    id: ID!
    title: String!
    episodeId: Int!
    characters: [Person]!
  }

  type Person {
    id: ID!
    name: String!
    films: [Film]!
  }
`;

interface Film {
  id: string;
  title: string;
  episodeId: number;
  characters: Character[];
}

interface Character {
  id: string;
  name: string;
  films: Film[];
}

const films: Film[] = [
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

const persons: Character[] = [
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
