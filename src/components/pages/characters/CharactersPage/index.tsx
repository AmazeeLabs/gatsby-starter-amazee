import React from 'react';
import { useTranslation } from 'react-i18next';
import List from 'components/containers/List';
import Meta from 'components/common/Meta';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/common/Title';
import { CharacterFragment } from '../../../../../typings/graphql/build';

const CharactersPage: React.FC<{ characters: CharacterFragment[] }> = ({
  characters,
}) => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Meta description={t('api.pages.characters.description')} />
      <Title>{t('api.pages.characters.title')}</Title>
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
