import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

/** @type {import('vitest').UserConfig} */
const config = defineConfig({
	plugins: [
		svelte({ hot: !process.env.VITEST })
	],
	test: {
		globals: true,
		environment: 'jsdom', // happy-dom
		coverage: {
			provider: 'c8',
			statements: 90,
			branches: 90,
			functions: 90,
			lines: 90,
		},
		deps: {
			inline: [/outdent/]
		},
		includeSource: [
			'**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
			'**/{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
		],
	}
})

export default config
// TODO: codecept.js??
/* @links:
 * https://gbg.pages.dev/posts/mdsvex-unit-testing
 * https://github.com/davipon/svelte-component-test-recipes/blob/main/vite.config.ts
 * https://github.com/frontendista/frontendista.cz/blob/main/apps/frontend-astro/vitest.config.ts
 * https://github.com/yuukoyoung/yuuko-design/tree/main/packages/utils
 * https://github.com/superhelten/ssr-html
 */
