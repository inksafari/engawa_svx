import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import containers from 'remark-containers'
import description from './../plugins/remark-description.js'
import shikiHighlighter from './../plugins/shikiHighlighter.js'
// import remarkEmbedder from '@remark-embedder/core'
// import oembedTransformer from '@remark-embedder/transformer-oembed'
import plantuml from '@akebifiky/remark-simple-plantuml'
import relativeImages from 'mdsvex-relative-images'
import { rehypeAccessibleEmojis as a11yEmoji } from 'rehype-accessible-emojis'
// import Jargon from 'remark-jargon'
// import jargonfile from './jargonfile'
import addClasses from 'rehype-add-classes'
import externalLinks from 'rehype-external-links'
import slug from 'rehype-slug'
import titleFigure from 'rehype-title-figure'

// headings
import autoLinkHeadings from 'rehype-autolink-headings'
// import anchorLinkSvg from './../plugins/anchorLinkSvg.js'
// https://github.com/jakzo/blog/blob/main/src/lib/markdown/headings.ts
// https://github.com/skamansam/skamansam.github.io/blob/svelte/mdsvex.config.js

/** @type {import('mdsvex').MdsvexOptions} */
const config = defineConfig({
	extensions: ['.svx', '.md'],
	highlight: { highlighter: shikiHighlighter },
	smartypants: {
		dashes: 'oldschool',
	},
	remarkPlugins: [
		[
			description,
			// @link:
			// https://github.com/svemat01/blog.helgesson.dev/blob/fd719f4865f1cd8c1ec1a9d0088c55b95ad332fd/mdsvex.config.js
			containers,
			{
				default: true,
				custom: [
					{
						type: 'warning',
						element: 'div',
						transform: function(node, config, tokenize) {
							console.log({ config })
							node.data.hProperties = {
								className: `remark-container warning ${config}`,
							}
							node.children.unshift({
								type: 'p',
								data: {
									hName: 'p',
									hProperties: {
										className: 'title',
									},
								},
								children: tokenize('WARNING'),
							})
						},
					},
					{
						type: 'tip',
						element: 'div',
						transform: function(node, config, tokenize) {
							node.data.hProperties = {
								className: `remark-container tip ${config}`,
							}
							node.children.unshift({
								type: 'p',
								data: {
									hName: 'p',
									hProperties: {
										className: 'title',
									},
								},
								children: tokenize('TIP'),
							})
						},
					},
				],
			},
		],
		// [ Jargon, { jargon: jargonfile}],
		// [remarkEmbedder.default, {transformers: [oembedTransformer.default]}],
		[
			plantuml,
			{ baseUrl: 'https://www.plantuml.com/plantuml/svg' },
		],
		relativeImages,
	],
	rehypePlugins: [
		a11yEmoji,
		titleFigure,
		[
			addClasses,
			{
				'ul,ol': 'list',
			},
		],
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
				behavior: 'wrap',
				// behavior: 'prepend',
				// content: () => anchorLinkSvg
			},
		],
	],
})

export default config
