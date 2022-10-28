// echo 'docs: Add new blog post' | npx commitlint
module.exports = {
	// https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum
	extends: ['@commitlint/config-conventional'],
	rules: {
		//   TODO Add Scope Enum Here
		// 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
		'type-enum': [
			2,
			'always',
			[
				'feat',
				'firebase',
				'fix',
				'chore',
				'style',
				'refactor',
				'ci',
				'test',
				'perf',
				'revert',
				'vercel',
			],
		],
	},
}
