import { readFileSync } from 'fs'
import { compile } from 'mdsvex'
import { basename, extname } from 'path'
// https://mdsvex.pngwn.io/docs#options
import options from '../../../config/mdsvex.config'

export async function process(filePath) {
	const content = readFileSync(filePath, { encoding: 'utf-8' })

	const { code, data } = await compile(content, options)
	const filename = basename(filePath, extname(filePath))
	const parsedHTML = code
		.replace(/<script.*>.*<\/script>/ims, '') // remove the tag script
		.trim()

	return {
		metadata: data.fm,
		file: {
			slug: filename,
			parsedHTML,
		},
	}
}
// @credit
// https://github.com/valmisson/hinario/blob/main/src/lib/shared/markdown.ts
