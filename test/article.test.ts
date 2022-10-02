import outdent from 'outdent'
import { describe, expect, test } from 'vitest'
import { type ArticleMeta } from './../src/lib/model/post'
import { extractMeta } from './../src/lib/utils/test-utils'

describe('extractMeta()', () => {
	test('Basic', () => {
		const md = outdent`
			---
			title: TITLE
			date: '2022-04-01'
			isPrivate: true
			---
			Hello
		`
		const actual = extractMeta('SLUG', md, new Date('2022-04-01T00:00:00.000Z'))
		const expected: ArticleMeta = {
			slug: 'SLUG',
			title: 'TITLE',
			date: '2022-04-01',
			isPrivate: true,
		}
		expect(actual).toEqual(expected)
	})

	test('"isPrivate" should be false if omitted', () => {
		const md = outdent`
			---
			title: TITLE
			date: '2022-04-01'
			---
			Hello
		`
		expect(extractMeta('SLUG', md, new Date('2022-04-01T00:00:00.000Z')).isPrivate).toBe(false)
	})
})
// @credit
// https://github.com/gongbughim/blog/blob/1835c74a26dcee6242be6c92e489c72526408679/src/lib/server/article.test.ts
