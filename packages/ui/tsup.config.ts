import { defineConfig } from 'tsup'
import { execSync } from 'child_process'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/character-card/index.tsx',
    'src/character-list/index.tsx',
    'src/character-search/index.tsx',
    'src/navigation/index.tsx',
    'src/welcome-page/index.tsx',
    'src/loading-spinner/index.tsx',
    'src/button/index.tsx',
    'src/card/index.tsx',
    'src/donation-page/index.tsx',
    'src/donation-counter/index.tsx',
    'src/financial-report/index.tsx',
    'src/kofi-button/index.tsx',
    'src/rickandmorty-landing/index.tsx'
  ],
  format: ['cjs', 'esm'],
  dts: false, // Disable automatic DTS generation
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'next', '@rickandmorty/utils', '@rickandmorty/config'],
  noExternal: ['@radix-ui/react-slot', 'class-variance-authority'],
  treeshake: true,
  splitting: false,
  minify: false,
  target: 'es2020',
  outDir: 'dist',
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    }
  },
  onSuccess: async () => {
    execSync('node scripts/add-use-client.js', { stdio: 'inherit' })
    // Try to generate DTS files manually after the main build
    try {
      execSync('npx tsc --project tsconfig.dts.json', { stdio: 'inherit' })
    } catch (error) {
      console.warn('Warning: Failed to generate DTS files:', error.message)
      console.warn('Continuing with JavaScript bundles only...')
    }
  }
})