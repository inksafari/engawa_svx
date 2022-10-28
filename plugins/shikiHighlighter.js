// syntax highlighting
// https://github.com/shikijs/shiki
// https://github.com/shikijs/shiki/blob/main/docs/themes.md
import { lex, parse as parseFence } from 'fenceparser'
import { escapeSvelte } from 'mdsvex'
import { createShikiHighlighter, renderCodeToHTML, runTwoSlash } from 'shiki-twoslash'
// import shikiTheme from './ayu-light.json' assert { type: 'json' }
const shikiTheme = 'github-light'

const shikiHighlighter = async (code, lang, meta) => {
	let fence, twoslash
	try {
		fence = parseFence(lex([lang, meta].filter(Boolean).join(' ')))
	} catch (error) {
		throw new Error(`Could not parse the codefence for this code sample \n${code}`)
	}
	if (fence?.twoslash === true) {
		twoslash = runTwoSlash(code, lang)
		code = twoslash.code
	}
	const highlighter = await createShikiHighlighter({ theme: shikiTheme })
	const html = renderCodeToHTML(code, lang, fence ?? {}, {}, highlighter, twoslash)
	// return `{@html \`<div class="relative">${escapeSvelte(html)}</div>\` }`
	return `{@html \`${escapeSvelte(html)}\` }`
}

export default shikiHighlighter
// @links:
// https://github.com/importantimport/urara/blob/main/mdsvex.config.ts
// https://github.com/pngwn/MDsveX/issues/212#issuecomment-937574889
// https://github.com/sveltejs/kit/blob/master/sites/kit.svelte.dev/src/lib/docs/server/index.js
