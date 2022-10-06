export const handleError = async ({ event, error }) => {
	// method 1:
	// https://github.com/HelloUnspecified/SvelteWeekly.com/blob/main/src/hooks/index.js
	// const thisError = error instanceof Error ? error : new Error(error);
	// Sentry.captureException(new Error(thisError), { event });

	// method 2 ( for Cloudflare Workers):
	// https://github.com/pzuraq/pzuraq.com/blob/main/src/hooks.ts
	console.log('ERROR')
	event.locals.sentry?.captureException(error)
}
