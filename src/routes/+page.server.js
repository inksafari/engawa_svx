/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	await fetch(`/rss.xml`)
	const res = await fetch(`/api/posts.json`)
	const posts = await res.json()
	return (Object.keys(posts).length) ? { posts } : { status: 404 }
}
