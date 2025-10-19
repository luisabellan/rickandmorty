import { Metadata } from 'next'
import { FinancialReportContent } from '@rickandmorty/ui/financial-report'

export const metadata: Metadata = {
  title: 'Financial Transparency Report - Rick & Morty Fan Site',
  description: 'Transparent financial reporting for the Rick and Morty Fan Site. Showing how donations are used to cover hosting and domain expenses.',
  openGraph: {
    title: 'Financial Transparency Report - Rick & Morty Fan Site',
    description: 'Transparent financial reporting for the Rick and Morty Fan Site. Showing how donations are used to cover hosting and domain expenses.',
  },
}

export default function FinancialReportPage() {
  return <FinancialReportContent />
}