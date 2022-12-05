export const prerender = true

export async function load({ params, data }) {
	const slug = params.slug
	const res = await import(`../../../content/${slug}.md`)
	const content = await res.default // res.default.render().html
	const metadata = { ...res.metadata, ...data, slug }

	return {
		metadata,
		content,
	}
}
