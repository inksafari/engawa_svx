//import { stat } from 'fs/promises';
import { parse } from 'path'

export async function fetchPosts () {
	const svxPosts = import.meta.glob('/content/*.md') // '', { import: 'metadata', eager: true }
	const iterableFiles = Object.entries(svxPosts)
	const allPosts = await Promise.all(
		iterableFiles.map(async ([filePath, page]) => {
			const {
				// default: { render },
				metadata
			} = await page()
			//const content = render().html
			//const { mtime } = await stat(filePath)
			const slug = `${parse(filePath).name}` // or filePath.split('/').pop().slice(0, -3) or filePath.split('/').pop().split('.').shift()
			// eslint-disable-next-line
			return { ...metadata, slug }
		})
	)
	const allPublishedPosts = allPosts.filter(post => !post.isPrivate)
	const sortedPosts = allPublishedPosts.sort((a, b) => {
		return +new Date(b.date) - +new Date(a.date)
	})

	return sortedPosts
}
// Adapted from
// https://github.com/EstebanBorai/estebanborai.com/blob/main/src/routes/api/notes/index.json.ts
// https://github.com/josh-collinsworth/joco-sveltekit/blob/main/src/lib/assets/js/utils/fetchPosts.ts
// https://github.com/mattjennings/sveltekit-blog-template/blob/main/src/lib/get-posts.js
// https://github.com/importantimport/urara/blob/main/src/lib/utils/posts.ts
// https://github.com/maiertech/maier.tech/blob/main/src/lib/utils/posts.ts
