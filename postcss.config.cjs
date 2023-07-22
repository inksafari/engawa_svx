/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @file PostCSS Configuration
 * @see https://github.com/postcss/postcss
 * @type {import('postcss').AcceptedPlugin}
 */
const htmlPlugin = require('postcss-html')
const scssPlugin = require('postcss-scss')
const jitProps = require('postcss-jit-props')
const openProps = require('open-props')
const lightingCSS = require('postcss-lightningcss')
const nodeConfig = require('./package.json')
// const purgeCSS = require('@fullhuman/postcss-purgecss')

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const purgeSafelist = {
	/* https://github.com/juzerzarif/juzerzarif.com/blob/main/postcss.config.cjs */
	standard: [
		/^(?!.*animate__[a-zA-Z]+).*/,
	],
	greedy: [
		/:lang$/,
	],
}

const config = {
	syntax: htmlPlugin({
		scss: scssPlugin,
	}),
	parser: scssPlugin,
	plugins: [
		jitProps(openProps),
		/* https://github.com/onigoetz/postcss-lightningcss */
		lightingCSS({
			browsers: nodeConfig.browserslist,
			lightningcssOptions: {
				minify: process.env.MODE === 'production' ? true : false, // (!dev ? true : false),
				sourceMap: true,
				cssModules: false,
				import: false,
				/* https://preset-env.cssdb.org/features */
				// drafts: {},
			},
		}),
		// purgeCSS({
		// content: [
		// './src/**/*.{js,ts,svelte,svx,md}',
		// './content/**/*.{md,svx}',
		// './static/**/*.{html,svg}'
		// ],
		// css: [
		// './src/styles/**/*.{css,scss,pcss}',
		// ],
		// defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
		// safelist: purgeSafelist,
		// keyframes: true,
		// }),
	],
}

module.exports = config
