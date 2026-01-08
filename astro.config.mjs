import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

import partytown from '@astrojs/partytown';

export default defineConfig({
    vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      PUBLIC_TRACKING_ID: envField.string({ context: 'client', access: 'public' }),
    }
  },
  site: 'https://Flare-Africa-Community.github.io',
  integrations: [mdx(), sitemap(), partytown({
    config:{
      forward: ['dataLayer.push'],
    }
  })],
});