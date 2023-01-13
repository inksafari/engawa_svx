<!--
	https://github.com/rodneylab/sveltekit-blog-mdx/blob/47810631db3bdd6cc8805effabf90b5caa53d5b6/src/routes/%5Bslug%5D/%2Blayout.svelte
-->
<script>
	import lazyload from 'vanilla-lazyload'
	import { browser } from '$app/environment'
	import '../../styles/app_content.scss'

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload()
	}
</script>
<slot />
