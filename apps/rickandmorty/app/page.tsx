import { Metadata } from 'next'
import { RickAndMortyLanding } from '@rickandmorty/ui/rickandmorty-landing'

export const metadata: Metadata = {
  title: 'Rick and Morty Universe - Fan Site',
  description: 'Explore the multiverse of Rick and Morty! Browse characters, locations, and episodes from the beloved animated series. Get schwifty with the ultimate Rick and Morty fan site.',
  openGraph: {
    title: 'Rick and Morty Universe - Fan Site',
    description: 'Explore the multiverse of Rick and Morty! Browse characters, locations, and episodes from the beloved animated series.',
  },
}

export default function LandingPage() {
  return <RickAndMortyLanding />
}