import { Buffer } from 'node:buffer'
import { sequence } from '@sveltejs/kit/hooks'
//import * as htmlMinify from '@minify-html/node'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const htmlMinify = require('@minify-html/node')

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
		// https://docs.rs/minify-html/latest/minify_html/struct.Cfg.html
		const minification_options = {
			do_not_minify_doctype: true,
			ensure_spec_compliant_unquoted_attribute_values: true,
			keep_closing_tags: true,
			keep_html_and_head_opening_tags: true,
			keep_spaces_between_attributes: true,
			minify_js: false,
			minify_css: true,
			remove_bangs: false,
		}
		let body = await response.text()
		body = htmlMinify
			.minify(Buffer.from(body, 'utf8'), minification_options)
			.toString('utf-8');
		console.log(`mininfying prerendered request at ${event.url.pathname}...`)
		return new Response(body, {
			status: response.status,
			headers: response.headers
		})
	}
	return response
}

export const handle = sequence(
	rssRedirect,
	minifyHTML
)
// Adapted from
// https://codeberg.org/vhs/void-app/src/branch/trunk/src/hooks.ts
// https://kit.svelte.dev/docs/migrating#integrations-html-minifier
// TODO: Sentry
// https://github.com/HelloUnspecified/SvelteWeekly.com/blob/main/src/hooks/index.js
// https://github.com/pzuraq/pzuraq.com/blob/main/src/hooks.ts
// https://github.com/rodneylab/sveltekit-blog-mdx/blob/main/src/hooks.js
// https://github.com/itssumitrai/online-dress-store/blob/main/src/hooks.js
