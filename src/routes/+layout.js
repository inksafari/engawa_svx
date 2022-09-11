import { error } from '@sveltejs/kit'

export const prerender = true
export async function load ({ url }) {
	try {
		// const domain = url.hostname
		const rss = await fetch(`${url.origin}/rss.xml`)
		const path = url.pathname
		return { path }
	} catch (err) { throw error(500, `${err}`) }
}
