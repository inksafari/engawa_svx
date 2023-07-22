import { PUBLIC_DOMAIN, PUBLIC_SITE_URL } from '$env/static/public'

// Sporadic Scene
const site = {
	title: 'Afterglow',
	siteUrl: PUBLIC_SITE_URL,
	baseUrl: PUBLIC_DOMAIN,
	blogPath: '',
	description: 'The personal blog of @inksafari.',
	keywords: ['personal', 'blog'].join(',').toLowerCase(),
}

export { site as default }
