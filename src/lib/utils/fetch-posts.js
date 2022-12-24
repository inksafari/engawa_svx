import { Post } from '$lib/model/post'
import { find, pipe } from '@fxts/core'
import { parse } from 'path'
import z from 'zod'
const Posts = z.array(Post)

const fetchPosts = async () => {
	const svxPosts = import.meta.glob('/content/*.md')
	const iterableFiles = Object.entries(svxPosts)
	// 取代原本的Promise.all(arr.map(async (...) => ...))
	const postPromises = []
	for (const [filePath, page] of iterableFiles) {
		const promise = page().then(post => {
			const rawSlug = `${parse(filePath).name}`
			// const rawHTML = post.default.render?.().html

			return {
				slug: rawSlug,
				...post.metadata,
				// html: rawHTML,
			}
		})
		postPromises.push(promise)
	}
	const allPosts = await Promise.all(postPromises).then(p => Posts.parse(p))
	const allPublishedPosts = allPosts.filter(post => !post.isPrivate)
	const sortedPosts = allPublishedPosts.sort((a, b) => {
		return new Date(b.date).valueOf() - new Date(a.date).valueOf()
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
// https://github.com/matiasfha/matias-sveltekit/blob/main/web/src/lib/api/getPosts.ts
// https://github.com/mattjennings/sveltekit-blog-template/blob/main/src/lib/data/posts.js
// https://github.com/josh-collinsworth/joco-sveltekit/blob/main/src/lib/assets/js/utils/fetchPosts.ts
// https://github.com/aaronkai/portfolio-sveltekit/blob/main/src/routes/blogposts.json/%2Bserver.js
// https://github.com/matthewsimo/matthewsimo.com/blob/027d6d0f4a670a4f84d3629503660d1530f71742/src/routes/(page)/posts/%2Bpage.ts
// https://github.com/mattcroat/sveltekit-blog/search?q=postSchema
