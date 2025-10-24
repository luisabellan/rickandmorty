'use client';

import React, { useState, useEffect } from 'react';

interface DonationCounterProps {
  targetAmount: number; // Target amount in euros
  currentAmount: number; // Current amount in euros
}

export const DonationCounter: React.FC<DonationCounterProps> = ({ 
  targetAmount = 75, // €6.25/month * 12 months = €75/year
  currentAmount = 0 
}) => {
  const [amount, setAmount] = useState<number>(currentAmount);
  const percentage = Math.min(100, (amount / targetAmount) * 100);

  // Simulate receiving donations (in a real app, this would come from an API)
  useEffect(() => {
    // This would be replaced with real API calls in production
    const interval = setInterval(() => {
      // Random small donation to simulate activity (0 to 0.50€)
      const randomDonation = Math.random() * 0.5;
      setAmount(prev => Math.min(targetAmount, prev + randomDonation));
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, [targetAmount]);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-center">Annual Hosting & Domain Fund</h3>
      
      <div className="mb-2 flex justify-between">
        <span className="text-sm font-medium">Progress: €{amount.toFixed(2)} / €{targetAmount.toFixed(2)}</span>
        <span className="text-sm font-medium">{percentage.toFixed(0)}%</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div 
          className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-in-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        <p><strong>Monthly hosting:</strong> €5.00</p>
        <p><strong>Annual domain:</strong> €15.00</p>
        <p><strong>Total annual cost:</strong> €75.00</p>
      </div>
      
      <div className="text-xs text-gray-500">
        <p>All donations go directly toward hosting and domain expenses.</p>
        <p>This project operates without profit to maintain compliance with Spanish unemployment benefits regulations.</p>
      </div>
    </div>
  );
};