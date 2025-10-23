import { CharacterCard } from '../character-card';
import { CharacterSearch } from '../character-search';

export interface Character {
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

export interface CharactersData {
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

interface CharacterListProps {
  data: CharactersData;
  searchParams: {
    page?: string;
    search?: string;
    status?: string;
    species?: string;
    gender?: string;
    location?: string;
  };
}

export function CharacterList({ data, searchParams }: CharacterListProps) {
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">No characters found</p>
      </div>
    );
  }

  const { results: characters, info } = data.characters;
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const name = searchParams.search || null;
  const status = searchParams.status || null;
  const species = searchParams.species || null;
  const gender = searchParams.gender || null;
  const location = searchParams.location || null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Rick and Morty Characters
        </h1>

        <CharacterSearch
          initialSearch={name || ''}
          initialStatus={status || ''}
          initialSpecies={species || ''}
          initialGender={gender || ''}
          initialLocation={location || ''}
        />

        <div className="mb-4">
          <p className="text-gray-300 text-center">
            Showing {characters.length} of {info.count} characters
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 py-8">
          {info.prev && (
            <a
              href={`?page=${info.prev}${name ? `&search=${name}` : ''}${status ? `&status=${status}` : ''}${species ? `&species=${species}` : ''}${gender ? `&gender=${gender}` : ''}${location ? `&location=${location}` : ''}`}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              ← Previous
            </a>
          )}

          <span className="text-white text-lg font-medium px-4">
            Page {currentPage} of {info.pages}
          </span>

          {info.next && (
            <a
              href={`?page=${info.next}${name ? `&search=${name}` : ''}${status ? `&status=${status}` : ''}${species ? `&species=${species}` : ''}${gender ? `&gender=${gender}` : ''}${location ? `&location=${location}` : ''}`}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Next →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}