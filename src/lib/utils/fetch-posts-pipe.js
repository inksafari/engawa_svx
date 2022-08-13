import { compile } from 'mdsvex'
import {
	entries,
	find,
	last,
	map,
	pipe,
	reverse,
	sortBy,
	split,
	take,
	toArray,
	toAsync,
} from '@fxts/core'

const fetchPosts = () =>
	pipe(
		import.meta.globEager('/content/*.md'),
		entries,
		sortBy(([, post]) => post.metadata.date),
		reverse,
		toAsync,
		map(async ([path, post]) => ({
			...post.metadata,
			body: (await compile(post.default.render().html)).code,
			slug: pipe(path, split('/'), reverse, take(2), last),
		})),
		toArray,
	);

const fetchPost = async (slug) =>
	pipe(
		fetchPosts(),
		find((post) => slug === post.slug),
	);

const getLatestUpdate = () =>
	pipe(
		fetchPosts(),
		sortBy((post) => post.updatedOn ?? post.date),
		last,
		(post) => post.updatedOn ?? post.date,
	);

export { getLatestUpdate, fetchPost, fetchPosts };

// Adapted from
// https://github.com/croccifixio/blog/blob/main/src/lib/utils/blog.js
