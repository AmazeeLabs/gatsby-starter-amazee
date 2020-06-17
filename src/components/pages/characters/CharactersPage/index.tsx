import React from 'react';
import { useTranslation } from 'react-i18next';
import List from 'components/containers/List';
import Meta from 'components/common/Meta';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/common/Title';
import { Person } from 'schema/Person';

export type CharactersProp = Required<Omit<Person, 'films'>>[];

const CharactersPage: React.FC<{ characters: CharactersProp }> = ({
  characters,
}) => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Meta description={t('swapi.pages.characters.description')} />
      <Title className="mb-8">{t('swapi.pages.characters.title')}</Title>
      <List
        items={characters.map((character) => ({
          id: character.id,
          label: character.name,
          path: `/characters/${character.id}`,
        }))}
      />
    </OneColumn>
  );
};

export default CharactersPage;
