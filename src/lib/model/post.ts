/* usage:
	import type { ArticleMeta } from '$lib/model/post'
	export let post: ArticleMeta
 */
import z from 'zod'

export const Post = z.lazy(() =>
	z.object({
		title: z.string(),
		date: z.string(),
		updatedOn: z.string().optional(),
		isPrivate: z.boolean().optional(),
		prev: z.string().optional(),
		next: z.string().optional(),
		banner: z.string().optional(),
		bannerCredit: z.string().optional(),
		/* $lib/utils/fetch-posts.js */
		slug: z.string(),
		html: z.string().optional(),
	})
)

/** Metadata of article */
export type ArticleMeta = z.infer<typeof Post>
