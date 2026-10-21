import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
export default defineConfig({
  site: 'https://mktcenter.com.br', // domínio oficial: canonical, sitemap e Open Graph
  trailingSlash: 'always',
  integrations: [react(), sitemap({ filter: (p) => !p.includes('/teste-') && !p.includes('/termos/') && !p.includes('/404') })],
  build: { inlineStylesheets: 'always' },
});
