export const handleError = ({ event, error }) => {
	// method 1:
	// https://github.com/HelloUnspecified/SvelteWeekly.com/blob/main/src/hooks/index.js
	// https://github.com/danielgaiduk/boilerplate-sveltekit/blob/master/src/hooks/client.ts
	// const thisError = error instanceof Error ? error : new Error(error);
	// Sentry.captureException(new Error(thisError), { event });

	// method 2 ( for Cloudflare Workers):
	// https://github.com/pzuraq/pzuraq.com/blob/main/src/hooks.ts
	console.error('ERROR')
	event.locals.sentry?.captureException(error)
}
