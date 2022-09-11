import { readFileSync } from 'fs'
import { basename, extname } from 'path'
import { compile } from 'mdsvex'
// https://mdsvex.pngwn.io/docs#options
//import options from '../../../config/mdsvex.config'
// or
//const options = {
//	remarkPlugins: [remarkBreaks]
//}

export async function process (filePath) {
	const content = readFileSync(filePath, { encoding: 'utf-8' })

	//const { code, data } = await compile(content, options)
	const { code, data } = await compile(content)
	const filename = basename(filePath, extname(filePath))
	const parsedHTML = code
		.replace(/<script.*>.*<\/script>/ims, '') // remove the tag script
		.trim()

	return {
		metadata: data.fm,
		file: {
			slug: filename,
			parsedHTML
		}
	}
}
// @credit
// https://github.com/valmisson/hinario/blob/main/src/lib/shared/markdown.ts
