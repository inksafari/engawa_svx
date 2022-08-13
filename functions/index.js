import * as functions from 'firebase-functions';

//let ssrServer: (
//	request: functions.https.Request,
//	response: functions.Response<any>
//) => void | PromiseLike<void>;
let ssrServer;

export const ssr = functions
	.region('asia-east1')
	.https.onRequest(async (request, response) => {
		if (!ssrServer) {
			functions.logger.info('Initialising SvelteKit SSR entry');
			ssrServer = require('./ssr/index').default;
			functions.logger.info('SvelteKit SSR entry initialised!');
		}
		functions.logger.info('Requested resource: ' + request.originalUrl);
		try {
			return ssrServer(request, response);
		} catch (ex) {
			functions.logger.error(ex);
			return null;
		}
	})
