import React from 'react';
import { withPageWrapper, withCurrentPathProvider } from 'utils/decorators';
import { people } from 'schema/mockedData';
import CharacterTemplate, { CharacterProp } from './index';
import * as Queries from './index';
import sinon from 'sinon';

export default {
  title: 'Pages/characters/Character page',
  component: CharacterTemplate,
  decorators: [
    withPageWrapper,
    withCurrentPathProvider({ path: '/characters/1' }),
  ],
};

// Mock data.
const character: CharacterProp = {
  id: `${people[0].id}`,
  name: `${people[0].name}`,
  films: (people[0].films || []).map((film) => ({
    id: film.id,
    title: film.title,
    episodeId: film.episodeId,
  })),
};

export const Default = () => {
  sinon.restore();
  sinon
    .stub(Queries, 'usePersonQuery')
    .returns({ data: { person: character }, loading: false });
  return <CharacterTemplate id="1" />;
};
