import * as React from 'react';
import { graphql } from 'gatsby';
import { List } from '../components/list/list';
import { useTranslation } from 'react-i18next';

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
