/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    // TODO: Adjust the static site navigation or remove it entirely.
    navigation: [
      {path: '/', label: 'Home', description: 'Navigate to the home page'}
    ]
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    // TODO: Add static data sources and remove this example.
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'swapi',
        fieldName: 'swapi',
        url: 'https://swapi.graph.cool/',
      },
    },
  ].concat(process.env.NODE_ENV === 'development' ? [
    // TODO: Add mock servers for external data sources.
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'swapiMocked',
        fieldName: 'swapi',
        url: 'http://localhost:4000',
      },
    },
  ]: []),
};
