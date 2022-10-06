<script>
	import { getContext } from 'svelte'
	import { fly } from 'svelte/transition'
	import { quadOut } from 'svelte/easing'
	import { formatDistance, differenceInDays, format } from 'date-fns'
	// import { zhTW } from 'date-fns/locale/index.js'

	export let data
	const site = getContext('site')
	const count = data.posts.length
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
			{#each data.posts as { title, slug, date }, i}
			<li class='post-stub' in:fly={{ duration: 700, y: 10, easing: quadOut, delay: i * 200 + 300 }} >
				<a class='post-link' data-sveltekit-prefetch href={`/${slug}`}>
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
