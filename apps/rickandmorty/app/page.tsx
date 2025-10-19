import { Metadata } from 'next'
import { WelcomePage } from '@rickandmorty/ui/welcome-page'

export const metadata: Metadata = {
  title: 'Welcome to the Ultimate Rick & Morty Fan Site',
  description: 'Welcome to the ultimate destination for Rick and Morty fans. Explore characters, episodes, and dive deep into the multiverse.',
  openGraph: {
    title: 'Welcome to the Ultimate Rick & Morty Fan Site',
    description: 'Welcome to the ultimate destination for Rick and Morty fans. Explore characters, episodes, and dive deep into the multiverse.',
  },
}

export default function HomePage() {
  return <WelcomePage />
}