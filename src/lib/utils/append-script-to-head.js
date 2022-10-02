/*
 * // https://github.com/inksafari/engawa/blob/1a0eba590568569d0c571f82bd2c167f32481749/src/routes/%5Bslug%5D.svelte
 * [slug]/+page.svelte
 * <script>
 * import { appendScriptToHead } from '$lib/utils/append-script-to-head.js'
 * import { onMount } from 'svelte'
 *
 * const loadEmbeddedTweets = () => {
 *	const allTweets = document.getElementsByClassName('twitter-tweet')
 *	if (allTweets.length) {
 *		appendScriptToHead('https://platform.twitter.com/widgets.js')
 *	}
 * }
 *	onMount(() => {
 *		loadEmbeddedTweets()
 * })
 * </script>
*/
export function appendScriptToHead(src, async = true) {
	const head = document.getElementsByTagName('head')[0]
	const script = document.createElement('script')
	script.src = src
	script.type = 'text/javascript'
	script.async = async
	script.setAttribute('charset', 'utf-8')

	head.appendChild(script)
}
