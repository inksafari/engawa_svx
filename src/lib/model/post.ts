/* usage:
	import type { ArticleMeta } from '$lib/model/post'
	export let post: ArticleMeta
 */

/** Metadata of article */
export type ArticleMeta = {
	title: string
	date: Date
	updatedOn?: Date
	isPrivate?: boolean
	prev?: string
	next?: string
}
