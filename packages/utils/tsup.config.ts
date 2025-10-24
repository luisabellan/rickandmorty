import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/hooks/index.ts',
    'src/api/index.ts',
    'src/types/index.ts'
  ],
  format: ['cjs', 'esm'],
  dts: {
    compilerOptions: {
      incremental: false
    }
  },
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  minify: false,
  target: 'es2020',
  outDir: 'dist'
})