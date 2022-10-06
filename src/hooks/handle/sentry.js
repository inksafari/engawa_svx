import Toucan from 'toucan-js'

// Sentry.init({
// 	dsn: '...',
// 	release: '...',
// 	debug: false,
// 	attachStacktrace: true
// })

const initSentryCF = async ({ event, resolve }) => {
	const response = await resolve(event)
	if (event.platform?.context) {
		event.locals.sentry = new Toucan({
			dsn: '...',
			request: event.request,
			context: event.platform.context,
			allowedHeaders: ['user-agent'],
			allowedSearchParams: /(.*)/,
		})
		event.locals.sentry.setUser({ id: event.request.headers.get('cf-connecting-ip') })
	}
	return response
}

export { initSentryCF }
// Adapted from
// https://github.com/HelloUnspecified/SvelteWeekly.com/blob/main/src/hooks/index.js
// https://github.com/pzuraq/pzuraq.com/blob/main/src/hooks.ts
