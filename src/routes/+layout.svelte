<script>
	import { onMount, setContext } from 'svelte'
	import { prefetchRoutes, afterNavigate } from '$app/navigation'
	import { currentPage } from '../store'
	import './../styles/app.scss'
	import site from '../site.js'
	export let data
	let hueDegree = 0
	let el
	afterNavigate(() => (hueDegree = Math.random() * 360))
	$: currentPage.set(data.path)
	$: el && el.style.setProperty('--c-primary-hue', `${hueDegree | 0}`)
	onMount(async () => {
		prefetchRoutes()
	})
	setContext('site', site)
</script>
<svelte:head>
	<link rel="canonical" href="https://{site.baseUrl}{data.path}" />
	<!--
	<base href="//{site.baseUrl}/">
	<link rel="alternate" type="application/rss+xml" href="https://{domain}/rss.xml" title="{site.title}">
	-->
</svelte:head>
<div class="site-wrapper" bind:this={el}>
	<slot />
</div>

<!-- @links
- https://github.com/furudean/website/blob/11ab25e9d6d9d5716db33b05e8b5632217c1890e/src/routes/__layout.svelte
- https://github.com/josh-collinsworth/joco-sveltekit/blob/main/src/routes/%2Blayout.svelte
-->
