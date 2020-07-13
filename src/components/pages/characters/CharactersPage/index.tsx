import React from 'react';
import { useTranslation } from 'react-i18next';
import List from 'components/containers/List';
import Meta from 'components/common/Meta';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/common/Title';
import { Person } from 'schema/Person';
import { gql, useQuery, QueryResult } from '@apollo/client';
import { Loading } from 'components/common/Loading';

export type CharactersProp = Omit<Person, 'films'>[];
type CharacterListResult = {
  allPersons: Person[];
};

export const useCharacterListQuery = (): Pick<
  QueryResult<CharacterListResult>,
  'data' | 'loading' | 'error'
> =>
  useQuery<CharacterListResult>(gql`
    fragment CharacterListItem on Person {
      id
      name
    }
    query CharacterListQuery {
      allPersons {
        ...CharacterListItem
      }
    }
  `);

const CharactersPage: React.FC = () => {
  const { t } = useTranslation();
  const { data, loading, error } = useCharacterListQuery();
  return (
    <OneColumn>
      <Meta description={t('swapi.pages.characters.description')} />
      <Title>{t('swapi.pages.characters.title')}</Title>
      <Loading data={data} loading={loading} error={error?.message}>
        {(data) => (
          <List
            items={data.allPersons.map((character) => ({
              id: `${character.id}`,
              label: `${character.name}`,
              path: `/characters/${character.id}`,
            }))}
          />
        )}
      </Loading>
    </OneColumn>
  );
};

export default CharactersPage;
