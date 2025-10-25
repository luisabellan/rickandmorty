'use client';
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="navigation bg-gray-100 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            Home
          </Link>
          <Link href="/characters" className="text-blue-600 hover:text-blue-800 font-medium">
            Characters
          </Link>
        </div>
        {/* Temporarily hidden - Support Hosting and Financial Report */}
        {/* <div className="flex items-center space-x-6 mt-2 sm:mt-0">
          <Link href="/donations" className="text-green-600 hover:text-green-800 font-medium">
            Support Hosting
          </Link>
          <Link href="/financial-report" className="text-purple-600 hover:text-purple-800 font-medium">
            Financial Report
          </Link>
        </div> */}
      </div>
    </nav>
  );
}