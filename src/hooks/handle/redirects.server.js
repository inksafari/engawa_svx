import { REDIRECTS } from './_redirects'

export const urlRedirect = async ({ event, resolve }) => {
	const res = await resolve(event)

	if (res.status !== 404) {
		const redirect = REDIRECTS.find(r => r.from === event.url.pathname)
		if (redirect) {
			return Response.redirect(
				`${event.url.origin}${redirect.to}`,
				redirect.permanent ? 301 : 302
			)
		}
		// } else {
		// 	event.locals.sentry?.captureException(
		// 		new Error(`Page not found: ${event.request.url.toString()}`),
		// 	)
		// }
	}
	return res
}
// Adapted from
// https://github.com/pzuraq/pzuraq.com/blob/main/src/hooks.ts
