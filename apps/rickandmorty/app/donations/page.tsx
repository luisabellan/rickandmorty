import { Metadata } from 'next'
import { DonationPageContent } from '@rickandmorty/ui/donation-page'

export const metadata: Metadata = {
  title: 'Support Our Hosting Costs - Rick & Morty Fan Site',
  description: 'Help us cover hosting and domain expenses for the Rick and Morty Fan Site. All donations go directly toward keeping this non-profit fan resource online.',
  openGraph: {
    title: 'Support Our Hosting Costs - Rick & Morty Fan Site',
    description: 'Help us cover hosting and domain expenses for the Rick and Morty Fan Site. All donations go directly toward keeping this non-profit fan resource online.',
  },
}

export default function DonationPage() {
  return <DonationPageContent />
}