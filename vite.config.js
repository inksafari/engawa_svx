import fs from 'fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
// -- vite --
import { defineConfig } from 'vite'
// -- vite plugins --
import { sveltekit } from '@sveltejs/kit/vite'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'
import shoji from './plugins/shoji.ts' // → 檢查env vars

// TODO: (1)調整大小 (2)image.svelte
// https://github.com/ElMassimo/vite-plugin-image-presets/blob/main/example/vite.config.ts
// https://github.com/sturdy-dev/codeball-web/blob/main/vite.config.js
// https://github.com/ngalaiko/galaiko.rocks/blob/master/vite.config.js
export const genImageSizePlugin = imagePresets({
	thumbnail: widthPreset({
		class: 'img thumb',
		loading: 'lazy',
		widths: [50, 300],
		formats: {
			webp: { quality: 80 },
		},
		meta: 'width;height;quality;src',
	}),
})

// env
const isDev = process.env.NODE_ENV !== 'production'
const isProd = process.env.NODE_ENV === 'production'

const prependScssFiles = [
	'@use "src/styles/tokens.scss" as *;',
	'@use "src/styles/func.scss" as *;',
	'@use "src/styles/mixins" as *;',
].join(' ')

const aliasList = [
	{ name: '#components', path: './src/lib/components' },
	{ name: '#styles', path: './src/styles' },
	{ name: '#utils', path: './src/lib/utils' },
	{ name: '#assets', path: './src/assets' },
]

/** @type {import('vite').UserConfig} */
const config = defineConfig({
	logLevel: 'warn',
	mode: process.env.mode || 'production',
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
		__PROJECT_ROOT__: JSON.stringify(path.dirname(fileURLToPath(import.meta.url))),
	},
	resolve: {
		// alias: { '#': fileURLToPath(new URL('./src', import.meta.url)) }
		alias: Object.fromEntries(aliasList.map(alias => [alias.name, path.resolve(alias.path)])),
	},
	build: {
		reportCompressedSize: false,
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
	},
	css: { preprocessorOptions: { scss: { additionalData: prependScssFiles } } },
	esbuild: {
		treeShaking: true,
		minifyWhitespace: true,
		minifyIdentifiers: true,
		minifySyntax: true,
	},
	experimental: {
		inspector: {
			holdMode: true,
		},
	},
	server: {
		host: 'localhost',
		port: 9000,
		open: true,
		strictPort: false,
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..'],
		},
		hmr: {
			overlay: false,
		},
	},
	preview: {
		port: 9000,
		strictPort: false,
	},
	optimizeDeps: {
		include: [
			'@akebifiky/remark-simple-plantuml',
			'@rive-app/canvas',
			'date-fns',
			'hastscript',
			'lunarphase-js',
			'rehype-slug',
			'shiki-twoslash',
		],
	},
	ssr: {
		noExternal: ['three'],
	},
	plugins: [
		// dotenv https://github.com/TransDB-de/website/blob/master/svelte.config.js
		shoji(),
		genImageSizePlugin,
		sveltekit(),
	],
})

// Add certificate if it's generated
// $ brew install mkcert nss
// $ mkcert -install && cd [project] && mkcert localhost
if (fs.existsSync('localhost-key.pem') && fs.existsSync('localhost.pem')) {
	config.server = {
		https: {
			key: fs.readFileSync('localhost-key.pem'),
			cert: fs.readFileSync('localhost.pem'),
		},
	}
}

export default config

// @links
// https://github.com/dkaoster/www.diplateevo.com/blob/main/svelte.config.js
// https://ics.media/entry/220204/
// https://github.com/tidaltheory/tidaltheory-www/blob/main/lens.config.mjs
