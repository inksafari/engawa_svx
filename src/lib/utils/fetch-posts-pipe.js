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
import MDSVEX_CONFIG from '../../../config/mdsvex.config'

const fetchPosts = () =>
	pipe(
		import.meta.glob('/content/*.md', { eager: true }),
		entries,
		sortBy(([, post]) => post.metadata.date),
		reverse,
		toAsync,
		map(async ([path, post]) => ({
			...post.metadata,
			body: (await compile(post.default.render().html), MDSVEX_CONFIG).code,
			// TODO: slug待修
			slug: pipe(path, split('/'), reverse, take(1), last),
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
