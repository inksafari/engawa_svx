export const prerender = true
import { error } from '@sveltejs/kit'

export async function load({ url, fetch }) {
	try {
		// const domain = url.hostname
		/* eslint-disable @typescript-eslint/no-unused-vars */
		const rss = await fetch(`/rss.xml`)
		const currentRoute = url.pathname
		return { currentRoute }
	} catch (err) {
		throw error(500, `${err}`)
	}
}
