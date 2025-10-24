/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@pandacss/dev']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        pathname: '/api/character/avatar/**',
      }
    ],
    formats: ['image/webp', 'image/avif']
  },
  // Enable React 19 concurrent features
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  // Transpile packages from workspace
  transpilePackages: ['@rickandmorty/ui', '@rickandmorty/utils'],
  // PWA support for offline functionality
  ...(process.env.NODE_ENV === 'production' && {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin',
            },
          ],
        },
      ]
    },
  }),
}

module.exports = nextConfig