import { devices } from '@playwright/test'

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	timeout: 10 * 1000,
	use: {
		trace: 'on-first-retry',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		{
			name: 'Pixel 4',
			use: {
				browserName: 'chromium',
				...devices['Pixel 4'],
			},
		},
		{
			name: 'iPhone 11',
			use: {
				browserName: 'webkit',
				...devices['iPhone 11'],
			},
		},
	],
	webServer: {
		command: 'pnpm serve',
		port: 9000
	}
};

export default config;
// https://github.com/bmcilw1/technicallyemployed/blob/master/playwright.config.ts
