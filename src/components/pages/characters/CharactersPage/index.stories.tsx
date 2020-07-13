import React from 'react';
import { withPageWrapper, withCurrentPathProvider } from 'utils/decorators';
import CharactersPage, { CharactersProp } from './index';
import * as Queries from './index';
import sinon from 'sinon';
import { people } from 'schema/mockedData';

export default {
  title: 'Pages/characters/Characters list page',
  component: CharactersPage,
  decorators: [
    withPageWrapper,
    withCurrentPathProvider({ path: '/characters' }),
    (storyFn: any, context: any) => {
      sinon.restore();
      return storyFn(context);
    },
  ],
};

const characters: CharactersProp = people.map((person) => ({
  id: `${person.id}`,
  name: `${person.name}`,
}));

export const Default = () => {
  // FIXME: Sinon stubbing does not work because storybook transpiles to
  //        esmodules instead of commonjs.
  sinon.stub(Queries, 'useCharacterListQuery').returns({
    loading: false,
    data: { allPersons: characters },
  });
  return <CharactersPage />;
};
