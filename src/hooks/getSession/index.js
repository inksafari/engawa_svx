import { dev } from '$app/environment'
import { reset } from '$lib/utils/store'

export function getSession(event) {
	// reset store state
	reset()

	return {
		host: event.request.host,
		protocol: dev ? 'http:' : 'https:',
	}
}
