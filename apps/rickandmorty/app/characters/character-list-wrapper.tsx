'use client';

import { CharacterList } from '@rickandmorty/ui/character-list';

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

interface CharacterListWrapperProps {
  data: CharactersData;
  searchParams: {
    page?: string;
    search?: string;
    status?: string;
    species?: string;
    gender?: string;
    location?: string;
    origin?: string;
  };
}

export function CharacterListWrapper({ data, searchParams }: CharacterListWrapperProps) {
  return <CharacterList data={data} searchParams={searchParams} />;
}