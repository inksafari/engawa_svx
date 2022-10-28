// usage: npx eslint "src/**/*.{js,ts,svelte}"

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
		'eslint:recommended',
		// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
		'plugin:@typescript-eslint/recommended',
		// https://github.com/ota-meshi/eslint-plugin-svelte
		// 'plugin:svelte/recommended',
		// https://github.com/nodesecurity/eslint-plugin-security
		// 'plugin:security/recommended',
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
		// https://github.com/typescript-eslint
		'@typescript-eslint',
		// https://github.com/bkucera/eslint-plugin-json-format
		// 'json-format',
		// https://github.com/nodesecurity/eslint-plugin-security
		// 'security',
		// https://github.com/microsoft/rushstack/tree/main/eslint/eslint-plugin-security
		'@rushstack/eslint-plugin-security',
		// https://github.com/eslint/eslint-plugin-markdown
		'markdown',
		// https://github.com/jonaskello/eslint-plugin-functional
		// 'functional',
	],
	ignorePatterns: [
		'.github',
		'.svelte-kit',
		'*.min.*',
		'build',
		'coverage',
		'node_modules',
		'packages-lock.json',
		'pnpm-lock.yaml',
		'service-worker.ts',
		'service-worker.js',
		'static',
		'__snapshots__',
		'scripts',
		'mdsvex.config.js',
		'playwright.config.js',
		'svelte.config.js',
		'vite.config.js',
		'vitest.config.js',
	],
	overrides: [
		{ files: ['*.cjs'], env: { node: true } },
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
		{
			files: ['content/**/*.md', 'content/**/*.svx'],
			processor: 'markdown/markdown',
		},
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
