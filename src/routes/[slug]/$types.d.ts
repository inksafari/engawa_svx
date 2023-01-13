import type * as Kit from '@sveltejs/kit'

type RouteParams = {
	slug: string
}

export type PageLoad = Kit.Load<RouteParams>
// https://github.com/pthorsson/thorsson.dev-2022/blob/main/src/routes/%5B...slug%5D/%24types.d.ts
