import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import List from 'components/List';
import Meta from 'components/common/Meta';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/common/Title';
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
    <OneColumn>
      <Meta description={t('swapi.pages.films.description')} />
      <Title className="mb-8">{t('swapi.pages.films.title')}</Title>
      <List
        items={data.swapi.allFilms.map((film) => ({
          id: film.id,
          label: film.title,
          path: `/films/${film.id}`,
        }))}
      />
    </OneColumn>
  );
};

export default withPageWrapper(FilmsPage);
