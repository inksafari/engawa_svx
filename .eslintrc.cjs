// usage: npx eslint --ignore-path .eslintignore "**/*.{js,ts,svelte}"

// See https://eslint.org/docs/rules/#possible-errors
const possibleErrors = {
	'no-constant-condition': 'off',
	'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	'no-template-curly-in-string': 'error',
	'no-use-before-define': 'off',
	'no-useless-backreference': 'error',
	'require-atomic-updates': 'warn',
}

// See https://eslint.org/docs/rules/#best-practices
const bestPractices = {
	'array-callback-return': 'error',
	'block-scoped-var': 'error',
	'default-case': 'error',
	'default-case-last': 'error',
	'grouped-accessor-pairs': 'error',
	'guard-for-in': 'error',
	'no-alert': 'error',
	'no-caller': 'error',
	'no-constructor-return': 'error',
	'no-eq-null': 'error',
	'no-eval': 'error',
	'no-extend-native': 'error',
	'no-extra-bind': 'error',
	'no-implicit-coercion': 'error',
	'no-implicit-globals': 'error',
	'no-implied-eval': 'error',
	'no-invalid-this': 'error',
	'no-iterator': 'error',
	'no-loop-func': 'error',
	'no-multi-spaces': 'error',
	'no-new-wrappers': 'error',
	'no-octal-escape': 'error',
	'no-proto': 'error',
	'no-return-await': 'error',
	'no-script-url': 'error',
	'no-self-compare': 'error',
	'no-sequences': 'error',
	'no-throw-literal': 'error',
	'no-unmodified-loop-condition': 'error',
	'no-unused-expressions': 'error',
	'no-useless-call': 'error',
	'no-useless-concat': 'error',
	'no-useless-return': 'error',
	'no-void': 'error',
	'prefer-promise-reject-errors': 'error',
	'prefer-regex-literals': ['error', {
		disallowRedundantWrapping: true,
	}],
	'radix': ['error', 'as-needed'],
	// 'require-await': 'error',
	'wrap-iife': 'error',
	// 'yoda': 'error',
}

// See https://eslint.org/docs/rules/#variables
const variables = {
	'no-restricted-globals': [
		'error',
		{
			name: 'error',
			message: 'Do not reference global \'error\'.',
		},
		{
			name: 'event',
			message: 'Do not reference global \'event\'.',
		},
		{
			name: 'fdescribe',
			message: 'Do not commit fdescribe. Use describe instead.',
		},
	],
	// 'no-unused-vars': [
	// 'error',
	// {
	// argsIgnorePattern: '^_',
	// args: 'all',
	// },
	// ],
}

const starSpacingOption = {
	before: false,
	after: true,
}

// See https://eslint.org/docs/rules/#stylistic-issues
const codeStyle = {
	'array-bracket-newline': ['error', 'consistent'],
	'array-bracket-spacing': ['error', 'never'],
	'array-element-newline': ['error', 'consistent', {
		multiline: true,
	}],
	'block-spacing': 'error',
	'computed-property-spacing': ['error', 'never'],
	'eol-last': ['error', 'always'],
	'func-call-spacing': ['error', 'never'],
	'func-names': ['error', 'as-needed'],
	'func-style': ['error', 'declaration', {
		allowArrowFunctions: true,
	}],
	'function-call-argument-newline': ['error', 'consistent'],
	// 'function-paren-newline': ['error', 'consistent'],
	'id-denylist': ['error', 'e', 'cb', 'callback'],
	// 'indent': ['warn', 'tab', {
	// SwitchCase: 1,
	// VariableDeclarator: 'first',
	// offsetTernaryExpressions: true,
	// }],
	'jsx-quotes': ['error', 'prefer-single'],
	'key-spacing': 'error',
	'keyword-spacing': 'error',
	'linebreak-style': 'error',
	'max-len': ['warn', {
		code: 120,
		tabWidth: 2,
		ignoreComments: true,
		ignoreRegExpLiterals: true,
		ignoreTemplateLiterals: true,
		ignoreStrings: true,
	}],
	'max-params': ['error', 3],
	'multiline-ternary': ['error', 'always-multiline'],
	// 'newline-per-chained-call': 'error',
	// 'no-mixed-operators': 'error',
	'no-multi-assign': 'error',
	'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2, maxEOF: 0 }],
	'no-nested-ternary': 'error',
	'no-new-object': 'error',
	'no-trailing-spaces': ['error', {
		ignoreComments: true,
	}],
	'no-unneeded-ternary': 'error',
	'no-whitespace-before-property': 'error',
	'nonblock-statement-body-position': ['error', 'beside'],
	'object-curly-newline': ['error', {
		consistent: true,
	}],
	// 'object-curly-spacing': ['error', 'always', {
	// arraysInObjects: false,
	// objectsInObjects: false,
	// }],
	'object-property-newline': ['error', {
		allowAllPropertiesOnSameLine: true,
	}],
	'operator-assignment': ['error', 'always'],
	'operator-linebreak': ['error', 'before'],
	'prefer-exponentiation-operator': 'error',
	'quote-props': ['error', 'consistent-as-needed'],
	'quotes': 'off',
	// quotes: [
	// 'warn',
	// 'single',
	// { avoidEscape: true },
	// ],
	'space-before-blocks': 'error',
	'space-before-function-paren': ['error', {
		anonymous: 'always',
		named: 'never',
		asyncArrow: 'always',
	}],
	'space-in-parens': ['error', 'never'],
	'space-unary-ops': 'error',
	'switch-colon-spacing': ['error', {
		after: true,
		before: false,
	}],
	'template-tag-spacing': ['error', 'never'],
	'wrap-regex': 'error',
}

