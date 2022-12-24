/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly PUBLIC_DOMAIN: string
	readonly PUBLIC_SITE_URL: string
	readonly SECRET_SENTRY_KEY: string
	readonly SECRET_SENTRY_ORG_ID: string
	readonly SECRET_SENTRY_PROJECT_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
// @links:
// https://vitejs.dev/guide/env-and-mode.html
// https://joyofcode.xyz/sveltekit-environment-variables
// https://scottspence.com/posts/sveltekit-environment-variables-with-the-sveltekit-env-module
