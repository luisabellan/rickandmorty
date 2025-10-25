'use client';

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';
import { ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs';
import { createHttpLink } from '@apollo/client';
import React from 'react';

let apolloClient: ApolloClient<any> | undefined;

function createApolloClient() {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'https://rickandmorty-api-csmq.onrender.com/graphql',
    credentials: 'same-origin',
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

function makeClient() {
  // Create a new ApolloClient for each request in SSR
  if (!apolloClient) {
    apolloClient = createApolloClient();
  }
  return apolloClient;
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}