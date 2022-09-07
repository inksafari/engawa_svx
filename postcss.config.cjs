/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @file PostCSS Configuration
 * @see https://github.com/postcss/postcss
 */
const jitProps = require('postcss-jit-props')
const openProps = require('open-props')
const autoprefixer = require('autoprefixer')
const presetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')
const trigger = require('postcss-fail-on-warn')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const config = {
	syntax: 'postcss-scss',
	parser: 'postcss-scss',
	plugins: [
		jitProps(openProps),
		// https://preset-env.cssdb.org/features/
		presetEnv({
			stage: 0,
			//features: {
			//	'media-query-ranges': true
			//}
		}),
		autoprefixer({
			cascade: false,
			grid: false
		}),
		trigger(),
		!dev &&
		cssnano({
			autoprefixer: false,
			preset: [
				'advanced',
				{ discardComments: { removeAll: true } }
			]
		}),
		!dev &&
		purgecss({
			content: [
				'./src/**/*.{html,js,ts,svelte}',
				'./src/styles/**/*.{css,scss,pcss}',
				'**/*.svg',
			],
			defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
			safelist: {
				// https://github.com/juzerzarif/juzerzarif.com/blob/main/postcss.config.cjs
				standard: [/^(?!.*animate__[a-zA-Z]+).*/],
				greedy: [/:lang$/]
			},
			keyframes: true
		})
	]
}

module.exports = config
