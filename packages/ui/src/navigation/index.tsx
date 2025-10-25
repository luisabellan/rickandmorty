'use client';
import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="navigation sticky top-0 z-50 shadow-lg" style={{
      background: 'linear-gradient(135deg, #00b8d4 0%, #0088cc 50%, #005f99 100%)',
    }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-green-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white rounded-lg p-2">
                <span className="text-2xl">🛸</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                Rick & Morty
              </h1>
              <p className="text-green-300 text-xs font-medium">Universe Explorer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive('/')
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-white hover:bg-white/10 hover:shadow-md'
              }`}
            >
              🏠 Home
            </Link>
            <Link
              href="/characters"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive('/characters')
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-white hover:bg-white/10 hover:shadow-md'
              }`}
            >
              👥 Characters
            </Link>

            {/* Future links - uncomment when ready */}
            {/* <Link
              href="/locations"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive('/locations')
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-white hover:bg-white/10 hover:shadow-md'
              }`}
            >
              🌍 Locations
            </Link>
            <Link
              href="/episodes"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive('/episodes')
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-white hover:bg-white/10 hover:shadow-md'
              }`}
            >
              📺 Episodes
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pb-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                isActive('/')
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-white bg-white/10 hover:bg-white/20'
              }`}
            >
              🏠 Home
            </Link>
            <Link
              href="/characters"
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                isActive('/characters')
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-white bg-white/10 hover:bg-white/20'
              }`}
            >
              👥 Characters
            </Link>

            {/* Future mobile links - uncomment when ready */}
            {/* <Link
              href="/locations"
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                isActive('/locations')
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-white bg-white/10 hover:bg-white/20'
              }`}
            >
              🌍 Locations
            </Link>
            <Link
              href="/episodes"
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                isActive('/episodes')
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-white bg-white/10 hover:bg-white/20'
              }`}
            >
              📺 Episodes
            </Link> */}
          </div>
        </div>
      </div>

      {/* Portal animation background effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>
    </nav>
  );
}