<!-- @credits:
	- https://github.com/sveltejs/kit/blob/c9626a0281f159c9da211e40dfb9291e1baf3894/packages/kit/src/core/config/default-error.html
	- https://github.com/talwat/blog/blob/main/src/lib/Error.svelte
if (dev) console.error({error.stack}) -->
<script>
	export const prerender = true;
	// import { dev } from '$app/environment';
	import { RiveCanvas } from '$lib/components';

	export let page
</script>
<svelte:head>
	<title>Error: {page.status}</title>
	<meta name='description' content='{page.status} error.' />
</svelte:head>
<div class='error-page'>
	<section class='error' aria-label='Content'>
		<span class='status'>{page.status}</span>
		<div class='message'>
			<h1>
				{page.status === 404 ? 'Not Found' : page.error?.message}
			</h1>
			<!--
			{#if dev && error.stack}
				<pre>{page.error.stack}</pre>
			{/if}
			-->
			<!-- https://rive.app/community/2336-4633-icecream-cat/ -->
			<RiveCanvas source='rive/icecream-cat.riv'></RiveCanvas>
		</div>
	</section>
</div>
<style>
	.error-page {
		font-family: ui-sans-serif, system-ui, -apple-system, blinkmacsystemfont, 'Ubuntu', 'Segoe UI Variable Display', 'Segoe UI', 'Helvetica Neue', helvetica, arial;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}

	.error {
		display: flex;
		align-items: center;
		max-width: 36rem;
		margin: 0 1rem;
	}

	.status {
		font-weight: 200;
		font-size: 3rem;
		line-height: 1;
		position: relative;
		top: -0.05rem;
	}

	.message {
		border-left: 1px solid #ccc;
		padding: 0 0 0 1rem;
		margin: 0 0 0 1rem;
		min-height: 2.5rem;
		display: flex;
		align-items: center;
	}

	.message h1 {
		font-weight: 400;
		font-size: 1em;
		margin: 0;
	}
</style>
