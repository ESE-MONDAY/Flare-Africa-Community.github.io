import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://Flare-Africa-Community.github.io',
  integrations: [mdx(), sitemap()],
});