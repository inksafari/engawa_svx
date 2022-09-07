// -- svelte preprocesses/adapters --
//import sequential from 'svelte-sequential-preprocessor'
import { typescript } from 'svelte-preprocess-esbuild'
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess.js'
import { mdsvex } from 'mdsvex'
import staticAdapter from '@sveltejs/adapter-static'
// -- Configuration --
// import tsConfigFile from './config/tsconfig.dev.json'
import mdsvexConfig from './config/mdsvex.config.js'

const prependScssFiles = [
	'@use "src/styles/func.scss" as *;',
	'@use "src/styles/tokens.scss" as *;'
].join(' ')

// options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
const preprocessSVX = [
	typescript(), //typescript({ tsconfig: tsConfigFile }),
	sveltePreprocess({
		typescript: false,
		scss: {
			prependData: prependScssFiles,
			renderSync: true,
			outputStyle: 'compressed'
		},
		postcss: {
			configFilePath: './postcss.config.cjs'
		},
		preserve: ['ld+json']
	}),
	mdsvex(mdsvexConfig)
]

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: preprocessSVX, // sequential(preprocessSVX),
	compilerOptions: {
		immutable: true,
	},
	kit: {
		methodOverride: {
			allowed: ['POST', 'PUT', 'DELETE']
		},
		adapter: staticAdapter({
			fallback: null, // 'index.html',
			precompress: false
		}),
		browser: {
			router: true,
			hydrate: true
		},
		prerender: { default: true },
		inlineStyleThreshold: 1024 * 1024,
		csp: {
			mode: 'auto',
			directives: {
				'script-src': ['self']
			}
		},
		serviceWorker: {
			register: false,
		}
	}
}

export default config
