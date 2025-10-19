// Donation configuration
export const DONATION_CONFIG = {
  kofi: {
    username: process.env.NEXT_PUBLIC_KOFI_USERNAME || 'your-kofi-username',
    enabled: process.env.NEXT_PUBLIC_KOFI_ENABLED === 'true' || false, // Default to false for compliance
  },
  // Other donation settings can be added here
};