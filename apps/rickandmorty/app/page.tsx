import { Metadata } from 'next'
import { Suspense } from 'react'
import { LoadingSpinner } from '@rickandmorty/ui/loading-spinner'
import { RickAndMortyLandingWrapper } from './rickandmorty-landing-wrapper'

export const metadata: Metadata = {
  title: 'Rick and Morty Universe - Fan Site',
  description: 'Explore the multiverse of Rick and Morty! Browse characters, locations, and episodes from the beloved animated series. Get schwifty with the ultimate Rick and Morty fan site.',
  openGraph: {
    title: 'Rick and Morty Universe - Fan Site',
    description: 'Explore the multiverse of Rick and Morty! Browse characters, locations, and episodes from the beloved animated series.',
  },
}

export default function LandingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
      <RickAndMortyLandingWrapper />
    </Suspense>
  )
}