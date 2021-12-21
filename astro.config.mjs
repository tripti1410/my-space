import { fileURLToPath } from "node:url"

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // renderers: [],
  buildOptions: {
    site: "https://www.iamtrapti.com/",
  },
  vite: {
    resolve: {
      alias: {
        $src: fileURLToPath(new URL("./src", import.meta.url)),
        $blog: fileURLToPath(new URL("./gatsby/blog", import.meta.url)),
      },
    },
  },
})
