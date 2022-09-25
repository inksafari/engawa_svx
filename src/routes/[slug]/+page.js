export const prerender = 'auto'
import { error } from '@sveltejs/kit'

export async function load ({ params }) {
	try {
		const slug = params.slug
		const res = await import(`../../../content/${slug}.md`)
		return {
			metadata: res.metadata,
			content: res.default // res.default.render().html
		}
	} catch(err) {
		throw error(404, `Could not load page. ${err}`);
	}
}
