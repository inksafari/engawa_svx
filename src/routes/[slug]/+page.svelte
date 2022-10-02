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
	import './../../styles/app_layout.scss'

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
<div class="container" bind:this={el}>
	<div id="entry">
		<!-- TITLE -->
		<div class="entry-header is-huge">
			<IntersectionObserver {element} bind:intersecting>
				<h1 class="headline" bind:this={element}>{title}</h1>
			</IntersectionObserver>
		</div>
		<!-- META -->
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
			<!-- TODO: 縮減間隔 -->
			<div>
				<dt>Moon</dt>
				<dd>
					{moonEmoji}
				</dd>
			</div>
		</dl>
		<!-- Content -->
		<div class="prose generated-content" aria-label="Content">
			<svelte:component this={content} /> <!-- {@html content} -->
		</div>
		<!-- Pagination -->
		{#if prev || next}
		<div class="post-footer">
			<nav class="page-pagination" aria-labelledby="page-pagination">
				<span class="screen-reader-text">This post is part of a series.</span>
				{#if prev}
				<span class="prev stack">
					<a rel="prev" sveltekit:reload href=https://{site.baseUrl}/{prev}>&laquo; PREVIOUS ARTICLE</a>
				</span>
				{/if}
				{#if next}
				<span class="next stack">
					<a rel="next" sveltekit:reload href=https://{site.baseUrl}/{next}>NEXT ARTICLE &raquo;</a>
				</span>
				{/if}
			</nav>
		</div>
		{/if}
	</div>
	<!-- footer -->
	<footer id="colophon" class="site-footer">
		<p>&#169; <Year from={2022} /> <a href='/'>{site.baseUrl}</a>.</p>
	</footer>
</div>
