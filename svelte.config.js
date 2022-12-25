// -- svelte preprocesses/adapters --
import staticAdapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import sveltePreprocess from 'svelte-preprocess'
// -- Configuration --
// import cspDirectives from './config/_csp-policy.js'
import mdsvexConfig from './config/mdsvex.config.js'

const prependScssFiles = [
	'@use "src/styles/tokens.scss" as *;',
	'@use "src/styles/func.scss" as *;',
	'@use "src/styles/mixins" as *;',
].join(' ')

// options passed to svelte.preprocess
// https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md
const preprocessSVX = [
	mdsvex(mdsvexConfig),
	sveltePreprocess({
		scss: {
			includePaths: ['src'],
			prependData: prependScssFiles,
			renderSync: true,
			outputStyle: 'compressed',
		},
		postcss: {
			configFilePath: './postcss.config.cjs',
		},
		// preserve: ['ld+json'],
	}),
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
}

export default config
