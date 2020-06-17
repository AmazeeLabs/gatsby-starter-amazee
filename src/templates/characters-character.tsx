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
export const PersonQuery = graphql`
  query PersonQuery($id: ID!) {
    swapi {
      person(id: $id) {
        id
        name
        films {
          id
          title
          episodeId
        }
      }
    }
  }
`;

/**
 * The main visual template for the person page, including an apollo query.
 */
const PersonPage: React.FC<{
  data: {
    swapi: {
      person: {
        id: string;
        name: string;
        films: {
          id: string;
          title: string;
          episodeId: string;
        }[];
      };
    };
  };
}> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Meta
        description={t('swapi.pages.characters-character.description', {
          name: data.swapi.person.name,
        })}
      />
      <Title
        className="mb-8"
        sectionTitle={t('swapi.pages.characters.title')}
        headTitle={data.swapi.person.name}
      >
        {t('swapi.pages.characters-character.title', {
          name: data.swapi.person.name,
        })}
      </Title>
      <List
        items={data.swapi.person.films.map((film) => ({
          id: film.id,
          label: `${film.title} (${t('swapi.pages.films-film.episode', {
            episodeId: film.episodeId,
          })})`,
          path: `/films/${film.id}`,
        }))}
      />
    </OneColumn>
  );
};

export default withPageWrapper(PersonPage);
