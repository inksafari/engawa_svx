// copyied from https://github.com/magicunico/next-blog
import Assert from 'assert'
import fs from 'fs'
import { createBrowser, createReportWithBrowser } from './lighthouse.mjs';

(async () => {
	const browser = await createBrowser()
	const result = await createReportWithBrowser(
		browser,
		'http://localhost:8080',
		{
			output: 'html'
		}
	)

	Assert(result.report, 'No report returned')

	fs.writeFileSync('reportStart.html', result.report, 'utf-8')

	await browser.close()
})()
	// eslint-disable-next-line no-console
	.catch(console.error)
	.then(() => {
		// eslint-disable-next-line no-console
		console.log('Finished! ')
	})
