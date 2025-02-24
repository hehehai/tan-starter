import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";

import "./lib/utils/env.server";

export default defineConfig({
	vite: {
		plugins: [
			tsConfigPaths({
				projects: ["./tsconfig.json"],
			}),
			tailwindcss(),
		],
	},

	server: {
		// https://tanstack.com/start/latest/docs/framework/react/hosting#deployment
		preset: "vercel",
	},
});
