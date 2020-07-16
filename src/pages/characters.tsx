import React from 'react';
import CharactersPage from 'components/pages/characters/CharactersPage';
import withPageWrapper from 'hocs/withPageWrapper';
import { Router } from '@reach/router';
import CharacterTemplate from 'components/pages/characters/CharacterTemplate';
import { useTranslation } from 'react-i18next';

const CharactersRoute: React.FC = () => {
  const { i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '' : `/${i18n.language}`;
  return (
    <Router basepath={`${prefix}/characters`}>
      <CharactersPage path="/" />
      <CharacterTemplate path="/:id" id="" />
    </Router>
  );
};

export default withPageWrapper(CharactersRoute);
