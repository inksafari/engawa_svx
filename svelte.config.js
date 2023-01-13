// -- svelte preprocesses/adapters --
import staticAdapter from '@sveltejs/adapter-static'
// import sveltePreprocess from 'svelte-preprocess'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'
// -- Configuration --
// import cspDirectives from './config/_csp-policy.js'
import mdsvexConfig from './config/mdsvex.config.js'

// options passed to svelte.preprocess
// https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md
const preprocessSVX = [
	mdsvex(mdsvexConfig),
	vitePreprocess(),
	// or
	// sveltePreprocess({
	// scss: {
	// includePaths: ['src'],
	// prependData: prependScssFiles,
	// renderSync: true,
	// outputStyle: 'compressed',
	// },
	// postcss: {
	// configFilePath: './postcss.config.cjs',
	// },
	// preserve: ['ld+json'],
	// }),
]

/* https://kit.svelte.dev/docs/configuration */
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: preprocessSVX,
	// compilerOptions: {
	// immutable: true,
	// },
	kit: {
		adapter: staticAdapter({
			pages: 'build',
			assets: 'build',
			fallback: 'api/[slug].json',
			precompress: false,
		}),
		inlineStyleThreshold: 1024 * 1024,
		prerender: {
			handleMissingId: 'warn',
			// TODO: entries
			// https://github.com/pthorsson/thorsson.dev-2022/blob/main/svelte.config.js
		},
		// csp: { mode: 'auto' },
		// FIXME: cspDirectives需要重寫
		// csp: {
		// 	mode: 'hash',
		// 	directives: cspDirectives,
		// },
		// csrf: {
		// checkOrigin: true,
		// },
		serviceWorker: {
			register: false,
		},
	},
	onwarn(warning, defaultHandler) {
		if (warning.code === 'css-unused-selector') {
			return
		}

		defaultHandler(warning)
	},
}

export default config
