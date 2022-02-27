import { resolve } from 'path';
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.tsx'),
      formats: ['es']
    },
    target: 'esnext',
    minify: false
  },
})
