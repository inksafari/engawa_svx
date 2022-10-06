import { sequence } from '@sveltejs/kit/hooks'
import { minifyHTML } from './minify'
import { urlRedirect } from './redirects'
// import { initSentryCF } from './sentry'
// import { customHeaders } from './headers-setup'

const handle = sequence(
	urlRedirect,
	minifyHTML
)

export default handle
// ------------------------------------------------------------------------------
// TODO: csrf
// https://github.com/juzerzarif/juzerzarif.com/tree/main/src/hooks
