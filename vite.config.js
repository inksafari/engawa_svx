import fs from 'fs'
import path from 'node:path'
import { fileURLToPath } from 'url'
// -- vite --
import { splitVendorChunkPlugin, defineConfig } from 'vite'
// -- vite plugins --
import { sveltekit } from '@sveltejs/kit/vite'
import { generateImageSizes } from 'rollup-plugin-generate-image-sizes'
export const genImageSizePlugin = generateImageSizes({
	hook: 'buildStart',
	dir: './static/images',
	inputFormat: ['jpg', 'jpeg', 'png', 'gif'],
	size: [1920, 1280, 768, 640],
	outputFormat: 'jpg',
	forceUpscale: false,
	quality: 75,
	maxParallel: 8,
	outputManifest: './content/images-manifest.json',
})

// env
const mode = process.env.NODE_ENV
const dev = mode === 'development'

const prependScssFiles = [
	'@use "src/styles/func.scss" as *;',
	'@use "src/styles/tokens.scss" as *;'
].join(' ')

const aliasList = [
	{ name: '#components', path: './src/lib/components' },
	{ name: '#styles', path: './src/styles' },
	{ name: '#utils', path: './src/lib/utils' }
]

/** @type {import('vite').UserConfig} */
const config = defineConfig({
	mode: process.env.mode || 'production',
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
		__PROJECT_ROOT__: JSON.stringify(path.dirname(fileURLToPath(import.meta.url)))
	},
	resolve: {
		alias: Object.fromEntries(aliasList.map(alias => [alias.name, path.resolve(alias.path)]))
	},
	// css: { preprocessorOptions: { scss: { additionalData: prependScssFiles } } },
	server: {
		port: 3000,
		open: true,
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..'],
		},
	},
	preview: {
		port: 9000
	},
	// https://github.com/sveltejs/kit/issues/5389
	// https://github.com/frontendista/frontendista.cz/tree/main/apps/frontend
	//test: {
		//environment: 'happy-dom',
		//setupFiles: './tests/setup.ts',
		//watch: false,
		//deps: {
			// inline: ['outdent', 'clsx']
		//},
		//includeSource: ['src/**/*.{js,ts}'],
	//},
	optimizeDeps: {
		include: [
			'@akebifiky/remark-simple-plantuml',
			'date-fns',
			'hastscript',
			'rehype-add-classes',
			'rehype-slug',
			'shiki-twoslash'
		]
	},
	plugins: [
		// dotenv https://github.com/TransDB-de/website/blob/master/svelte.config.js
		dev && genImageSizePlugin,
		sveltekit(),
		splitVendorChunkPlugin
	]
})

// Add certificate if it's generated
// $ brew install mkcert nss
// $ mkcert -install && cd [project] && mkcert localhost
if (fs.existsSync('localhost-key.pem') && fs.existsSync('localhost.pem')) {
	config.server = {
		https: {
			key: fs.readFileSync('localhost-key.pem'),
			cert: fs.readFileSync('localhost.pem')
		}
	}
}

export default config;

// @links
// https://github.com/dkaoster/www.diplateevo.com/blob/main/svelte.config.js
// https://ics.media/entry/220204/
// https://github.com/tidaltheory/tidaltheory-www/blob/main/lens.config.mjs
