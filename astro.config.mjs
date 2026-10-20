import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://mktcenter-site.vercel.app',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('/teste-') })],
  build: { inlineStylesheets: 'always' },
});
