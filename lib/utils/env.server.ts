import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().url(),
		BETTER_AUTH_SECRET: z.string().min(1),
	},

	// NOTE: only use env validation! can't use client (please use import.meta.env for client)
	clientPrefix: "VITE_",

	client: {
		VITE_BASE_URL: z.string().url(),
	},

	/**
	 * What object holds the environment variables at runtime. This is usually
	 * `process.env` or `import.meta.env`.
	 */
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
