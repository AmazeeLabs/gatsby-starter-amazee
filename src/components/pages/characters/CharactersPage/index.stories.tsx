import React from 'react';
import { withPageWrapper, withCurrentPathProvider } from 'utils/decorators';
import { people } from 'schema/mockedData';
import CharactersPage, { CharactersProp } from './index';

export default {
  title: 'Pages/characters/Characters list page',
  component: CharactersPage,
  decorators: [
    withPageWrapper,
    withCurrentPathProvider({ path: '/characters' }),
  ],
};

// Mock data.
const characters: CharactersProp = people.map((person) => ({
  id: `${person.id}`,
  name: `${person.name}`,
}));

export const Default = () => <CharactersPage characters={characters} />;
