'use client';

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';
import { createHttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs';
import React from 'react';

function makeClient() {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'https://rickandmortyapi.com/graphql',
    credentials: 'same-origin',
  });

  return new ApolloClient({
    cache: new InMemoryCache().restore({}),
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