import React, { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

/**
 * This component is used by gatsby-browser.ts and gatsby-ssr.ts to add an
 * Apollo Provider to the app.
 */
export const wrapRootElement: React.FC<{ element: ReactNode }> = ({
  element,
}) => {
  // TODO: Remove or replace the Apollo client information.
  // The Apollo client and wrapping provider are necessary for loading dynamic
  // data in the browser. If the site is completely static the wrapping provider
  // can be removed.
  // https://www.gatsbyjs.org/docs/client-data-fetching/
  const client = new ApolloClient({
    uri: process.env.GATSBY_GRAPHQL_LIVE_ENDPOINT,
    fetch,
  });

  return <ApolloProvider client={client}>{element}</ApolloProvider>;
};
