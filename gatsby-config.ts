/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

import { config as dotenvConfig } from 'dotenv';
import { languageCodes, defaultLanguage, localizePath } from './src/utils/i18n';
import { GatsbyConfig } from 'gatsby';

dotenvConfig({ path: `.env.example` });
dotenvConfig({ path: `.env` });

// Read in additional environment variables based on the `CURRENT_APP_ENV`
// environment variable.
dotenvConfig({
  path: `.environments/${process.env.CURRENT_APP_ENV || 'local'}.env`,
});

export const pathPrefix = process.env.PATH_PREFIX;

export const plugins: GatsbyConfig['plugins'] = [
  'gatsby-plugin-postcss',
  'gatsby-plugin-tsconfig-paths',
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

if (process.env.GRAPHQL_BUILD_API) {
  plugins.push({
    resolve: 'gatsby-source-graphql',
    options: {
      typeName: 'api',
      fieldName: 'api',
      url: process.env.GRAPHQL_BUILD_API,
    },
  });
}
