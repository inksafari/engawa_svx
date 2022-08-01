<script context="module">
	/**
	* @type {import('@sveltejs/kit').Load}
	*/
	export async function load ({ url }) {
		try {
			// const domain = url.hostname
			const path = url.pathname
			return { props: { path } }
		} catch (err) { console.log(err) }
	}
</script>

<script lang="ts">
	import { onMount, setContext } from 'svelte'
	import { prefetchRoutes, afterNavigate } from '$app/navigation'
	import { currentPage } from '../store'
	import './../styles/app.scss'
	import site from '../site.js'
	export let path
	let hueDegree = 0
	let el = null
	afterNavigate(() => (hueDegree = Math.random() * 360))
	$: currentPage.set(path)
	$: if (el) {
		const html = el.ownerDocument!.firstElementChild
		html.style.setProperty('--c-primary-hue', `${hueDegree | 0}`)
	}
	onMount(async () => {
		prefetchRoutes()
	})
	setContext('site', site)
</script>

<svelte:head>
	<link rel="canonical" href="https://{site.baseUrl}{path}" />
	<!--
	<base href="//{site.baseUrl}/">
	<link rel="alternate" type="application/rss+xml" href="https://{domain}/rss.xml" title="{site.title}">
	-->
</svelte:head>
<div bind:this={el}>
	<slot />
</div>

<!-- @links
- https://github.com/furudean/website/blob/11ab25e9d6d9d5716db33b05e8b5632217c1890e/src/routes/__layout.svelte
- https://github.com/josh-collinsworth/joco-sveltekit/blob/main/src/routes/__layout.svelte
-->
