export const prerender = true
import { error } from '@sveltejs/kit'

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load() {
	try {
		/* @vite-ignore */
		const res = await import(`../../lib/data/privacy.md`)
		return {
			Page: res.default.render().html,
		}
	} catch (err) {
		throw error(404, `Could not load page. ${err}`)
	}
}
