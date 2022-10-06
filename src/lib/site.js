import * as dotenv from 'dotenv'
dotenv.config()

const site = {
	title: 'Afterglow',
	siteUrl: process.env.PUBLIC_SITE_URL,
	baseUrl: process.env.PUBLIC_DOMAIN,
	blogPath: '',
	description: 'The personal blog of @inksafari.',
	keywords: ['personal', 'blog'].join(',').toLowerCase(),
}

export { site as default }
