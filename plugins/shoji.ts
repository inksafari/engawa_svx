import { loadEnv, Plugin } from 'vite'
import { z, ZodError } from 'zod'

// const boolean = z
// .enum(['0', '1'])
// .optional()
// .transform(v => v === '1')

const schema = z.object({
	PUBLIC_DOMAIN: z.string().default('example.com'),
	PUBLIC_SITE_URL: z.string().url().default('http://localhost:9000'),
	SECRET_SENTRY_KEY: z.string().optional(),
	SECRET_SENTRY_ORG_ID: z.string().optional(),
	SECRET_SENTRY_PROJECT_ID: z.string().optional(),
})

export type EnvironmentVariables = z.infer<typeof schema>

export function shoji(): Plugin {
	let parsed = false

	return {
		name: 'shoji-plugin',
		async config(_, { mode }) {
			if (parsed) {
				return
			}

			const vars = loadEnv(mode, process.cwd(), '')

			try {
				const result = await schema.parseAsync(vars)
				process.env = { ...process.env, ...result } as any

				parsed = true
			} catch (error) {
				if (error instanceof ZodError) {
					const { fieldErrors } = error.flatten()

					console.log('')

					Object.keys(fieldErrors).forEach(key => {
						console.error(`Environment variable ${key} is invalid or missing.`)
					})

					console.log('')
				}

				if (mode !== 'development') {
					process.exit(1)
				}
			}
		},
	}
}

export default shoji
// @link:
// https://github.com/frontendista/frontendista.cz/blob/main/packages/env/src/index.ts
