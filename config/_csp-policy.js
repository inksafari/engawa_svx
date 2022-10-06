import site from '../src/lib/site.js'
const rootDomain = site.baseUrl // or your server IP for dev
const rootUrl = site.siteUrl

const cspDirectives = {
	'base-uri': ["'self'"],
	'child-src': [
		"'self'",
		'https://*.google.com',
		'https://*.unsplash.com',
		'https://*.scdn.co',
		'https://*.spotify.com',
		'https://unavatar.now.sh',
		'https://*.unavatar.io',
		'https://*.cdninstagram.com',
	],
	'connect-src': [
		"'self'",
		`ws://${rootDomain}:*`,
		// 'ws://localhost:*',
		// 'https://hcaptcha.com',
		// 'https://*.hcaptcha.com'
	],
	'img-src': [
		// '*',
		"'self'",
		'data:',
		'blob:',
		'https://*.cdninstagram.com',
		'https://*.gstatic.com',
	],
	'font-src': [
		// '*',
		"'self'",
		'data:',
		'blob:',
	],
	'form-action': ["'self'"],
	'frame-ancestors': ["'self'"],
	'frame-src': [
		"'self'",
		// 'https://*.firebaseapp.com',
		// 'https://*.stripe.com',
		// 'https://hcaptcha.com',
		// 'https://*.hcaptcha.com',
	],
	'manifest-src': ["'self'"],
	'media-src': [
		"'self'",
		'data:',
		'https://*.cdninstagram.com',
	],
	'object-src': ["'none'"],
	'style-src': [
		"'self'",
		"'unsafe-inline'",
		// 'https://fonts.googleapis.com',
		// 'https://hcaptcha.com',
		// 'https://*.hcaptcha.com'
	],
	'default-src': [
		"'self'",
		rootUrl,
		`ws://${rootDomain}`,
		'https://*.firebase.com',
		'https://*.gstatic.com',
		// 'https://*.google.com',
		// 'https://*.googleapis.com',
		// 'https://*.cloudfunctions.net',
		// 'https://*.algolia.net',
		// 'https://*.stripe.com',
		// 'https://*.sentry.io',
	],
	'script-src': [
		"'self'",
		"'unsafe-eval'",
		"'unsafe-inline'",
		// 'https://*.stripe.com',
		// 'https://*.gstatic.com',
		// 'https://apis.google.com/js/api.js',
		// 'https://apis.google.com/_/scs/apps-static/',
		// 'https://hcaptcha.com',
		// 'https://*.hcaptcha.com',
		// 'https://*.sentry.io',
		// 'https://polyfill.io',
	],
	'worker-src': ["'self'", "'blob:'"],
	// remove report-to & report-uri if you do not want to use Sentry reporting
	// 'report-to': ["'csp-endpoint'"],
	// 'report-uri': [
	// 	`https://sentry.io/api/${PUBLIC_SENTRY_PROJECT_ID}/security/?sentry_key=${
	// 		PUBLIC_SENTRY_KEY
	// 	}`,
	// ],
}

export default cspDirectives
