<script context='module'>
	//export const prerender = true
	/**
	* @type {import('@sveltejs/kit').Load}
	*/
	export async function load ({ fetch }) {
		await fetch('/rss.xml')
		const data = await fetch('/api/posts.json').then((res) => res.clone().json())
		return (Object.keys(data).length) ? { props: { data } } : { status: 404 }
	}
</script>
<script>
	import { getContext } from 'svelte'
	import { fly } from 'svelte/transition'
	import { quadOut } from 'svelte/easing'
	import { formatDistance, differenceInDays, format } from 'date-fns'
	// import { zhTW } from 'date-fns/locale/index.js'

	export let data
	const posts = data.filter(post => !post.isPrivate)
	const site = getContext('site')
	const count = posts.length
</script>
<svelte:head>
	<title>{site.title}</title>
</svelte:head>
<div class="wrapper">
	<header class="stack site-header">
		<h3>ramblings</h3>
	</header>
	<section class="stack post-listing">
		<ol start='{count}' reversed>
			{#each posts as { title, slug, date }, i}
			<li class='post-stub' in:fly={{ duration: 700, y: 10, easing: quadOut, delay: i * 200 + 300 }} >
				<a class='post-link' sveltekit:prefetch href={`/${slug}`}>
					<h3>{title}</h3>
				</a>
				<div class='post-meta'>
					<span class='screen-reader-text'>Published on </span>
					<time datetime='{date}'>
						{differenceInDays(new Date(), new Date(date)) > 179
							? `${formatDistance(new Date(date), new Date(), {
								addSuffix: true
								// locale: zhTW
							})}`
							: format(new Date(date), 'MMM dd, yyyy')
						}
					</time>
				</div>
			</li>
			{/each}
		</ol>
	</section>
</div>
