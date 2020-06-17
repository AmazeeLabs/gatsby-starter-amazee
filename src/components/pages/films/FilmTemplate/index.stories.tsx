import React from 'react';
import { withPageWrapper, withCurrentPathProvider } from 'utils/decorators';
import { films } from 'schema/mockedData';
import FilmTemplate, { FilmProp } from './index';

export default {
  title: 'Pages/films/Film page',
  component: FilmTemplate,
  decorators: [withPageWrapper, withCurrentPathProvider({ path: '/films/1' })],
};

// Mock data.
const film: FilmProp = {
  id: `${films[0].id}`,
  title: `${films[0].title}`,
  episodeId: `${films[0].episodeId}`,
  characters: (films[0].characters || []).map((character) => ({
    id: `${character.id}`,
    name: `${character.name}`,
  })),
};

export const Default = () => <FilmTemplate film={film} />;
