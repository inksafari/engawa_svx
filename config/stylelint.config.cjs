// pnpm lint:css > stylelintReport.txt

// lowercase-single-dashed-names-only-0
const namingPattern = /^-?[a-z0-9]+(-[a-z0-9]+)*$/;
// ^[a-z]+([a-z0-9-]+[a-z0-9]+)?$
// ^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$

/** @type { import("stylelint").Configuration } */
module.exports = {
	customSyntax: 'postcss-scss',
	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-scss',
	],
	namingPattern,
	plugins: [
		'stylelint-csstree-validator',
		'stylelint-declaration-block-no-ignored-properties',
		'stylelint-high-performance-animation',
		'stylelint-no-unsupported-browser-features'
	],
	rules: {
		// general
		'indentation': 'tab',
		'string-quotes': 'single',
		'max-empty-lines': [
			1,
			{
				ignore: ['comments']
			}
		],
		'max-line-length': [
			120,
			{
				ignore: 'non-comments',
				ignorePattern: ['/https?://[0-9,a-z]*.*/']
			}
		],
		'at-rule-empty-line-before': [
			'always',
			{
				except: [
					'blockless-after-same-name-blockless',
				],
				ignore: ['first-nested'],
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
		'declaration-property-value-disallowed-list': {
			'/^animation/': ['ease'],
			cursor: ['hand']
		},
		'function-url-scheme-disallowed-list': ['/^\\./', '/^\\.\\.\\/\\.\\./', 'ftp'],
		'unit-no-unknown': null,
		'value-keyword-case': [
			'lower',
			{
				ignoreFunctions: ['optimizeLegibility'],
				camelCaseSvgKeywords: true
			}
		],
		// selector specificity and nesting
		'selector-max-specificity': '0,4,1', /* id,class,type */
		'selector-max-compound-selectors': 4,
		'max-nesting-depth': [
			3, {
				ignore: ['blockless-at-rules', 'pseudo-classes'],
				ignoreAtRules: [
					'each',
					'else',
					'if',
					'include',
					'media',
					'supports'
				]
			}
		],
		'no-descending-specificity': true,
		'selector-class-pattern': null,
		'selector-id-pattern': namingPattern,
		'selector-max-id': null,
		'selector-no-qualifying-type': null,
		'selector-no-vendor-prefix': [ true, {
			ignoreSelectors: ['::-webkit-input-placeholder']
		}],
		'selector-pseudo-class-no-unknown': [ true, {
			ignorePseudoClasses: ['global']
		}],
		'selector-type-no-unknown': [ true, {
			ignore: ['custom-elements', 'default-namespace']
		}],
		// colors
		'alpha-value-notation': null,
		'color-function-notation': null,
		'hue-degree-notation': null,
		'custom-property-pattern': null,
		// rules from plugins
		'csstree/validator': {
			syntaxExtensions: ['sass'],
			ignoreProperties: ['backface-visibility', 'margin', 'orphans', 'widows']
		},
		'plugin/declaration-block-no-ignored-properties': true,
		'plugin/no-low-performance-animation-properties': [ true, {
			ignore: 'paint-properties'
		}],
		'plugin/no-unsupported-browser-features': [ true, {
			severity: 'warning',
			ignore: [
				'rem',
				'word-break',
				'css3-cursors',
				'css-font-stretch',
				'css-resize',
				'multicolumn',
				'intrinsic-width',
				'user-select-none',
				'css-appearance',
			],
		}],
		// scss
		'scss/at-extend-no-missing-placeholder': true,
		'scss/at-function-pattern': namingPattern,
		'scss/at-import-no-partial-leading-underscore': true,
		'scss/at-import-partial-extension-blacklist': ['scss'],
		'scss/at-mixin-pattern': namingPattern,
		'scss/at-rule-no-unknown': true,
		'scss/dollar-variable-colon-space-after': 'always',
		'scss/dollar-variable-colon-space-before': 'never',
		'scss/dollar-variable-pattern': namingPattern,
		'scss/double-slash-comment-empty-line-before': null,
		'scss/double-slash-comment-whitespace-inside': null,
		'scss/operator-no-newline-after': null,
		'scss/operator-no-unspaced': null,
		'scss/percent-placeholder-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
		'scss/selector-no-redundant-nesting-selector': true,
	},
	overrides: [
		// {
			// files: ['**/*.svelte'],
			// customSyntax: 'postcss-html',
			// extends: [
				// https://github.com/stylelint/stylelint/issues/5685
				// 'stylelint-config-html/svelte'
			// ],
		// },
	],
	defaultSeverity: 'error',
	ignoreFiles: [
		'**/node_modules/**',
		'build/**',
		'src/assets/**',
		'**/reset*.css'
	]
}
// @links
// https://github.com/anolilab/javascript-style-guide/tree/main/packages/stylelint-config
// https://github.com/efiand/pineglade-config/blob/main/stylelint.config.cjs
// https://github.com/5t3ph/tdbc/blob/main/.stylelintrc.yaml
// https://github.com/xeho91/personal-website/blob/main/.stylelintrc.cjs
// https://github.com/rodneylab/sveltekit-blog-mdx/blob/main/.stylelintrc.json
