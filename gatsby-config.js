/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({ path: `.env` });

// Read in additional environment variables based on the `CURRENT_APP_ENV`
// environment variable.
require('dotenv').config({
  path: `.environments/${process.env.CURRENT_APP_ENV || 'local'}.env`,
});

module.exports = {
  siteMetadata: {
    // TODO: Adjust the static site navigation or remove it entirely.
    navigation: [
      { path: '/', label: 'Home' },
      { path: '/films', label: 'Films' },
      {
        path: '/persons',
        label: 'Characters',
      },
    ],
  },
  plugins: [
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
  ],
};
