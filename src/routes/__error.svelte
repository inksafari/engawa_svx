<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load ({ error, status }) {
		return { props: { error, status } }
	}
</script>
<script>
import { dev } from '$app/env'
import { onMount } from 'svelte'
import { currentPage } from '../store'
export let error, status
const offline = typeof navigator !== 'undefined' && navigator.onLine === false
let message = offline ? 'Find the internet and try again' : error.message
let title = offline ? 'Offline' : status
if (title === '404') {
	title = 'Page not found :('
	message = 'Sorry! If you think this URL is broken, please let me know!'
}
// https://github.com/josh-collinsworth/sveltekit-blog-starter/blob/main/src/routes/__error.svelte
onMount(() => {
	if ($currentPage.includes('rss.xml')) {
		window.location.reload()
	}
})
</script>
<svelte:head>
	{title}
</svelte:head>
<div class="page-content" aria-label="Content">
	<section>
		<h1>Error: {title}</h1>

		<p>{message}</p>

		{#if dev && error.stack}
			<pre>{error.stack}</pre>
		{/if}
	</section>
</div>
<style>
	h1,
	p {
		margin: 0 auto;
	}
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	p {
		margin: 1em auto;
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
