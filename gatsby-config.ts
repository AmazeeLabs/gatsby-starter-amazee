/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: `.env` });

// Read in additional environment variables based on the `CURRENT_APP_ENV`
// environment variable.
dotenvConfig({
  path: `.environments/${process.env.CURRENT_APP_ENV || 'local'}.env`,
});

// TODO: Adjust this depending on the hosting setup and project repository name.
export const pathPrefix = '/gatsby-starter-amazee';

export const siteMetadata = {
  // TODO: Adjust the static site navigation or remove it entirely.
  navigation: [
    { path: '/', label: 'Home' },
    { path: '/films', label: 'Films' },
    {
      path: '/persons',
      label: 'Characters',
    },
  ],
};

export const plugins = [
  'gatsby-plugin-typescript',
  'gatsby-plugin-layout',
  'gatsby-plugin-postcss',
  'gatsby-plugin-react-helmet',
  // TODO: Update the data source configuration's typeName and fieldName.
  {
    resolve: 'gatsby-source-graphql',
    options: {
      typeName: 'swapi',
      fieldName: 'swapi',
      url: process.env.GATSBY_GRAPHQL_BUILD_ENDPOINT,
    },
  },
];
