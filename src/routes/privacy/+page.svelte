<!--
	Renders the post at domain.tld/privacy
-->
<script>
	import { getContext } from 'svelte'
	import { Year } from '$lib/components'
	import './../../styles/app_content.scss'

	const site = getContext('site')
	export let data
	$: ({ Page } = data)
</script>
<svelte:head>
	<title>Privacy | {site.title}</title>
</svelte:head>
<div class="container">
	<div id="entry">
		<div class="prose generated-content" aria-label="Content">
			{@html Page}
		</div>
	</div>
	<!-- footer -->
	<footer id="colophon" class="site-footer">
		<p>&#169; <Year from={2022} /> <a href='/'>{site.baseUrl}</a>.</p>
	</footer>
</div>
