import React from 'react';
import { useTranslation } from 'react-i18next';
import List from 'components/containers/List';
import Meta from 'components/common/Meta';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/common/Title';
import { Person } from 'schema/Person';
import { Film } from 'schema/Film';
import { gql, QueryResult, useQuery } from '@apollo/client';
import { Loading } from 'components/common/Loading';
import { RouteComponentProps } from '@reach/router';

export type CharacterProp = Omit<Person, 'films'> & {
  films: Omit<Film, 'characters'>[];
};

export const usePersonQuery = (
  id: string,
): Pick<QueryResult<{ person: CharacterProp }>, 'loading' | 'data' | 'error'> =>
  useQuery<{ person: CharacterProp }>(
    gql`
      query PersonQuery($id: ID!) {
        person: Person(id: $id) {
          id
          name
          films {
            id
            title
            episodeId
          }
        }
      }
    `,
    {
      variables: { id },
    },
  );

/**
 * The main template for character pages.
 */
const CharacterTemplate: React.FC<
  {
    id: string;
  } & RouteComponentProps
> = ({ id }) => {
  const { data, error, loading } = usePersonQuery(id);
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Loading loading={loading} data={data} error={error?.message}>
        {(data) => (
          <>
            <Meta
              description={t('swapi.pages.characters-character.description', {
                name: data.person.name,
              })}
            />
            <Title
              sectionTitle={t('swapi.pages.characters.title')}
              headTitle={data.person.name}
            >
              {t('swapi.pages.characters-character.title', {
                name: data.person.name,
              })}
            </Title>
            <List
              items={data.person.films.map((film) => ({
                id: `${film.id}`,
                label: `${film.title} (${t('swapi.pages.films-film.episode', {
                  episodeId: film.episodeId,
                })})`,
                path: `/films/${film.id}`,
              }))}
            />
          </>
        )}
      </Loading>
    </OneColumn>
  );
};

export default CharacterTemplate;