const es6 = {
	'arrow-body-style': ['error', 'as-needed'],
	'arrow-parens': ['error', 'always'],
	'arrow-spacing': ['error', {
		before: true,
		after: true,
	}],
	'generator-star-spacing': ['error', starSpacingOption],
	'no-confusing-arrow': 'error',
	'no-duplicate-imports': 'error',
	'no-useless-computed-key': 'error',
	'no-useless-constructor': 'error',
	'no-useless-rename': 'error',
	'no-var': 'error',
	'object-shorthand': ['error', 'always'],
	'prefer-const': ['error', {
		destructuring: 'all',
		ignoreReadBeforeAssign: false,
	}],
	'prefer-rest-params': 'error',
	'prefer-spread': 'error',
	'prefer-template': 'error',
	'rest-spread-spacing': 'error',
	'sort-imports': ['error', {
		ignoreCase: true,
	}],
	'symbol-description': 'error',
	'template-curly-spacing': 'error',
	'yield-star-spacing': ['error', starSpacingOption],
}

// See https://eslint.org/docs/latest/rules/#suggestions
const suggestions = {
	'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	'no-empty': ['error', {
		allowEmptyCatch: true,
	}],
	// 'no-param-reassign': ['error', { props: false }],
	'no-restricted-syntax': 'off',
	'no-await-in-loop': 'off',
	// 'prefer-named-capture-group': ['error'],
}

/** @type { import('eslint/rules').ESLintRules } */
const rulesFromPlugins = {
	'@typescript-eslint/no-unused-vars': ['warn', {
		argsIgnorePattern: '^_',
		varsIgnorePattern: '^_',
		caughtErrorsIgnorePattern: '^_',
	}],
	'@typescript-eslint/no-explicit-any': 'off',
	// 'no-only-tests/no-only-tests': 'warn',
	// 'no-unsanitized/method': 'error',
	// 'no-unsanitized/property': 'error',
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
		// 'no-unsanitized',
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
			files: ['*.ts'],
			parserOptions: {
				project: ['./config/tsconfig.dev.json'],
			},
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
			alias: {
				map: [
					// escape `$` to work around eslint's Regex matching
					['\\$app', './node_modules/@sveltejs/kit/src/runtime/app/'],
					['\\$lib', './src/lib/'],
				],
				extensions: ['.js', '.svelte', '.json'],
			},
			node: {
				extensions: ['.js', '.cjs', '.mjs'],
				moduleDirectory: ['node_modules', './'],
			},
		},
		'import/extensions': [
			'error',
			'always',
			{
				js: 'never',
				ts: 'never',
				worker: 'never',
				svelte: 'always',
			},
		],
	},
	rules: {
		// rulesFromESLint
		'no-tabs': 'off',
		...possibleErrors,
		...bestPractices,
		...variables,
		...codeStyle,
		...suggestions,
		// plugins
		...rulesFromPlugins,
	},
}
module.exports = config
// @links:
// https://github.com/arlequins/custom-templates/blob/main/packages/eslint-config-typescript-sveltejs/.eslintrc.js
// https://github.com/kwangure/eslint-config-svelte/blob/master/.eslintrc.js
