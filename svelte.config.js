// -- svelte preprocesses/adapters --
// import sequential from 'svelte-sequential-preprocessor'
import staticAdapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
// import { typescript } from 'svelte-preprocess-esbuild'
// import { transformSync } from '@swc/core'
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess.js'
// -- Configuration --
// import tsConfigFile from './config/tsconfig.dev.json'
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
	// typescript(), // typescript({ tsconfig: tsConfigFile }),
	sveltePreprocess({
		// typescript: false,
		// https://xiaohanglin.site/pages/313fe5/
		// https://github.com/sveltejs/svelte-preprocess/blob/81f0b139737e1bb4ff6b86c9495408698793107d/docs/preprocessing.md#overriding-preprocessors
		// typescript({ content }) {
		// const { code, map } = transformSync(content, {
		// jsc: {
		// parser: { syntax: 'typescript' },
		// },
		// })
		// return { code, map }
		// },
		scss: {
			includePaths: ['src'],
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
		prerender: {
			handleMissingId: 'warn',
		},
		csp: { mode: 'auto' },
		// FIXME: cspDirectives需要重寫
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
	onwarn(warning, defaultHandler) {
		if (warning.code === 'css-unused-selector') {
			return
		}

		defaultHandler(warning)
	},
}

export default config
