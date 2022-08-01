<!--
	Renders the post at domain.tld/[slug]
-->
<script context="module">
	/**
	* @type {import('@sveltejs/kit').Load}
	*/
	export async function load ({ params }) {
		try {
			const slug = params.slug
			const res = await import(`../../content/${slug}.md`)
			return {
				props: {
					metadata: res.metadata,
					content: res.default
				}
			}
		} catch (error) {
			return {
				status: 404,
				error: new Error('Could not load page')
			}
		}
	}
</script>
<script>
	import { FormattedDate, Year } from '$lib/components'
	import { appendScriptToHead } from '$lib/utils/append-script-to-head.js'
	import { onMount, getContext } from 'svelte'
	import { Moon, Hemisphere } from 'lunarphase-js'

	const site = getContext('site')
	const loadEmbeddedTweets = () => {
		const allTweets = document.getElementsByClassName('twitter-tweet')
		if (allTweets.length) {
			appendScriptToHead('https://platform.twitter.com/widgets.js')
		}
	}
	onMount(() => {
		loadEmbeddedTweets()
	})
	export let metadata, content
	$: ({ title, date, updatedOn, prev, next } = metadata)
	const dateObj = new Date(date)
	const moonEmoji = Moon.lunarPhaseEmoji(dateObj, Hemisphere.NORTHERN)
</script>
<svelte:head>
	<title>{title} | {site.title}</title>
	<!--
		<link rel="preconnect" href="https://s3-ap-northeast-1.amazonaws.com" crossorigin="" />
		<link rel="preconnect" href="https://res.cloudinary.com">
		<link rel="dns-prefetch" href="https://res.cloudinary.com">
	-->
</svelte:head>
<div class="container">
	<div id="entry">
		<!-- TITLE -->
		<div class="entry-header is-huge">
			<h1 class="headline">{title}</h1>
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
			<svelte:component this={content} />
		</div>
		<!-- Pager -->
		{#if prev || next}
		<div class="post-footer">
			<nav class="page-pagination" aria-labelledby="page-pagination">
				<span class="screen-reader-text">This post is part of a series.</span>
				{#if prev}
				<span class="prev stack">
					<a rel="prev" href=https://{site.baseUrl}/{prev}>&laquo; PREVIOUS ARTICLE</a>
				</span>
				{/if}
				{#if next}
				<span class="next stack">
					<a rel="next" href=https://{site.baseUrl}/{next}>NEXT ARTICLE &raquo;</a>
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
