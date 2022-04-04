import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  // your configuration options here...
  integrations: [react(), sitemap()],
  site: "https://www.iamtrapti.com/",
})
