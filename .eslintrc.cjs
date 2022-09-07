// https://eslint.org/blog/2022/08/new-config-system-part-2/
// usage: npx eslint "src/**/*.{js,ts,svelte}"

/** @type { import('eslint/rules').ESLintRules } */
// https://eslint.org/docs/rules
const rulesFromESLint = {
	// eslint-disable-next-line quote-props
	'indent': [
		'warn',
		'tab',
		{
			SwitchCase: 1
		}
	],
	'max-len': [
		'error',
		{
			code: 120,
			tabWidth: 2,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreUrls: true
		}
	],
	quotes: [
		'warn',
		'single',
		{ avoidEscape: true }
	],
	'no-console': ['warn'],
	'no-alert': ['error'],
	'no-debugger': ['error'],
	'prefer-named-capture-group': ['error'],
	'func-names': ['error', 'as-needed']
}

/** @type { import('eslint').Linter.Config } */
const config = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2022,
		extraFileExtensions: [ '.svelte' ],
		project: [ './config/tsconfig.dev.json' ]
	},
	env: {
		browser: true,
		es2022: true
	},
	extends: [
		// https://github.com/standard/eslint-config-standard
		//'standard',
		// https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
		'eslint:recommended',
		// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
		//'plugin:@typescript-eslint/recommended',
		// https://github.com/ota-meshi/eslint-plugin-svelte
		'plugin:svelte/recommended',
		// https://github.com/nodesecurity/eslint-plugin-security
		'plugin:security/recommended'
		// https://github.com/jonaskello/eslint-plugin-functional
		// 'plugin:functional/external-recommended',
		// 'plugin:functional/recommended',
		// 'plugin:functional/stylistic',
	],
	plugins: [
		// https://github.com/sveltejs/eslint-plugin-svelte3
		//'svelte3',
		// https://github.com/typescript-eslint
		'@typescript-eslint',
		// https://github.com/bkucera/eslint-plugin-json-format
		// 'json-format',
		// https://github.com/nodesecurity/eslint-plugin-security
		'security',
		// https://github.com/eslint/eslint-plugin-markdown
		'markdown'
		// https://github.com/jonaskello/eslint-plugin-functional
		// 'functional',
	],
	ignorePatterns: ['node_modules', 'service-worker.ts', 'service-worker.js'],
	overrides: [
		{ files: ['*.cjs'], env: { node: true } },
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser', // processor: 'svelte3/svelte3',
		},
		{
			files: ['*.js'],
			parser: '@babel/eslint-parser',
			parserOptions: {
				requireConfigFile: false,
				babelOptions: {
					presets: [
						[
							'@babel/preset-env',
							{
								targets: {
									node: 'current'
								}
							}
						]
					]
				}
			}
		},
		{
			files: ['test/**/*.js', 'test/**/*.ts', '**/*.test.js', '**/*.test.ts'],
			extends: ['plugin:jest/recommended'],
			env: {
				jest: true
			},
			rules: {
				'jest/expect-expect': 'off',
				'jest/no-disabled-tests': 'off',
				'jest/no-conditional-expect': 'off',
				'jest/valid-title': 'off',
				'jest/no-interpolation-in-snapshots': 'off',
				'jest/no-export': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-use-before-define': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-call': 'off'
			}
		},
		{
			files: ['content/**/*.md', 'content/**/*.svx'],
			processor: 'markdown/markdown'
		}
		// {
		// 	extends: ['plugin:cypress/recommended'],
		// 	files: ['cypress/**/*'],
		// 	env: {
		// 		'cypress/globals': true,
		// 	},
		// 	plugins: ['cypress'],
		// },
	],
	settings: {
		// https://github.com/sveltejs/eslint-plugin-svelte3#configuration
		//'svelte3/ignore-styles': (attr) => !!attr.lang,
		//'svelte3/named-blocks': false,
		//'svelte3/typescript': require('typescript'),
	},
	rules: {
		'no-tabs': 'off',
		'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2, maxEOF: 0 }],
		'no-use-before-define': ['off'],
		// eslint-disable-next-line node/no-unsupported-features/es-syntax
		...rulesFromESLint,
		// eslint-disable-next-line node/no-unsupported-features/es-syntax
		//...rulesFromPlugins
	}
}
module.exports = config
