import { defineConfig } from 'astro/config';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  site: 'https://example.com',
  integrations: [sitemap()]
});