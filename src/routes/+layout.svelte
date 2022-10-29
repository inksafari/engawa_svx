<script>
	import { onMount, setContext } from 'svelte'
	import { prefetchRoutes } from '$app/navigation'
	import { currentPage } from '$lib/utils/store'
	import site from '$lib/site.js'
	export let data

	$: currentPage.set(data.path)
	onMount(async () => {
		prefetchRoutes()
	})
	setContext('site', site)
</script>
<svelte:head>
	<link rel="canonical" href="https://{site.baseUrl}{data.path}" />
	<link rel="alternate" type="application/rss+xml" href="https://{site.baseUrl}/rss.xml" title="RSS for {site.baseUrl}">
	<!--
	<base href="//{site.baseUrl}/">
	-->
</svelte:head>
<slot />
<style lang="scss" global>
	@import "../styles/app.scss";
	@import "../styles/page_archive.scss"
</style>
<!-- @links
- https://github.com/furudean/website/blob/11ab25e9d6d9d5716db33b05e8b5632217c1890e/src/routes/__layout.svelte
- https://github.com/josh-collinsworth/joco-sveltekit/blob/main/src/routes/%2Blayout.svelte
-->
