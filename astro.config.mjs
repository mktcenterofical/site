import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
export default defineConfig({
  site: 'https://mktcenter-site.vercel.app',
  trailingSlash: 'always',
  integrations: [react(), sitemap({ filter: (p) => !p.includes('/teste-') })],
  build: { inlineStylesheets: 'always' },
});
