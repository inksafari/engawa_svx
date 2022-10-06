import { parse } from 'path'
// import { stat } from 'fs/promises'
import { find, pipe } from '@fxts/core'

const fetchPosts = async () => {
	const svxPosts = import.meta.glob('/content/*.md') // '', { import: 'metadata', eager: true }
	const iterableFiles = Object.entries(svxPosts)
	const allPosts = await Promise.all(
		iterableFiles.map(async ([filePath, page]) => {
			const {
				// default: { render },
				metadata,
			} = await page()
			// const content = render().html
			// const mtime = (await stat(filePath)).mtime
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

const fetchPost = async slug =>
	pipe(
		fetchPosts(),
		find(post => slug === post.slug)
	)

export { fetchPost, fetchPosts }

// Adapted from
// https://github.com/croccifixio/blog/blob/main/src/lib/utils/blog.js
// https://github.com/maiertech/maier.tech/blob/main/src/lib/utils/posts.ts
// https://github.com/mattjennings/sveltekit-blog-template/blob/main/src/lib/get-posts.js
// https://github.com/josh-collinsworth/joco-sveltekit/blob/main/src/lib/assets/js/utils/fetchPosts.ts
