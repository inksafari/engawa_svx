// echo 'docs: Add new blog post' | npx commitlint
module.exports = {
	// https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum
	extends: ['@commitlint/config-conventional'],
	rules: {
		'body-max-line-length': [1, 'always', 140],
		'footer-max-line-length': [2, 'always', 140],
		'header-max-length': [2, 'always', 140],
		// TODO: Add Scope Enum Here
		// 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'firebase',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
				'vercel',
			],
		],
		'type-empty': [0],
		'type-case': [0],
		'subject-case': [0],
		'subject-full-stop': [0],
	},
}
