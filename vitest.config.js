import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		svelte({ hot: !process.env.VITEST })
	],
	test: {
		global: true,
		environment: 'jsdom'
	}
})
// TODO: codecept.js??
// @links:
// https://github.com/antfu/vitesse/tree/main/test
// https://github.com/elianiva/elianiva.my.id/blob/4208a0ba4f7e81f004b82d334a12f3e4d9fde77f/vitest.config.js
// https://gbg.pages.dev/posts/mdsvex-unit-testing
