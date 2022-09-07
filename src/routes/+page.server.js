/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	await fetch(`${url.origin}/rss.xml`)
	const res = await fetch(`${url.origin}/api/posts.json`)
	const posts = await res.json()
	return (Object.keys(posts).length) ? { posts } : { status: 404 }
}
