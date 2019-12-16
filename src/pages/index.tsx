import * as React from 'react';
import { graphql } from 'gatsby';
import { List } from '../components/list/list';
import { useTranslation } from 'react-i18next';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
// TODO: Learn about Gatsby's GraphQL layer.
// https://www.gatsbyjs.org/docs/graphql-concepts/
export const FilmsQuery = graphql`
  query FilmsQuery {
    swapi {
      allFilms {
        id
        title
        episodeId
      }
    }
  }
`;

interface FilmsResult {
  swapi: {
    allFilms: {
      id: string
      title: string
      episodeId: number
    }[]
  }
}

const IndexPage = ({data}: {data: FilmsResult}) => {
  const {t} = useTranslation();
  return (
    <>
      <h1 className="mb-8">{t('Movie listing')}</h1>
      <List items={data.swapi.allFilms.map(film => ({
        id: film.id,
        label: film.title,
        path: `/film/${film.id}`,
      }))} />
    </>
  );
};

export default IndexPage;
