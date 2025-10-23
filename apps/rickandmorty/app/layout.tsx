import type { Metadata } from 'next'
import { Inter, Poppins, Merienda } from 'next/font/google'
import { Navigation } from '@rickandmorty/ui/navigation'
import { ApolloWrapper } from './apollo-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '800', '900'],
  variable: '--font-poppins'
})
const merienda = Merienda({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merienda'
})

export const metadata: Metadata = {
  title: {
    default: 'Rick & Morty Universe - Fan Site',
    template: '%s | Rick & Morty Universe'
  },
  description: 'Explore the multiverse of Rick and Morty! Browse characters, locations, and episodes from the beloved animated series. Get schwifty with the ultimate Rick & Morty fan site.',
  keywords: ['Rick and Morty', 'characters', 'episodes', 'Adult Swim', 'animation', 'sci-fi', 'multiverse'],
  authors: [{ name: 'Rick & Morty Fan Site Team' }],
  creator: 'Rick & Morty Fan Site',
  publisher: 'Rick & Morty Fan Site',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Rick & Morty Universe - Fan Site',
    description: 'Explore the multiverse of Rick and Morty! Browse characters, locations, and episodes from the beloved animated series.',
    siteName: 'Rick & Morty Universe',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rick & Morty Universe Fan Site',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rick & Morty Universe - Fan Site',
    description: 'Explore the multiverse of Rick and Morty! Browse characters, locations, and episodes.',
    images: ['/og-image.png'],
    creator: '@rickandmorty',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${merienda.variable}`}>
      <body className={inter.className}>
        <ApolloWrapper>
          <Navigation />
          <main>
            {children}
          </main>
        </ApolloWrapper>
      </body>
    </html>
  )
}