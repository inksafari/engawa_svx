// -- svelte preprocesses/adapters --
//import sequential from 'svelte-sequential-preprocessor'
//import { typescript } from 'svelte-preprocess-esbuild'
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import staticAdapter from '@sveltejs/adapter-static'
// -- Configuration --
import mdsvexConfig from './config/mdsvex.config.js'

const prependScssFiles = [
	'@use "src/styles/func.scss" as *;',
	'@use "src/styles/vars.scss" as *;'
].join(' ')

// options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
const preprocessSVX = [
	//typescript(),
	sveltePreprocess({
		typescript: true,
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
		//immutable: true,
	},
	kit: {
		adapter: staticAdapter({
			pages: 'build',
			fallback: 'index.html',
			precompress: true
		}),
		prerender: { entries: ['*', '/rss.xml'] },
		inlineStyleThreshold: 1024 * 1024,
		csp: {
			mode: 'auto',
			directives: {
				'script-src': ['self']
			}
		},
		serviceWorker: {
			register: false,
		},
		// https://stackoverflow.com/a/69457826
		routes: filepath => {
			return ![
				// exclude *test.js files
				/\.test\.js$/,

				// original default config
				/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/,
			].some(regex => regex.test(filepath))
		}
	}
}

export default config
