<!--
	Renders the post at domain.tld/[slug]
-->
<script>
	import { browser } from '$app/environment'
	import { getContext } from 'svelte'
	import { afterNavigate } from '$app/navigation'
	import { FormattedDate, Year } from '$lib/components'
	import { Moon, Hemisphere } from 'lunarphase-js'
	import IntersectionObserver from 'svelte-intersection-observer'
	import lazyload from 'vanilla-lazyload'

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload()
	}
	const site = getContext('site')
	export let data, element, intersecting
	const { title, date, updatedOn, prev, next } = data.metadata
	const content = data.content
	const dateObj = new Date(date)
	const moonEmoji = Moon.lunarPhaseEmoji(dateObj, Hemisphere.NORTHERN)

	let hueDegree = 0
	let el
	afterNavigate(() => (hueDegree = Math.random() * 360))
	$: el && el.style.setProperty('--c-primary-hue', `${hueDegree | 0}`)
	//$: isFirstPage = prev !== null
	// {#if !isFirstPage}{else}{/if}
</script>
<svelte:head>
	<title>{title} | {site.title}</title>
	<!--
		<link rel="preconnect" href="https://s3-ap-northeast-1.amazonaws.com" crossorigin="" />
		<link rel="preconnect" href="https://res.cloudinary.com">
		<link rel="dns-prefetch" href="https://res.cloudinary.com">
	-->
</svelte:head>
<main id="main">
	<article id="entry">
		<header class="mdx-header">
			<div class="mdx-page-container entry-header is-huge">
				<!-- TITLE -->
				<IntersectionObserver {element} bind:intersecting>
					<h1 class="title headline" bind:this={element}>{title}</h1>
				</IntersectionObserver>
			</div>
		</header>
		<!-- META -->
		<div class="prose generated-content mdx-wrapper mdx">
			<dl class="entry-details">
				<div>
					<dt>Published at</dt>
					<dd>
						<FormattedDate dateAttr="datePublished" dateString={date} />
					</dd>
				</div>
				{#if updatedOn}
				<div>
					<dt>Updated at</dt>
					<dd>
						<FormattedDate dateAttr="dateUpdated" dateString={updatedOn} />
					</dd>
				</div>
				{/if}
				<div>
					<dt>Moon</dt>
					<dd>
						{moonEmoji}
					</dd>
				</div>
			</dl>
		</div>
		<!-- Content -->
		<div class="prose generated-content mdx-wrapper mdx" aria-label="Content" bind:this={el}>
			<svelte:component this={content} /> <!-- {@html content} -->
		</div>
		<!-- Pagination -->
		<div class="prose generated-content mdx-wrapper mdx">
			{#if prev || next}
			<div class="post-footer">
				<nav class="page-pagination" aria-labelledby="page-pagination">
					<span class="screen-reader-text">This post is part of a series.</span>
					{#if prev}
					<span class="prev stack">
						<a rel="prev" data-sveltekit-reload href=https://{site.baseUrl}/{prev}>&laquo; PREV</a>
					</span>
					{/if}
					{#if next}
					<span class="next stack">
						<a rel="next" data-sveltekit-reload href=https://{site.baseUrl}/{next}>NEXT &raquo;</a>
					</span>
					{/if}
				</nav>
			</div>
			{/if}
		</div>
	</article>
</main>
<!-- footer -->
<footer id="colophon" class="site-footer">
	<div class="container">
		<p>&#169; <Year from={2022} /> <a href='/'>{site.baseUrl}</a>.</p>
	</div>
</footer>
