'use client';

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { useMemo } from 'react';

function createApolloClient() {
  const httpLink = createHttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
    // Important: Set credentials to include if you need to send cookies
    credentials: 'same-origin',
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    ssrMode: false, // Set to true if using SSR
    ssrForceFetchDelay: 100,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  const client = useMemo(() => createApolloClient(), []);
  
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}