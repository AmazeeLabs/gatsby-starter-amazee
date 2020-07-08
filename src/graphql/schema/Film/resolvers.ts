import { films as mockFilms } from '../mockedData';
import { FilmFragment } from '../../../../typings/graphql/build';

//
// Resolvers
//

// @TODO Add resolvers here.

//
// Mocked resolvers
//

export const mockAllFilmsResolver = () => mockFilms;

/* eslint-disable @typescript-eslint/no-unused-vars */
export const mockFilmResolver = (
  parent?: any,
  args?: { id?: string; title?: string },
  context?: any,
  info?: any,
): FilmFragment | undefined => {
  const { id, title } = args || {};

  if (id) {
    return mockFilms.filter((film) => film.id === id).pop();
  }

  if (title) {
    return mockFilms.filter((film) => film.title === title).pop();
  }

  return undefined;
};
