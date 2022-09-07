import { process } from '$lib/utils/markdown'
import { error } from '@sveltejs/kit'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET ({ params }) {
	try {
		const slug = params.slug
		const post = process(`content/${slug}.md`)
		const headers = {
			'Cache-Control': `max-age=0, s-max-age=${600}`,
			'Content-Type': 'application/json'
		}
		return new Response(JSON.stringify(post), { headers: headers })
	} catch (err) {
		throw error(500, `Could not fetch posts. ${err}`)
	}
}
