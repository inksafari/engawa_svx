import { process } from '$lib/utils/markdown'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET ({ params }) {
	try {
		const slug = params.slug
		const content = process(`content/${slug}.md`)
		const post = JSON.stringify(content)
		const headers = {
			'Cache-Control': `max-age=0, s-max-age=${600}`,
			'Content-Type': 'application/json'
		}
		return {
			headers,
			body: JSON.stringify(post)
		}
	} catch (error) {
		return {
			status: 404,
			body: {
				error: 'Could not fetch post. ' + error
			}
		}
	}
}
