module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-idiomatic-order',
		'stylelint-config-html/svelte'
	],
	plugins: [
		'stylelint-high-performance-animation',
		'stylelint-order'
	],
	overrides: [{ files: ['**/*.svelte'], customSyntax: 'postcss-html' }],
	rules: {
		'at-rule-disallowed-list': [
			['extend', 'import'],
			{
				severity: 'error',
				message: 'Prefer @use and @forward rather than @import.'
			}
		],
		// 'at-rule-empty-line-before': null,
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'block-closing-brace-newline-after': [
			'always',
			{
				ignoreAtRules: ['if', 'else']
			}
		],
		'color-named': 'never',
		'comment-empty-line-before': [
			'always',
			{
				except: ['first-nested']
			}
		],
		'custom-media-pattern': null,
		'custom-property-empty-line-before': null,
		'custom-property-pattern': null,
		'declaration-empty-line-before': null,
		'font-family-name-quotes': 'always-where-required',
		'font-weight-notation': 'named-where-possible',
		'function-url-no-scheme-relative': true,
		'function-url-quotes': 'always',
		'keyframes-name-pattern': null,
		'length-zero-no-unit': null,
		'max-empty-lines': null,
		'max-line-length': [
			120,
			{
				ignore: 'non-comments',
				ignorePattern: '/https?://[0-9,a-z]*.*/'
			}
		],
		'max-nesting-depth': 5,
		'no-descending-specificity': true,
		'no-duplicate-selectors': true,
		'selector-class-pattern': null,
		'selector-id-pattern': null,
		'selector-max-id': null,
		'selector-no-qualifying-type': null,
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global']
			}
		],
		'string-quotes': 'single',
		'rule-empty-line-before': [
			'always-multi-line',
			{
				except: ['first-nested'],
				ignore: ['after-comment']
			}
		],
		'value-keyword-case': [
			'lower',
			{
				camelCaseSvgKeywords: true
			}
		],
		// color
		'alpha-value-notation': null,
		'color-function-notation': null,
		'hue-degree-notation': null,
		// scss
		'scss/at-function-pattern': null,
		'scss/at-mixin-pattern': null,
		'scss/declaration-nested-properties': 'never',
		'scss/dollar-variable-pattern': null,
		'scss/double-slash-comment-whitespace-inside': null,
		'scss/operator-no-newline-after': null,
		'scss/percent-placeholder-pattern': null,
		'scss/selector-no-redundant-nesting-selector': true,
		// rules from plugins
		'order/order': [
			[
				'dollar-variables',
				'custom-properties',
				{
					type: 'at-rule',
					name: 'include',
					hasBlock: false
				},
				'declarations',
				{
					type: 'at-rule',
					name: 'include',
					hasBlock: true
				},
				'rules'
			]
		],
		'plugin/no-low-performance-animation-properties': [true, { ignore: 'paint-properties' }],
	},
	ignoreFiles: [
		'/node_modules/',
		'/build/',
		'/.svelte-kit/',
		'/.vscode/',
		'/.github/',
		'/.firebase/',
		'/scripts/',
		'/static/',
		'/src/assets/',
		'/src/app.html'
	]
}
// https://github.com/TracerBuilt/tracerbuilt/blob/main/stylelint.config.cjs
