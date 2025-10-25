'use client';

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';
import { createHttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs';
import React from 'react';

function makeClient() {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'https://rickandmortyapi.com/graphql',
    // For SSR with external APIs, credentials should be set properly
    credentials: 'same-origin',
  });

  return new ApolloClient({
    // For SSR, it's important to initialize the cache without default data on the server
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}