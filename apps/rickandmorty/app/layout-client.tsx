'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ApolloWrapper } from './apollo-provider';

// Dynamically import Navigation with SSR disabled
const Navigation = dynamic(() => import('@rickandmorty/ui').then(mod => ({ default: mod.Navigation })), {
  ssr: false,
  loading: () => <div>Loading navigation...</div>
});

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <ApolloWrapper>
      <>
        <Navigation />
        <main>
          {children}
        </main>
      </>
    </ApolloWrapper>
  );
}