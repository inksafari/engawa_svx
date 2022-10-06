// -- svelte preprocesses/adapters --
// import sequential from 'svelte-sequential-preprocessor'
import staticAdapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import { typescript } from 'svelte-preprocess-esbuild'
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess.js'
// -- Configuration --
// import tsConfigFile from './config/tsconfig.dev.json'
// import cspDirectives from './config/_csp-policy.js'
import mdsvexConfig from './config/mdsvex.config.js'

const prependScssFiles = [
	'@use "src/styles/func.scss" as *;',
	'@use "src/styles/tokens.scss" as *;',
].join(' ')

// options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
const preprocessSVX = [
	typescript(), // typescript({ tsconfig: tsConfigFile }),
	sveltePreprocess({
		typescript: false,
		scss: {
			prependData: prependScssFiles,
			renderSync: true,
			outputStyle: 'compressed',
		},
		postcss: {
			configFilePath: './postcss.config.cjs',
		},
		preserve: ['ld+json'],
	}),
	mdsvex(mdsvexConfig),
]

/* https://kit.svelte.dev/docs/configuration */
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: preprocessSVX, // sequential(preprocessSVX),
	compilerOptions: {
		immutable: true,
	},
	kit: {
		adapter: staticAdapter({
			pages: 'build',
			assets: 'build',
			fallback: 'api/[slug].json',
			precompress: false,
		}),
		inlineStyleThreshold: 1024 * 1024,
		// csp: {
		// 	mode: 'hash',
		// 	directives: cspDirectives,
		// },
		csrf: {
			checkOrigin: true,
		},
		serviceWorker: {
			register: false,
		},
	},
}

export default config
