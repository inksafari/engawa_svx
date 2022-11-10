/**
 * Generates the src string given the size and format. Used with
 * rollup-generate-image-sizes
 *
 * @param srcString
 * @param size
 * @param format
 * @returns {`${*}@${string}w.jpg`}
 */
export const sizeGen = (srcString, size, format) => {
	const imagePathSplit = srcString.split('.')
	const imagePathPre = imagePathSplit.slice(0, -1).join('.')
	const defaultFormat = imagePathSplit[imagePathSplit.length - 1]
	return `${imagePathPre}@${size}w.${format || defaultFormat}`
}
// https://github.com/nucliweb/image-element
// https://github.com/kwchang0831/svelte-QWER/blob/main/src/lib/components/image_zoom.svelte
// https://github.com/ngalaiko/galaiko.rocks/blob/master/src/lib/Image.svelte
