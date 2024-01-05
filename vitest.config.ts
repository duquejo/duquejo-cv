// vitest.config.ts
/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'url';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['v-icon'].includes(tag),
      }
    }
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [
      ...configDefaults.exclude,
      '**/postcss.config.js',
      '**/tailwind.config.js',
      '**/*.d.ts',
    ],
    coverage: {
      exclude: [
        '**/main.ts',
        '**/assets/**',
        'postcss.config.js',
        'tailwind.config.js',
        '**/*.d.ts',
        '**/interfaces/*.ts',
        '**/config.ts',
      ]
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },
})