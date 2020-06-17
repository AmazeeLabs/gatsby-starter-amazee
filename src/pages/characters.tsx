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
export const AllPeopleQuery = graphql`
  query AllPeopleQuery {
    swapi {
      allPeople {
        id
        name
      }
    }
  }
`;

const CharactersPage: React.FC<{
  data: {
    swapi: {
      allPeople: {
        id: string;
        name: string;
      }[];
    };
  };
}> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <OneColumn>
      <Meta description={t('swapi.pages.characters.description')} />
      <Title className="mb-8">{t('swapi.pages.characters.title')}</Title>
      <List
        items={data.swapi.allPeople.map((person) => ({
          id: person.id,
          label: person.name,
          path: `/characters/${person.id}`,
        }))}
      />
    </OneColumn>
  );
};

export default withPageWrapper(CharactersPage);
