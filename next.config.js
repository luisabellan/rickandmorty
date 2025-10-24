/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@pandacss/dev']
  },
  images: {
    domains: ['rickandmortyapi.com'],
    formats: ['image/webp', 'image/avif']
  },
  // Enable React 19 concurrent features
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
}

module.exports = nextConfig