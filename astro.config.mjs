// @ts-check

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  site: 'https://mrivaslezama.github.io',
  integrations: [mdx(), sitemap(),],
  plugins: [tailwindcss()],
  base: '/postreshelados',
  output:'server',
  adapter: vercel(),
  build: {
    rollupOptions: {
      external: ['bootstrap/js/dist/collapse.js'],
    },
  },
});