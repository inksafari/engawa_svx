// https://github.com/kudadam/kudadam.com/blob/master/src/routes/blog/%5Bslug%3Dslug%5D/%2Bpage.server.js
/** @type {import('./$types').PageData} */
export async function load({ params }) {
	const slug = params.slug
	const readingTimeModule = await import('$lib/utils/reading-time').then(module => module.default)
	const entryContent = await import(`../../../content/${slug}.md`).then(module => module.default)

	const html = entryContent.render()['html']
	const readingTime = readingTimeModule(html)
	return {
		readingTime,
	}
}
