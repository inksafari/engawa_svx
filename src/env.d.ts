/// <reference types="vite/client" />

// FIXME: .env無法被 Vite(`import.meta.env`) 讀取
// https://vitejs.dev/guide/env-and-mode.html
// SvelteKit 的 $env module尚未測試
// https://joyofcode.xyz/sveltekit-environment-variables
// https://scottspence.com/posts/sveltekit-environment-variables-with-the-sveltekit-env-module

interface ImportMetaEnv {
	readonly VITE_DOMAIN: string
	readonly VITE_SITE_URL: string
	readonly VITE_SENTRY_KEY: string
	readonly VITE_SENTRY_ORG_ID: string
	readonly VITE_SENTRY_PROJECT_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
