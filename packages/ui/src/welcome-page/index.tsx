import { KofiButton } from '../kofi-button';

export function WelcomePage() {
  return (
    <div className="welcome-page max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome to the Ultimate Rick & Morty Fan Site</h1>
      <p className="text-lg text-center mb-6">Explore characters, episodes, and dive deep into the multiverse.</p>
      
      <div className="flex justify-center mb-6">
        <a href="/characters" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded">
          Browse Characters
        </a>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-2">Support This Fan Project</h2>
        <p className="mb-4">
          This site is maintained to remain compatible with Spanish unemployment benefits regulations. 
          Donations help cover hosting and domain expenses only.
        </p>
        <KofiButton />
      </div>
      
      <div className="mt-8 text-sm text-center text-gray-600">
        <p className="mb-2">
          <strong>Disclaimer:</strong> This site is an unofficial fan site and is not endorsed by, 
          sponsored by, or affiliated with Adult Swim, Williams Street, or any other copyright holders of Rick and Morty.
        </p>
        <p>
          All character names, images, and related materials are the property of their respective copyright holders.
        </p>
      </div>
    </div>
  );
}