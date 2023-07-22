export const prerender = true
import site from '$lib/site.js'
import { fetchPosts } from '$lib/utils/fetch-posts'
import { DOMParser, XMLSerializer } from '@xmldom/xmldom'

// TODO: json feed
// https://github.com/importantimport/urara/blob/main/src/routes/feed.json/%2Bserver.ts
export async function GET() {
	const allPosts = await fetchPosts()
	const data = feedRender(allPosts)
	const parser = new DOMParser()
	const xml = parser.parseFromString(data, 'application/xml')
	const body = new XMLSerializer().serializeToString(xml)
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600', // 1 hr
		'Content-Type': 'application/xml',
	}
	return new Response(body, { headers: headers })
}
const rawStrings = String.raw
const feedRender = items =>
	rawStrings`<?xml version="1.0" encoding="UTF-8" ?>
<?xml-stylesheet href="/rss.xsl" type="text/xsl" media="screen" ?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
	<channel>
		<title>${site.title}</title>
		<link>https://${site.baseUrl}</link>
		<description>${site.description}</description>
		<atom:link href="https://${site.baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
		<language>zh-Hant-TW</language>
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		${items.map(feedItem).join('')}
	</channel>
</rss>`

const feedItem = item =>
	rawStrings`<item>
		<title>${item.title}</title>
		<link>https://${site.baseUrl}/${item.slug}</link>
		<guid isPermaLink="true">https://${site.baseUrl}/${item.slug}</guid>
		<pubDate>${new Date(item.date).toDateString()}</pubDate>
	</item>`
