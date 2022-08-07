import { fetchPosts } from '$lib/utils/fetch-posts'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	try {
		const posts = await fetchPosts()
		const headers = {
			'Cache-Control': `max-age=0, s-max-age=${600}`,
			'Content-Type': 'application/json'
		}
		return {
			headers,
			body: JSON.stringify(posts)
		}
	} catch (error) {
		return {
			status: 404,
			body: {
				error: 'Could not fetch posts. ' + error
			}
		}
	}
}
