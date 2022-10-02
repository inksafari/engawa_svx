export const prerender = 'auto'

import { error } from '@sveltejs/kit'
// import { fetchPost } from '$lib/utils/fetch-posts'
import { process } from '$lib/utils/fetch-content'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
	try {
		const slug = params.slug
		// wo/ content
		// const post = await fetchPost(slug)
		const { metadata, file } = await process(`content/${slug}.md`)
		const post = {
			title: metadata.title,
			date: metadata.date,
			updatedOn: metadata.updatedOn,
			slug: file.slug,
			content: file.parsedHTML,
		}
		const headers = {
			'Cache-Control': `max-age=0, s-max-age=${600}`,
			'Content-Type': 'application/json',
		}
		return new Response(JSON.stringify(post), { headers: headers })
	} catch (err) {
		throw error(500, `Could not fetch posts. ${err}`)
	}
}
