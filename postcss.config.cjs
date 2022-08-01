/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @file PostCSS Configuration
 * @see https://github.com/postcss/postcss
 */
const jitProps = require('postcss-jit-props')
const openProps = require('open-props')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const config = {
	// syntax: 'postcss-scss',
	plugins: [
		jitProps(openProps),
		autoprefixer({
			cascade: false,
			grid: false
		}),
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
				'./src/**/*.html',
				'./src/**/*.svelte',
				'./src/styles/**/*.{css,scss,pcss}'
			],
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
