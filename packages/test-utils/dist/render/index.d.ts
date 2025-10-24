import { RenderOptions, render } from '@testing-library/react';
export * from '@testing-library/react';
import { ReactElement } from 'react';
export { default as userEvent } from '@testing-library/user-event';

/**
 * Custom render utilities for testing React components
 */

/**
 * Custom render function with common providers
 * Extend this as needed with providers (theme, router, etc.)
 */
declare function renderWithProviders(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): ReturnType<typeof render>;

export { renderWithProviders };
