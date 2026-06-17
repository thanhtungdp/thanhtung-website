// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://thanhtung-website.vercel.app',
	integrations: [mdx(), react(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
		server: {
			allowedHosts: true,
		},
	},
	i18n: {
		locales: ['vi', 'en'],
		defaultLocale: 'vi',
	},
});
