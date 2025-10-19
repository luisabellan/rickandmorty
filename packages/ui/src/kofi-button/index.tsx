'use client';

import React from 'react';
import { DONATION_CONFIG } from '@rickandmorty/config/donation';

interface KofiButtonProps {
  text?: string;
  color?: string;
  hideDonateText?: boolean;
}

export const KofiButton: React.FC<KofiButtonProps> = ({ 
  text = 'Support on Ko-fi', 
  color = '#29abe0',
  hideDonateText = false
}) => {
  if (!DONATION_CONFIG.kofi.enabled) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-600 italic">
          Donations are currently disabled to maintain compliance with unemployment benefit regulations.
        </p>
      </div>
    );
  }

  return (
    <div className="kofi-button-container">
      <a 
        href={`https://ko-fi.com/${DONATION_CONFIG.kofi.username}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block"
      >
        <img 
          height="36" 
          style={{ border: '0px', height: '36px' }} 
          src="https://storage.ko-fi.com/cdn/kofi3.png?v=3" 
          alt={text}
          title={text}
        />
      </a>
    </div>
  );
};