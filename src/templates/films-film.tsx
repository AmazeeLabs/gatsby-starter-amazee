import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import List from 'components/containers/List';
import Meta from 'components/common/Meta';
import OneColumn from 'components/layouts/OneColumn';
import Title from 'components/common/Title';
import withPageWrapper from 'hocs/withPageWrapper';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
export const FilmQuery = graphql`
  query FilmQuery($id: ID!) {
    swapi {
      film(id: $id) {
        id
        title
        episodeId
        characters {
          id
          name
        }
      }
    }
  }
`;

const FilmPage: React.FC<{
  data: {
    swapi: {
      film: {
        id: string;
        title: string;
        episodeId: number;
        characters: {
          id: string;
          name: string;
        }[];
      };
    };
  };
}> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Meta
        description={t('swapi.pages.films-film.description', {
          title: data.swapi.film.title,
        })}
      />
      <Title className="mb-2" sectionTitle={t('swapi.pages.films.title')}>
        {data.swapi.film.title}
      </Title>
      {data.swapi.film.episodeId && (
        <p className="mb-8">
          {t('swapi.pages.films-film.episode', {
            episodeId: data.swapi.film.episodeId,
          })}
        </p>
      )}
      <h2>{t('swapi.pages.films-film.characters')}</h2>
      <List
        items={data.swapi.film.characters.map((character) => ({
          id: character.id,
          label: character.name,
          path: `/characters/${character.id}`,
        }))}
      />
    </OneColumn>
  );
};

export default withPageWrapper(FilmPage);
