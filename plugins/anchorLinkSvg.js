import { s } from 'hastscript'

/* https://feathericons.com/ */
const anchorLinkSvg = s(
	'svg',
	{
		xmlns: 'http://www.w3.org/2000/svg',
		viewBox: '0 0 24 24',
		fill: 'none',
		stroke: 'currentColor',
		'stroke-width': '2',
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round'
	},
	[
		s('path', { d: 'M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3' }),
		s('line', { x1: '8', y1: '12', x2: '16', y2: '12' })
	]
)
export default anchorLinkSvg
// copied from
// https://github.com/pinanek23/site/blob/main/mdsvex/linkSvg.js
// https://github.com/GrygrFlzr/kit-docs/blob/main/mdsvex.config.cjs
