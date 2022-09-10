// pnpm lint:css > stylelintReport.txt
module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		// https://github.com/stylelint/stylelint/issues/5685
		//'stylelint-config-html/svelte'
	],
	plugins: [
		'stylelint-csstree-validator',
		'stylelint-declaration-block-no-ignored-properties',
		'stylelint-high-performance-animation'
	],
	customSyntax: 'postcss-scss',
	//overrides: [{ files: ['*.svelte', '**/*.svelte'], customSyntax: 'postcss-html' }],
	rules: {
		// basics
		'indentation': 'tab',
		'string-quotes': 'single',
		'max-nesting-depth': 5,
		'max-empty-lines': [
			1,
			{
				'ignore': ['comments']
			}
		],
		'max-line-length': [
			80,
			{
				ignore: 'non-comments',
				ignorePattern: ['/https?://[0-9,a-z]*.*/']
			}
		],
		'at-rule-empty-line-before': [
			'always',
			{
				except: [
					'after-same-name',
					'blockless-after-blockless',
					'first-nested',
				],
				ignore: ['after-comment'],
				ignoreAtRules: ['else', '@use']
			}
		],
		'rule-empty-line-before': [
			'always-multi-line',
			{
				except: ['first-nested'],
				ignore: ['after-comment']
			}
		],
		'comment-empty-line-before': [
			'always',
			{
				except: ['first-nested']
			}
		],
		//
		'at-rule-disallowed-list': [
			['extend', 'import'],
			{
				severity: 'error',
				message: 'Prefer @use and @forward rather than @import.'
			}
		],
		'unit-no-unknown': null,
		'value-keyword-case': [
			'lower',
			{
				ignoreFunctions: ['optimizeLegibility'],
				camelCaseSvgKeywords: true
			}
		],
		// selectors
		'no-descending-specificity': true,
		'selector-class-pattern': null,
		'selector-id-pattern': null,
		'selector-max-id': null,
		'selector-no-qualifying-type': null,
		'selector-no-vendor-prefix': [
			true,
			{
				ignoreSelectors: ['::-webkit-input-placeholder']
			}
		],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global']
			}
		],
		'selector-type-no-unknown': [
			true,
			{
				ignore: ['custom-elements', 'default-namespace']
			}
		],
		// colors
		'alpha-value-notation': null,
		'color-function-notation': null,
		'hue-degree-notation': null,
		'custom-property-pattern': null,
		// scss
		'scss/at-function-pattern': null,
		'scss/at-mixin-pattern': null,
		'scss/declaration-nested-properties': 'never',
		'scss/dollar-variable-empty-line-before': null,
		'scss/dollar-variable-pattern': null,
		'scss/double-slash-comment-empty-line-before': null,
		'scss/double-slash-comment-whitespace-inside': null,
		'scss/operator-no-newline-after': null,
		'scss/percent-placeholder-pattern': null,
		'scss/selector-no-redundant-nesting-selector': true,
		// rules from plugins
		'csstree/validator': {
			'syntaxExtensions': ['sass'],
			'ignoreProperties': ['backface-visibility', 'margin', 'orphans', 'widows']
		},
		'plugin/declaration-block-no-ignored-properties': true,
		'plugin/no-low-performance-animation-properties': [true, { ignore: 'paint-properties' }],
	},
	ignoreFiles: [
		'**/node_modules/**',
		'build/**',
		'src/assets/**',
		'**/reset*.css'
	]
}
