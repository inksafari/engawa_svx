// @ts-nocheck
export async function fetchPosts () {
	const svxPosts = import.meta.glob('/content/*.md')
	const iterableFiles = Object.entries(svxPosts)
	const allPosts = await Promise.all(
		iterableFiles.map(async ([filePath, page]) => {
			const {
				// default: { render },
				metadata
			} = await page()
			//const content = render().html
			const slug = filePath.split('/').pop().split('.').shift()
			// eslint-disable-next-line
			return { ...metadata, slug }
		})
	)
	const sortedPosts = allPosts.sort((a, b) => {
		return +new Date(b.date) - +new Date(a.date)
	})

	return sortedPosts
}
// Adapted from
// https://github.com/EstebanBorai/estebanborai.com/blob/main/src/routes/api/notes/index.json.ts
// https://github.com/josh-collinsworth/joco-sveltekit/blob/main/src/lib/assets/js/utils/fetchPosts.ts
// https://github.com/mattjennings/sveltekit-blog-template/blob/main/src/lib/get-posts.js
