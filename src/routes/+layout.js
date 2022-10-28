export const prerender = true
import { error } from '@sveltejs/kit'

export async function load({ url, fetch }) {
	try {
		const domain = url.hostname
		const rss = await fetch(`/rss.xml`)
		const path = url.pathname
		return { path }
	} catch (err) {
		throw error(500, `${err}`)
	}
}
