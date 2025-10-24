'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../card';

interface FinancialReportProps {
  // Props for the financial report component
}

export const FinancialReportContent: React.FC<FinancialReportProps> = () => {
  // These would be populated from a real data source in production
  const reportData = {
    period: 'January 2025',
    totalDonations: 85.50,
    hostingCosts: 5.00,
    domainCosts: 1.25, // Pro-rated monthly cost
    sslCosts: 0.00,
    otherCosts: 2.50, // Other operational costs
    remainingFunds: 76.75,
    totalExpenses: 8.75,
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Financial Transparency Report</CardTitle>
          <CardDescription>
            Transparent reporting of donations and expenses for the Rick and Morty Fan Site
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4">Purpose of Financial Transparency</h3>
              <p className="mb-4">
                As required for compatibility with Spanish unemployment benefits (prestación contributiva de desempleo), 
                we maintain complete financial transparency. This report shows how donations are used exclusively 
                for hosting and domain expenses, with no personal profit made from this project.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Financial Summary - {reportData.period}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-semibold text-green-800">Total Donations Received</h4>
                  <p className="text-2xl font-bold text-green-700">€{reportData.totalDonations.toFixed(2)}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-md">
                  <h4 className="font-semibold text-red-800">Total Expenses</h4>
                  <p className="text-2xl font-bold text-red-700">€{reportData.totalExpenses.toFixed(2)}</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Expense Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span>Hosting Costs</span>
                  <span>€{reportData.hostingCosts.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Domain Registration (monthly)</span>
                  <span>€{reportData.domainCosts.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>SSL Certificates</span>
                  <span>€{reportData.sslCosts.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Other Operational Costs</span>
                  <span>€{reportData.otherCosts.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2">
                  <span>Total Expenses</span>
                  <span>€{reportData.totalExpenses.toFixed(2)}</span>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Funds Status</h3>
              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-semibold text-blue-800">Remaining Funds for Future Expenses</h4>
                <p className="text-2xl font-bold text-blue-700">€{reportData.remainingFunds.toFixed(2)}</p>
                <p className="mt-2 text-sm">
                  Remaining funds are reserved for future hosting expenses or will be donated to charity if no longer needed.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Compliance Statement</h3>
              <p className="mb-2">
                This project operates without profit motive (no ánimo de lucro) and takes measures to prevent 
                habitual income patterns (habitualidad de ingresos), as required for compatibility with 
                Spanish unemployment benefits regulations.
              </p>
              <p>
                All financial data is available for verification to ensure continued compliance with 
                unemployment benefit requirements.
              </p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};