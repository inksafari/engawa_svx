import { sequence } from '@sveltejs/kit/hooks'
import { minifyHTML } from './minify.server.js'
import { urlRedirect } from './redirects.server.js'
// import { initSentryCF } from './sentry.server.js'
// import { customHeaders } from './headers-setup.server.js'

const handle = sequence(
	urlRedirect,
	minifyHTML
)

export default handle
// ------------------------------------------------------------------------------
// TODO: csrf
// https://github.com/juzerzarif/juzerzarif.com/tree/main/src/hooks
