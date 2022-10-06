// curl -I https://example.com
// import { PUBLIC_SENTRY_PROJECT_ID, PUBLIC_SENTRY_KEY } from '$env/dynamic/public'

export const customHeaders = async ({ event, resolve }) => {
	const response = await resolve(event)
	if (response.headers.get('content-type')?.startsWith('text/html')) {
		const headers = {
			'Expect-CT': JSON.stringify({
				'max-age': 31536000,
			}),
			// 'Expect-CT': JSON.stringify({
			// 'max-age': 86400,
			// 'report-uri': `https://sentry.io/api/${
			// 	PUBLIC_SENTRY_PROJECT_ID
			// }/security/?sentry_key=${PUBLIC_SENTRY_KEY}`,
			// }),
			// 'Report-To': JSON.stringify({
			// 'group': 'csp-endpoint',
			// 'max_age': 10886400,
			// 'endpoints': [{
			// 	'url': `https://sentry.io/api/${
			// 		PUBLIC_SENTRY_PROJECT_ID
			// 	}/security/?sentry_key=${PUBLIC_SENTRY_KEY}`
			// }]
			// }),
			// 'Strict-Transport-Security': 'max-age=15552000; includeSubDomains; preload',
		}
		Object.keys(headers).forEach(headerKey => {
			response.headers.set(headerKey, headers[headerKey])
		})
	}
	return response
}
// Adapted from
// https://github.com/itssumitrai/online-dress-store/blob/main/src/hooks.js
// https://rodneylab.com/sveltekit-content-security-policy/
// https://github.com/rodneylab/sveltekit-blog-mdx/blob/main/src/hooks.server.js
