import { Metadata } from 'next'
import { CharacterList } from '@rickandmorty/ui/character-list'
import { Suspense } from 'react'
import { LoadingSpinner } from '@rickandmorty/ui/loading-spinner'

export const metadata: Metadata = {
  title: 'Rick & Morty Characters',
  description: 'Browse all characters from the Rick and Morty universe. Search and filter through hundreds of characters from across the multiverse.',
  keywords: ['Rick Sanchez', 'Morty Smith', 'Summer Smith', 'Beth Smith', 'Jerry Smith', 'characters'],
  openGraph: {
    title: 'Rick & Morty Characters',
    description: 'Browse all characters from the Rick and Morty universe. Search and filter through hundreds of characters from across the multiverse.',
  },
}

interface CharactersPageProps {
  searchParams: {
    page?: string
    search?: string
    status?: string
    species?: string
    gender?: string
  }
}

export default function CharactersPage({ searchParams }: CharactersPageProps) {
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <CharacterList searchParams={searchParams} />
      </Suspense>
    </div>
  )
}