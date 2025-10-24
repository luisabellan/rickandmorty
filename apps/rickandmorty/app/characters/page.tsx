import { Metadata } from 'next'
import { CharacterList } from '@rickandmorty/ui/character-list'
import { Suspense } from 'react'
import { LoadingSpinner } from '@rickandmorty/ui/loading-spinner'
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';

export const metadata: Metadata = {
  title: 'Rick & Morty Characters',
  description: 'Browse all characters from the Rick and Morty universe. Search and filter through hundreds of characters from across the multiverse.',
  keywords: ['Rick Sanchez', 'Morty Smith', 'Summer Smith', 'Beth Smith', 'Jerry Smith', 'characters'],
  openGraph: {
    title: 'Rick & Morty Characters',
    description: 'Browse all characters from the Rick and Morty universe. Search and filter through hundreds of characters from across the multiverse.',
  },
}

// GraphQL query
const GET_CHARACTERS = gql`
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

interface CharactersVars {
  page?: number;
  name?: string | null;
  status?: string | null;
  species?: string | null;
  gender?: string | null;
  location?: string | null;
  origin?: string | null;
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

  const client = new ApolloClient({
    link: new HttpLink({
      uri: apiUrl,
      fetch: fetch,
    }),
    cache: new InMemoryCache(),
    ssrMode: true,
  });

  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const name = searchParams.search || null;
  const status = searchParams.status || null;
  const species = searchParams.species || null;
  const gender = searchParams.gender || null;
  const location = searchParams.location || null;
  const origin = searchParams.origin || null;

  try {
    const { data } = await client.query<CharactersData, CharactersVars>({
      query: GET_CHARACTERS,
      variables: {
        page: currentPage,
        name,
        status,
        species,
        gender,
        location,
        origin
      }
    });

    return data;
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
    <div>
      <CharacterList data={data} searchParams={resolvedSearchParams} />
    </div>
  )
}