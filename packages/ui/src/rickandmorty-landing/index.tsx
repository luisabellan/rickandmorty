'use client';

import { useState } from 'react';
import { Button } from '../button';
import { KofiButton } from '../kofi-button';

export function RickAndMortyLanding() {
  const [isSchwifty, setIsSchwifty] = useState(false);

  const handleSchwiftyClick = () => {
    setIsSchwifty(true);
    setTimeout(() => setIsSchwifty(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isSchwifty ? 'animate-bounce' : ''}`}>
            RICK AND MORTY
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore the infinite multiverse of the beloved animated series. 
            Discover characters, episodes, and dive deep into the adventures of the genius but alcoholic scientist Rick Sanchez and his good-hearted but fretful grandson Morty.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button 
              onClick={handleSchwiftyClick}
              variant="primary" 
              className="bg-green-600 hover:bg-green-700 text-lg py-3 px-8"
            >
              {isSchwifty ? 'SCHWIFTY!' : 'Get Schwifty'}
            </Button>
            <Button 
              variant="secondary" 
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-lg py-3 px-8"
            >
              <a href="/characters">Explore Characters</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore the Multiverse</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Characters</h3>
              <p className="mb-4">
                Meet the diverse cast of characters from across the multiverse, 
                including the Smith family, Citadel dwellers, and countless alien species.
              </p>
              <Button variant="secondary" asChild>
                <a href="/characters">Browse Characters</a>
              </Button>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Episodes</h3>
              <p className="mb-4">
                Explore episode guides with summaries, trivia, and connections 
                to the broader Rick and Morty universe.
              </p>
              <Button variant="secondary" disabled>
                Coming Soon
              </Button>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Locations</h3>
              <p className="mb-4">
                Discover the vast array of locations across the multiverse, 
                from the Citadel of Ricks to the Plumbus dimension.
              </p>
              <Button variant="secondary" disabled>
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-800 bg-opacity-30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About This Fan Project</h2>
          <p className="text-lg mb-6">
            This site is an unofficial fan project created to celebrate the Rick and Morty universe. 
            All content remains the property of their respective copyright holders.
          </p>
          
          <div className="mt-8 p-6 bg-gray-900 rounded-lg inline-block">
            <h3 className="text-xl font-semibold mb-4">Support This Project</h3>
            <p className="mb-4">
              This site is maintained to remain compatible with Spanish unemployment benefits regulations. 
              Donations help cover hosting and domain expenses only.
            </p>
            <KofiButton />
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Fun Facts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">Infinite Multiverse</h3>
              <p>There are infinite timelines and realities in the Rick and Morty universe, each with its own version of characters.</p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-400 mb-2">Plumbus</h3>
              <p>A Plumbus is a multi-use tool that's soft, yet firm, and must be used in a specific sequence.</p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">C-137</h3>
              <p>Rick C-137 is from dimension C-137, which was destroyed by a Cronenberg invasion.</p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Get Schwifty</h3>
              <p>The song "Get Schwifty" won an Emmy for Outstanding Original Music and Lyrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="py-8 px-4 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-400">
          <p className="mb-2">
            <strong>Disclaimer:</strong> This site is an unofficial fan site and is not endorsed by, 
            sponsored by, or affiliated with Adult Swim, Williams Street, or any other copyright holders of Rick and Morty.
          </p>
          <p>
            All character names, images, and related materials are the property of their respective copyright holders.
          </p>
        </div>
      </footer>
    </div>
  );
}