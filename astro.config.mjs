import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://github-papa.watanabe3ti.com',
	base: '/watanabe3tipapa',
	integrations: [mdx(), sitemap()],
});
