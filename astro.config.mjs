// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://data-max-hq.github.io',
  base: '/galaxy-website/',
  vite: {
    plugins: [tailwindcss()]
  }
});
