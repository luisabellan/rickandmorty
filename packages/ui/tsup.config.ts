import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/character-card/index.tsx',
    'src/character-list/index.tsx', 
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
  dts: false, // Temporarily disable DTS build to focus on main builds
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'next', '@rickandmorty/utils', '@rickandmorty/config'],
  noExternal: ['@radix-ui/react-slot', 'class-variance-authority'],
  treeshake: true,
  splitting: false,
  minify: false,
  target: 'es2020',
  outDir: 'dist'
})