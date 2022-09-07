// @link: https://github.com/tidaltheory/tidaltheory-www/blob/main/lens.config.mjs
const COVER_IMAGES = [
	'**/daniil-komov-qEW9nEZPYDo-unsplash.jpg',
]

export default {
	store: 'content/imagemeta.json',
	useFilenameDirectory: true,
	thumbnails: [
		{ 'cover-sm': { files: COVER_IMAGES, width: 300, height: 250 } },
		{ 'cover-md': { files: COVER_IMAGES, width: 600, height: 500 } },
		{ 'cover-lg': { files: COVER_IMAGES, width: 1200, height: 1000 } },
	],
}
