import lighthouse from 'lighthouse'
import puppeteer from 'puppeteer'

const options = {
	headless: true,
	devtools: false,
	ignoreHTTPSErrors: true,
	args: [
		'--show-paint-rects',
		'--no-sandbox',
		'--disable-setuid-sandbox',
		'--ignore-certificate-errors'
	]
}

export function createBrowser () {
	return puppeteer.launch(options)
}

export function createReportWithBrowser (browser, url, options = { output: 'html' }) {
	const endpoint = browser.wsEndpoint()
	const endpointUrl = new URL(endpoint)

	return lighthouse(url, Object.assign({}, { port: endpointUrl.port }, options))
}
