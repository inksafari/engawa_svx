// syntax highlighting
// https://github.com/shikijs/shiki
import { escapeSvelte } from 'mdsvex'
import { lex, parse as parseFence } from 'fenceparser'
import { renderCodeToHTML, runTwoSlash, createShikiHighlighter } from 'shiki-twoslash'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const shikiTheme = require('./ayu-light.json')

const shikiHighlighter = async (code, lang, meta) => {
	let fence, twoslash
	try {
		fence = parseFence(lex([lang, meta].filter(Boolean).join(' ')))
	} catch (error) {
		throw new Error(`Could not parse the codefence for this code sample \n${code}`)
	}
	if (fence?.twoslash === true) twoslash = runTwoSlash(code, lang)
	const highlighter = await createShikiHighlighter({ theme: shikiTheme })
	const html = renderCodeToHTML(code, lang, fence ?? {}, {}, highlighter, twoslash)
	return `{@html \`${escapeSvelte(html)}\` }`
}

export default shikiHighlighter
// @links:
// https://github.com/VdustR/example-vite-svelte-markdown/blob/main/vite.config.js
// https://github.com/importantimport/urara/blob/main/mdsvex.config.js
// https://github.com/pngwn/MDsveX/issues/212#issuecomment-937574889
// https://github.com/sveltejs/kit/blob/master/sites/kit.svelte.dev/src/lib/docs/server/index.js
