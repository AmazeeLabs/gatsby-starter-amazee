import * as React from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { Header } from '../components/header/header';
import { StaticNavigation } from '../components/navigation/navigation';
import { List } from '../components/list/list';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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

const PersonPage = ({id}: PersonPageProps) => {
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
    // TODO: Replace with messages.
    console.log(error);
  }

  return data ? (
    <>
      <h1 className="mb-8">Films with &quot;{data.Person.name}&quot;</h1>
      <List items={data.Person.films.map((film: Film) => ({
        id: film.id,
        label: `${film.title} (Episode ${film.episodeId})`,
        path: `/film/${film.id}`,
      }))} />
    </>
  ) : <p className="text-center italic">An error occurred. We are very sorry ...</p>;
};

const DynamicPersonPage = ({location}: {location: Location}) => (
  <div>
    <Header/>
    <StaticNavigation currentPath={location.pathname}/>
    <div className="page-centered py-8">
      <Router>
        <PersonPage path="person/:id" />
      </Router>
    </div>
  </div>
);

export default DynamicPersonPage;
