import yaml from 'js-yaml'

/**
 * Extract metadata from markdown file.
 * @param slug Article SLUG
 * @param markdown Raw markdown content
 * @returns Metadata of article
 */
const extractMeta = (slug, markdown) => {
	const S = '---\n' // separator
	const raw = markdown.substring(S.length, markdown.indexOf(S, S.length)).trim()
	const frontmatter = yaml.load(raw)
	return {
		...frontmatter,
		slug,
		date: '2022-04-01',
		isPrivate: !!frontmatter.isPrivate,
	}
}

export { extractMeta }
// @credit
// https://github.com/gongbughim/blog/blob/1835c74a26dcee6242be6c92e489c72526408679/src/lib/server/article.ts
