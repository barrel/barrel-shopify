import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { resolve } from 'node:path'

export default defineConfig({
  server: {
    host: true,
    https: true,
    port: 3000
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '@@': resolve('resources/js'),
      '@modules': resolve('modules')
    }
  },
  plugins: [
    basicSsl(),
    shopify({
      snippetFile: 'vite-tag.liquid',
      additionalEntrypoints: [
        'frontend/foo.ts', // relative to sourceCodeDir
        'frontend/bar.ts',
        'resources/**/*.js', // relative to themeRoot
        'modules/**/*.ts'
      ]
    })
  ],
  build: {
    sourcemap: true
  }
})
