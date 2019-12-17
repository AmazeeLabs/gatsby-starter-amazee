import * as React from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { List } from '../components/list/list';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useTranslation } from 'react-i18next';

interface PersonPageProps extends RouteComponentProps {
  id?: number
}

interface PersonResult {
  id: string
  name: string
  films: Film[]
}

interface Film {
  id: string
  title: string
  episodeId: string
}

const PersonPage : React.FC<PersonPageProps> = ({id}) => {
  const {t} = useTranslation();

  // Apollo`s useQuery hook allows us to query for additional data at runtime
  // from the client.
  // TODO: Learn about querying data at runtime.
  // https://www.gatsbyjs.org/docs/static-query/#usestaticquery
  const {data, error, loading}= useQuery<{ Person: PersonResult}>(gql`
    query PersonQuery ($id: ID!) {
      Person(id: $id)  {
        id
        name
        films {
          id
          title
          episodeId
        }
      }
    }
  `, {variables: {id}});

  if (loading) {
    return <p className="text-center italic">Loading ...</p>;
  }

  if (error) {
    console.log(error);
  }

  return data ? (
    <>
      <h1 className="mb-8">{t('Films with "{{name}}"', {name: data.Person.name})}</h1>
      <List items={data.Person.films.map((film: Film) => ({
        id: film.id,
        label: `${film.title} (Episode ${film.episodeId})`,
        path: `/film/${film.id}`,
      }))} />
    </>
  ) : <p className="text-center italic">An error occurred. We are very sorry ...</p>;
};

const DynamicPersonPage : React.FC = () => (
  <Router>
    <PersonPage path="person/:id" />
    <PersonPage path=":language/person/:id" />
  </Router>
);

export default DynamicPersonPage;
