import { h } from 'hastscript'
import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import shikiHighlighter from './../plugins/shikiHighlighter.js'
// -- remark --
// import headings from '@vcarl/remark-headings'
import plantuml from '@akebifiky/remark-simple-plantuml'
import relativeImages from 'mdsvex-relative-images'
import pangu from 'remark-pangu'
import description from './../plugins/remark-description.js'
import typographer from './../plugins/remark-typographer.js'
// -- rehype --
import externalLinks from 'rehype-external-links'
import titleFigure from 'rehype-title-figure'
// import Jargon from 'rehype-jargon'
// import jargonfile from './jargonfile'
import { rehypeAccessibleEmojis as a11yEmoji } from 'rehype-accessible-emojis'
import autoLinkHeadings from 'rehype-autolink-headings'
import slug from 'rehype-slug'

/** @type {import('mdsvex').MdsvexOptions} */
const config = defineConfig({
	extensions: ['.svx', '.md'],
	highlight: { highlighter: shikiHighlighter },
	smartypants: {
		dashes: 'oldschool',
	},
	remarkPlugins: [
		description,
		typographer,
		[
			plantuml,
			{ baseUrl: 'https://www.plantuml.com/plantuml/svg' },
		],
		relativeImages,
		[
			pangu,
			// https://github.com/vincentbel/remark-pangu#default-options
			{
				inlineCode: true,
			},
		],
	],
	rehypePlugins: [
		// [ Jargon, { jargon: jargonfile}],
		a11yEmoji,
		titleFigure,
		[
			externalLinks,
			{
				rel: ['nofollow', 'noopener', 'noreferrer', 'external'],
				target: '_blank',
			},
		],
		slug,
		[
			autoLinkHeadings,
			{
				behavior: 'prepend',
				content: [h('span.screen-reader-text', 'permalink'), h('span', { ariaHidden: true }, '#')],
			},
		],
	],
})

export default config
