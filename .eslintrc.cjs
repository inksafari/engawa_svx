// usage: npx eslint --ignore-path .eslintignore "**/*.{js,ts,svelte,svx,md}"

/** @type { import('eslint/rules').ESLintRules } */
// https://eslint.org/docs/rules
const rulesFromESLint = {
	// eslint-disable-next-line quote-props
	'indent': [
		'warn',
		'tab',
		{
			SwitchCase: 1,
		},
	],
	'max-len': [
		'error',
		{
			code: 120,
			tabWidth: 2,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreUrls: true,
		},
	],
	quotes: [
		'warn',
		'single',
		{ avoidEscape: true },
	],
	'no-console': ['warn'],
	'no-alert': ['error'],
	'no-debugger': ['error'],
	'prefer-named-capture-group': ['error'],
	'func-names': ['error', 'as-needed'],
}

const rulesFromPlugins = {
	'@typescript-eslint/indent': [
		'warn',
		'tab',
		{
			SwitchCase: 1,
		},
	],
	'no-unsanitized/method': 'error',
	'no-unsanitized/property': 'error',
	// 'no-only-tests/no-only-tests': 'warn',
}

/** @type { import('eslint').Linter.Config } */
const config = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2022,
		extraFileExtensions: ['.svelte'],
		tsconfigRootDir: __dirname,
		project: ['./config/tsconfig.dev.json'],
	},
	env: {
		browser: true,
		es2022: true,
	},
	extends: [
		// https://github.com/standard/eslint-config-standard
		// 'standard',
		// https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
		// 'eslint:recommended',
		// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
		// 'plugin:@typescript-eslint/recommended',
		// https://github.com/eslint/eslint-plugin-markdown
		// 'plugin:markdown/recommended',
		// https://github.com/ota-meshi/eslint-plugin-svelte
		// 'plugin:svelte/recommended',
		// https://github.com/eslint-community/eslint-plugin-security
		'plugin:security/recommended',
		// https://github.com/jonaskello/eslint-plugin-functional
		// 'plugin:functional/external-recommended',
		// 'plugin:functional/recommended',
		// 'plugin:functional/stylistic',
		// https://github.com/marekvospel/eslint-config
		// '@vospel'
	],
	plugins: [
		// https://github.com/sveltejs/eslint-plugin-svelte3
		// 'svelte3',
		// https://github.com/yeonjuan/html-eslint
		// '@html-eslint',
		// https://github.com/typescript-eslint
		'@typescript-eslint',
		// https://github.com/bkucera/eslint-plugin-json-format
		// 'json-format',
		// https://github.com/eslint/eslint-plugin-markdown
		// 'markdown',
		// https://github.com/mozilla/eslint-plugin-no-unsanitized
		'no-unsanitized',
		// https://github.com/jonaskello/eslint-plugin-functional
		// 'functional',
	],
	overrides: [
		{ files: ['*.cjs'], env: { node: true } },
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
		},
		{
			files: ['test/**/*.js', 'test/**/*.ts', '**/*.test.js', '**/*.test.ts'],
			// extends: ['plugin:jest/recommended'],
			// env: {
			// 	jest: true,
			// },
			// plugins: [
			// https://github.com/levibuzolic/eslint-plugin-no-only-tests
			// 'no-only-tests'
			// ],
			rules: {
				// 'jest/expect-expect': 'off',
				// 'jest/no-disabled-tests': 'off',
				// 'jest/no-conditional-expect': 'off',
				// 'jest/valid-title': 'off',
				// 'jest/no-interpolation-in-snapshots': 'off',
				// 'jest/no-export': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-use-before-define': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
			},
		},
		// {
		// files: ['content/**/*.md', 'content/**/*.svx', 'src/lib/data/*.md'],
		// processor: 'markdown/markdown',
		// },
		// {
		// files: ['src/**/*.html'],
		// parser: '@html-eslint/parser',
		// extends: ['plugin:@html-eslint/recommended'],
		// },
	],
	settings: {
		'import/resolver': {
			node: { extensions: ['.js', '.cjs', '.mjs'] },
		},
	},
	rules: {
		'no-tabs': 'off',
		'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2, maxEOF: 0 }],
		'no-use-before-define': ['off'],
		...rulesFromESLint,
		...rulesFromPlugins,
	},
}
module.exports = config
