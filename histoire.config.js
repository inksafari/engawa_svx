import { HstSvelte } from '@histoire/plugin-svelte'
import { defineConfig } from 'histoire'

// TODO: 還沒開始寫stories
const config = defineConfig({
	setupFile: '/src/histoire-setup.js',
	plugins: [
		HstSvelte(),
	],
	// https://histoire.dev/guide/svelte3/hierarchy.html
	tree: {
		groups: [
			{
				id: 'top',
				title: '', // No toggle
			},
			// {
			//   title: 'Components',
			//   include: file => !file.title.includes('Serialize'),
			// },
			{
				title: 'Others',
				include: () => true,
			},
		],
	},
})

export default config
// @links:
// https://github.com/sw-yx/swyxkit/commit/65ec69e8642a9b4cba1a5180c52cb2b8967f9161
// https://github.com/indaco/histoire-sveltekit
// https://github.com/lucagoslar/sveltekit-fullstack
// https://github.com/usagizmo/webapp-template/tree/main/apps/story
// https://github.com/brilyyy/svelisy
