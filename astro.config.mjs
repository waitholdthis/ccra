// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://waitholdthis.github.io',
  base: '/ccra',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
