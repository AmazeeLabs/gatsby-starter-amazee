import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Head from 'components/Head';
import List from 'components/List';
import withPageWrapper from 'hocs/withPageWrapper';

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

const FilmsPage: React.FC<{
  data: {
    swapi: {
      allFilms: {
        id: string;
        title: string;
        episodeId: number;
      }[];
    };
  };
}> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head title={t('Films')} />
      <h1 className="mb-8">{t('swapi.pages.films', 'Films')}</h1>
      <List
        items={data.swapi.allFilms.map((film) => ({
          id: film.id,
          label: film.title,
          path: `/films/${film.id}`,
        }))}
      />
    </>
  );
};

export default withPageWrapper(FilmsPage);
