import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://watanabe3tipapa.github.io',
	base: '/watanabe3tipapa',
	integrations: [mdx(), sitemap()],
});
