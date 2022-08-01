/// <reference types="@sveltejs/kit" />
/// <reference types="vite/client" />
/// <reference types="mdsvex/globals" />
/// <reference types="vitest" />

declare module '*.md' {
	import { SvelteComponent } from 'svelte'
	const content = SvelteComponent
	export default content
}

declare module '*.svx' {
	export { SvelteComponentDev as default } from 'svelte/internal'
	export { metadata }
}
