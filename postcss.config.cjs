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
	syntax: 'postcss-scss',
	// parser: 'postcss-scss',
	plugins: [
		/* https://preset-env.cssdb.org/features */
		presetEnv({
			stage: 0,
			features: {
				'color-function': false,
				'color-functional-notation': false,
				'gap-properties': false,
				'hexadecimal-alpha-notation': false,
				'ic-unit': true,
				'logical-properties-and-values': false,
				'media-query-ranges': true,
				'nesting-rules': false,
			},
		}),
		jitProps(openProps),
		autoprefixer({
			cascade: false,
			grid: false,
		}),
		!dev
		&& cssnano({
			autoprefixer: false,
			preset: [
				/* https://cssnano.co/docs/what-are-optimisations */
				'advanced',
				{
					discardComments: { removeAll: true },
					normalizeUnicode: false,
					svgo: false,
					zindex: false,
				},
			],
		}),
		!dev
		&& purgecss({
			content: [
				'./src/**/*.{html,js,ts,svelte}',
				'./src/styles/**/*.{css,scss,pcss}',
				'**/*.svg',
			],
			defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
			safelist: purgeSafelist,
			keyframes: true,
		}),
	],
}

module.exports = config
