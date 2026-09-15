import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/rsschool-cv/' : '/',
  plugins: [tailwindcss()],

  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),

  build: {
    outDir: resolve(__dirname, '.'),
    emptyOutDir: false,
    minify: false,
    },
})
