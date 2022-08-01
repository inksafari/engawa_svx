import { sequence } from '@sveltejs/kit/hooks'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const mf = require('@minify-html/js')

const rssRedirect = async ({ event, resolve }) => {
	if (event.url.pathname === '/feed') {
		return Response.redirect(`${event.url.origin}/rss.xml`, 301)
	}
	return await resolve(event)
}

const minifyHTML = async ({ event, resolve }) => {
	const response = await resolve(event)
	const header = response.headers.get('content-type')
	if (
		header === 'text/html'
	) {
		const config = mf.createConfiguration({
			minify_js: false,
			minify_css: false
		})
		let body = await response.text()
		body = mf.minify(body, config).toString()
		console.log(`mininfying prerendered request at ${event.url.pathname}...`)
		return new Response(body, response)
	}
	return response
}

export const handle = sequence(
	rssRedirect,
	minifyHTML
)
// Adapted from
// https://codeberg.org/vhs/void-app/src/branch/trunk/src/hooks.ts
// TODO: Sentry
// https://github.com/HelloUnspecified/SvelteWeekly.com/blob/main/src/hooks/index.js
// https://github.com/pzuraq/pzuraq.com/blob/main/src/hooks.ts
// https://github.com/rodneylab/sveltekit-blog-mdx/blob/main/src/hooks.js
