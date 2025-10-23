interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: {
    name: string;
    type: string;
    dimension: string;
  } | null;
  location?: {
    name: string;
    type: string;
    dimension: string;
  } | null;
  image: string;
  episode: {
    id: number;
    name: string;
    air_date: string;
    episode: string;
  }[];
  created: string;
}

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const statusColor = {
    'Alive': 'text-green-400',
    'Dead': 'text-red-400',
    'unknown': 'text-gray-400',
  }[character.status] || 'text-gray-400';

  return (
    <div className="bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="relative h-64 w-full">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full ${statusColor} bg-black bg-opacity-70 font-semibold text-sm`}>
          {character.status}
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-white mb-3 truncate">{character.name}</h3>

        <div className="space-y-1 text-sm">
          <p className="text-gray-300">
            <span className="text-gray-400">Species:</span>{' '}
            <span className="text-white font-medium">{character.species}</span>
          </p>

          <p className="text-gray-300">
            <span className="text-gray-400">Gender:</span>{' '}
            <span className="text-white font-medium">{character.gender}</span>
          </p>

          <p className="text-gray-300">
            <span className="text-gray-400">Location:</span>{' '}
            <span className="text-white font-medium truncate block">
              {character.location?.name || 'Unknown'}
            </span>
          </p>

          {character.type && character.type.trim() !== '' && (
            <p className="text-gray-300">
              <span className="text-gray-400">Type:</span>{' '}
              <span className="text-white font-medium">{character.type}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}