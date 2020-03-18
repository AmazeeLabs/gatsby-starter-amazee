import * as React from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import List from '../components/List';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useTranslation } from 'react-i18next';

interface PersonPageProps extends RouteComponentProps {
  id?: number;
}

interface PersonResult {
  id: string;
  name: string;
  films: Film[];
}

interface Film {
  id: string;
  title: string;
  episodeId: string;
}

/**
 * The main visual template for the person page, including an apollo query.
 */
const PersonPage: React.FC<PersonPageProps> = ({ id }) => {
  const { t } = useTranslation();

  // Apollo`s useQuery hook allows us to query for additional data at runtime
  // from the client.
  // TODO: Learn about querying data at runtime.
  // https://www.gatsbyjs.org/docs/static-query/#usestaticquery
  const { data, error, loading } = useQuery<{ Person: PersonResult }>(
    gql`
      query PersonQuery($id: ID!) {
        Person(id: $id) {
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
    { variables: { id } }
  );

  if (loading) {
    return <p className="text-center italic">Loading ...</p>;
  }

  if (error) {
    console.log(error);
  }

  return data && data.Person ? (
    <>
      <h1 className="mb-8">
        {t('Films with "{{name}}"', { name: data.Person.name })}
      </h1>
      <List
        items={data.Person.films.map((film: Film) => ({
          id: film.id,
          label: `${film.title} (Episode ${film.episodeId})`,
          path: `/films/${film.id}`,
        }))}
      />
    </>
  ) : (
    <p className="text-center italic">
      An error occurred. We are very sorry ...
    </p>
  );
};

/**
 * The person template entry point.
 * Parses the path and calls the PersonPage component with the url arguments.
 */
const DynamicPersonPage: React.FC = () => (
  <Router>
    <PersonPage path="persons/:id" />
    {/*FIXME: Remove language prefix before path is handed over to the router.*/}
    <PersonPage path=":language/persons/:id" />
  </Router>
);

export default DynamicPersonPage;
