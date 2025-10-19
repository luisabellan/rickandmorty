import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/character-card/index.tsx',
    'src/character-list/index.tsx', 
    'src/navigation/index.tsx',
    'src/welcome-page/index.tsx',
    'src/loading-spinner/index.tsx'
  ],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'next'],
  treeshake: true,
  splitting: false,
  minify: false,
  target: 'es2020',
  outDir: 'dist'
})