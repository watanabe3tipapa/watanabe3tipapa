import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://watanabe3tipapa.github.io',
  base: '/watanabe3tipapa',
  integrations: [sitemap()],
});
