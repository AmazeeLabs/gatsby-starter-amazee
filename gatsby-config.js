/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({ path: `.env` });

// Read in environment variables based on the current `PROJECT_ENV`.
require('dotenv').config({
  path: `.environments/${process.env.PROJECT_ENV || 'local'}.env`,
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
    // TODO: Add static data sources and remove this example.
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'swapi',
        fieldName: 'swapi',
        url: process.env.GATSBY_GRAPHQL_BUILD_ENDPOINT,
      },
    },
  ].concat(
    process.env.NODE_ENV === 'development'
      ? [
          // TODO: Add mock servers for external data sources.
          // This is a very bad example for a data source override. Find a better one.
          {
            resolve: 'gatsby-source-graphql',
            options: {
              typeName: 'swapiMocked',
              fieldName: 'swapi',
              url: process.env.GATSBY_GRAPHQL_LIVE_ENDPOINT,
            },
          },
        ]
      : []
  ),
};
