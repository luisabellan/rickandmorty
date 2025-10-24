'use client';

import { useState } from 'react';

interface CharacterSearchProps {
  initialSearch?: string;
  initialStatus?: string;
  initialSpecies?: string;
  initialGender?: string;
  initialLocation?: string;
  initialOrigin?: string;
}

export function CharacterSearch({
  initialSearch = '',
  initialStatus = '',
  initialSpecies = '',
  initialGender = '',
  initialLocation = '',
  initialOrigin = '',
}: CharacterSearchProps) {
  const [search, setSearch] = useState(initialSearch);
  const [status, setStatus] = useState(initialStatus);
  const [species, setSpecies] = useState(initialSpecies);
  const [gender, setGender] = useState(initialGender);
  const [location, setLocation] = useState(initialLocation);
  const [origin, setOrigin] = useState(initialOrigin);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (status) params.set('status', status);
    if (species) params.set('species', species);
    if (gender) params.set('gender', gender);
    if (location) params.set('location', location);
    if (origin) params.set('origin', origin);

    window.location.href = `/characters?${params.toString()}`;
  };

  const handleReset = () => {
    setSearch('');
    setStatus('');
    setSpecies('');
    setGender('');
    setLocation('');
    setOrigin('');
    window.location.href = '/characters';
  };

  return (
    <div className="bg-gray-800 bg-opacity-80 rounded-lg p-6 mb-8 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Search & Filter</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Search by name */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-2">
            Character Name
          </label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rick, Morty, Summer..."
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filters in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Status filter */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-300 mb-2">
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          {/* Species filter */}
          <div>
            <label htmlFor="species" className="block text-sm font-medium text-gray-300 mb-2">
              Species
            </label>
            <input
              type="text"
              id="species"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              placeholder="Human, Alien..."
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Gender filter */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-300 mb-2">
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          {/* Current Location filter */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
              Current Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Earth, Citadel..."
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Origin filter */}
          <div>
            <label htmlFor="origin" className="block text-sm font-medium text-gray-300 mb-2">
              Origin
            </label>
            <input
              type="text"
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Earth, Dimension..."
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            🔍 Search
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            ✕ Clear
          </button>
        </div>
      </form>

      {/* Active filters display */}
      {(search || status || species || gender || location || origin) && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-sm text-gray-400 mb-2">Active filters:</p>
          <div className="flex flex-wrap gap-2">
            {search && (
              <span className="px-3 py-1 bg-blue-600 bg-opacity-50 text-blue-200 rounded-full text-sm">
                Name: {search}
              </span>
            )}
            {status && (
              <span className="px-3 py-1 bg-green-600 bg-opacity-50 text-green-200 rounded-full text-sm">
                Status: {status}
              </span>
            )}
            {species && (
              <span className="px-3 py-1 bg-purple-600 bg-opacity-50 text-purple-200 rounded-full text-sm">
                Species: {species}
              </span>
            )}
            {gender && (
              <span className="px-3 py-1 bg-pink-600 bg-opacity-50 text-pink-200 rounded-full text-sm">
                Gender: {gender}
              </span>
            )}
            {location && (
              <span className="px-3 py-1 bg-yellow-600 bg-opacity-50 text-yellow-200 rounded-full text-sm">
                Current Location: {location}
              </span>
            )}
            {origin && (
              <span className="px-3 py-1 bg-orange-600 bg-opacity-50 text-orange-200 rounded-full text-sm">
                Origin: {origin}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
