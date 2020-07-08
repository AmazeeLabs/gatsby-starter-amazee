import React from 'react';
import { withPageWrapper, withCurrentPathProvider } from 'utils/decorators';
import { people } from 'schema/mockedData';
import CharacterTemplate from './index';
import { CharacterFragment } from '../../../../../typings/graphql/build';

export default {
  title: 'Pages/characters/Character page',
  component: CharacterTemplate,
  decorators: [
    withPageWrapper,
    withCurrentPathProvider({ path: '/characters/1' }),
  ],
};

// Mock data.
const character: CharacterFragment = {
  id: `${people[0].id}`,
  name: `${people[0].name}`,
  films: (people[0].films || []).map((film) => ({
    id: `${film.id}`,
    title: `${film.title}`,
    episodeId: film.episodeId,
  })),
};

export const Default = () => <CharacterTemplate character={character} />;
