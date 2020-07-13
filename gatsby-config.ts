/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

import { config as dotenvConfig } from 'dotenv';
import { languageCodes, defaultLanguage, localizePath } from './src/utils/i18n';

dotenvConfig({ path: `.env` });

// Read in additional environment variables based on the `CURRENT_APP_ENV`
// environment variable.
dotenvConfig({
  path: `.environments/${process.env.CURRENT_APP_ENV || 'local'}.env`,
});

// TODO: Adjust this depending on the hosting setup and project repository name.
export const pathPrefix = '/gatsby-starter-amazee';

export const plugins = [
  'gatsby-plugin-postcss',
  'gatsby-plugin-tsconfig-paths',
  // TODO: Update the data source configuration's typeName and fieldName.
  {
    resolve: 'gatsby-source-graphql',
    options: {
      typeName: 'swapi',
      fieldName: 'swapi',
      url: process.env.GATSBY_GRAPHQL_BUILD_ENDPOINT,
    },
  },
  {
    resolve: 'gatsby-plugin-apollo',
    options: {
      uri: process.env.GATSBY_GRAPHQL_LIVE_ENDPOINT,
    },
  },
  {
    resolve: 'gatsby-i18n-create-page',
    options: {
      defaultLanguage,
      languageCodes,
      localizePath,
      prefixDefaultLanguagePages: false,
    },
  },
];
