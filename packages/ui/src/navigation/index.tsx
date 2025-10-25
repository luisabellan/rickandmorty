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
    <nav className="navigation sticky top-0 z-50 backdrop-blur-md bg-opacity-95 shadow-xl border-b border-green-400/20" style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-green-400 rounded-full blur-md opacity-40 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-green-400 to-cyan-500 rounded-full p-2.5 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🛸</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 font-black text-2xl tracking-wider" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                RICK & MORTY
              </h1>
              <p className="text-green-300 text-xs font-semibold tracking-wide uppercase">Portal to the Multiverse</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className={`px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 transform hover:scale-105 ${
                isActive('/')
                  ? 'bg-gradient-to-r from-green-400 to-cyan-500 text-gray-900 shadow-lg shadow-green-500/50'
                  : 'text-gray-200 hover:text-white hover:bg-white/10 border border-transparent hover:border-green-400/30'
              }`}
            >
              <span className="mr-2">🏠</span>Home
            </Link>
            <Link
              href="/characters"
              className={`px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 transform hover:scale-105 ${
                isActive('/characters')
                  ? 'bg-gradient-to-r from-green-400 to-cyan-500 text-gray-900 shadow-lg shadow-green-500/50'
                  : 'text-gray-200 hover:text-white hover:bg-white/10 border border-transparent hover:border-green-400/30'
              }`}
            >
              <span className="mr-2">👥</span>Characters
            </Link>
            <Link
              href="/locations"
              className={`px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 transform hover:scale-105 ${
                isActive('/locations')
                  ? 'bg-gradient-to-r from-green-400 to-cyan-500 text-gray-900 shadow-lg shadow-green-500/50'
                  : 'text-gray-200 hover:text-white hover:bg-white/10 border border-transparent hover:border-green-400/30'
              }`}
            >
              <span className="mr-2">🌍</span>Locations
            </Link>
            <Link
              href="/episodes"
              className={`px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 transform hover:scale-105 ${
                isActive('/episodes')
                  ? 'bg-gradient-to-r from-green-400 to-cyan-500 text-gray-900 shadow-lg shadow-green-500/50'
                  : 'text-gray-200 hover:text-white hover:bg-white/10 border border-transparent hover:border-green-400/30'
              }`}
            >
              <span className="mr-2">📺</span>Episodes
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-green-400 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-green-400/30 hover:border-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400/50 transform hover:scale-110"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-3 pb-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`px-5 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
                isActive('/')
                  ? 'bg-gradient-to-r from-green-400 to-cyan-500 text-gray-900 shadow-lg shadow-green-500/30'
                  : 'text-gray-200 bg-white/5 hover:bg-white/10 border border-green-400/20 hover:border-green-400/50'
              }`}
            >
              <span className="mr-3">🏠</span>Home
            </Link>
            <Link
              href="/characters"
              onClick={() => setIsMenuOpen(false)}
              className={`px-5 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
                isActive('/characters')
                  ? 'bg-gradient-to-r from-green-400 to-cyan-500 text-gray-900 shadow-lg shadow-green-500/30'
                  : 'text-gray-200 bg-white/5 hover:bg-white/10 border border-green-400/20 hover:border-green-400/50'
              }`}
            >
              <span className="mr-3">👥</span>Characters
            </Link>
            <Link
              href="/locations"
              onClick={() => setIsMenuOpen(false)}
              className={`px-5 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
                isActive('/locations')
                  ? 'bg-gradient-to-r from-green-400 to-cyan-500 text-gray-900 shadow-lg shadow-green-500/30'
                  : 'text-gray-200 bg-white/5 hover:bg-white/10 border border-green-400/20 hover:border-green-400/50'
              }`}
            >
              <span className="mr-3">🌍</span>Locations
            </Link>
            <Link
              href="/episodes"
              onClick={() => setIsMenuOpen(false)}
              className={`px-5 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
                isActive('/episodes')
                  ? 'bg-gradient-to-r from-green-400 to-cyan-500 text-gray-900 shadow-lg shadow-green-500/30'
                  : 'text-gray-200 bg-white/5 hover:bg-white/10 border border-green-400/20 hover:border-green-400/50'
              }`}
            >
              <span className="mr-3">📺</span>Episodes
            </Link>
          </div>
        </div>
      </div>

      {/* Portal animation background effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </nav>
  );
}