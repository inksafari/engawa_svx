/*
	https://github.com/dzcpy/transliteration
		or @lazy-cjk/slugify
	usage:
	import { slugify } from '$lib/utils/slugify'
	const slug = slugify(rawSlug)
 */
// FIXME: 遇到中文反而卡住
import { slugify as _slugify } from 'transliteration'

export function slugify(str) {
	return _slugify(str, {
		lowercase: true,
		separator: '_',
	})
}
