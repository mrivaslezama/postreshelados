// @ts-check

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mrivaslezama.github.io',
  integrations: [mdx(), sitemap()],
  base: '/postreshelados',
  build: {
    rollupOptions: {
      external: ['bootstrap/js/dist/collapse.js'],
    },
  },
});