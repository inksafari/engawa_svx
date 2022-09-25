export const prerender = 'auto'
import { fetchPosts } from '$lib/utils/fetch-posts'
import { error } from '@sveltejs/kit'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	try {
		const posts = await fetchPosts()
		const headers = {
			'Cache-Control': `max-age=0, s-max-age=${600}`,
			'Content-Type': 'application/json'
		}
		return new Response(JSON.stringify(posts), { headers: headers })
	} catch (err) {
		throw error(500, `Could not fetch posts. ${err}`)
	}
}
