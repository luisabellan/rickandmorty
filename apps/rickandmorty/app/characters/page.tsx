import { Metadata } from 'next'
import { Suspense } from 'react'
import { LoadingSpinner } from '@rickandmorty/ui/loading-spinner'
import { CharacterListWrapper } from './character-list-wrapper'

export const metadata: Metadata = {
  title: 'Rick & Morty Characters',
  description: 'Browse all characters from the Rick and Morty universe. Search and filter through hundreds of characters from across the multiverse.',
  keywords: ['Rick Sanchez', 'Morty Smith', 'Summer Smith', 'Beth Smith', 'Jerry Smith', 'characters'],
  openGraph: {
    title: 'Rick & Morty Characters',
    description: 'Browse all characters from the Rick and Morty universe. Search and filter through hundreds of characters from across the multiverse.',
  },
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    type: string;
    dimension: string;
  };
  location: {
    name: string;
    type: string;
    dimension: string;
  };
  image: string;
  episode: {
    id: number;
    name: string;
    air_date: string;
    episode: string;
  }[];
  created: string;
}

interface CharactersData {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number | null;
      prev: number | null;
    };
    results: Character[];
  };
}

interface CharactersPageProps {
  searchParams: Promise<{
    page?: string
    search?: string
    status?: string
    species?: string
    gender?: string
    location?: string
    origin?: string
  }>
}

async function fetchCharacters(searchParams: {
  page?: string
  search?: string
  status?: string
  species?: string
  gender?: string
  location?: string
  origin?: string
}) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/graphql';

  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  
  // Build the variables object conditionally to avoid sending null/undefined values that might cause errors
  const variables: Record<string, any> = { page: currentPage };
  
  if (searchParams.search && searchParams.search.trim() !== '') {
    variables.name = searchParams.search;
  }
  if (searchParams.status && searchParams.status.trim() !== '') {
    variables.status = searchParams.status;
  }
  if (searchParams.species && searchParams.species.trim() !== '') {
    variables.species = searchParams.species;
  }
  if (searchParams.gender && searchParams.gender.trim() !== '') {
    variables.gender = searchParams.gender;
  }
  if (searchParams.location && searchParams.location.trim() !== '') {
    variables.location = searchParams.location;
  }
  if (searchParams.origin && searchParams.origin.trim() !== '') {
    variables.origin = searchParams.origin;
  }

  const query = `
    query GetCharacters($page: Int, $name: String, $status: String, $species: String, $gender: String, $location: String, $origin: String) {
      characters(page: $page, filter: { name: $name, status: $status, species: $species, gender: $gender, location: $location, origin: $origin }) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          status
          species
          type
          gender
          origin {
            name
            type
            dimension
          }
          location {
            name
            type
            dimension
          }
          image
          episode {
            id
            name
            air_date
            episode
          }
          created
        }
      }
    }
  `;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.errors) {
      console.error('GraphQL errors:', JSON.stringify(result.errors, null, 2));
      throw new Error(`GraphQL errors occurred: ${result.errors.map((e: any) => e.message).join(', ')}`);
    }

    return result.data as CharactersData;
  } catch (error) {
    console.error('Failed to fetch characters:', error);
    throw new Error(
      `Unable to connect to the API server at ${apiUrl}. ` +
      'Please ensure the API server is running on port 4000. ' +
      'Run: cd apps/api && pnpm dev'
    );
  }
}

export default async function CharactersPage({ searchParams }: CharactersPageProps) {
  const resolvedSearchParams = await searchParams;
  const data = await fetchCharacters(resolvedSearchParams);
  
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
      <CharacterListWrapper data={data} searchParams={resolvedSearchParams} />
    </Suspense>
  )
}