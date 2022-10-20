import * as dotenv from "dotenv";
dotenv.config();

import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	integrations: [react(), sitemap()],
	site: "https://www.trapti.dev/",
});
