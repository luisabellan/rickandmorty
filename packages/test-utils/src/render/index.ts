/**
 * Custom render utilities for testing React components
 */

import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement } from 'react';

/**
 * Custom render function with common providers
 * Extend this as needed with providers (theme, router, etc.)
 */
export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): ReturnType<typeof render> {
  return render(ui, { ...options });
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
