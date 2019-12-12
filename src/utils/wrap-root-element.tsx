import React, { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const wrapRootElement = ({ element}: {
  element: ReactNode
}) => {

  // TODO: Remove or replace the Apollo client information.
  // The Apollo client and wrapping provider are necessary for loading dynamic
  // data in the browser. If the site is completely static the wrapping provider
  // can be removed.
  // https://www.gatsbyjs.org/docs/client-data-fetching/
  const client = new ApolloClient({
    uri: process.env.GATSBY_SWAPI_ENDPOINT,
    fetch,
  });

  return (
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  );
};
