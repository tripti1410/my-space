import { fileURLToPath } from "node:url"

console.log(`Base dir: ${fileURLToPath(new URL("./src", import.meta.url))}`)

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // renderers: [],
  vite: {
    resolve: {
      alias: {
        $src: fileURLToPath(new URL("./src", import.meta.url)),
        $blog: fileURLToPath(new URL("./gatsby/blog", import.meta.url)),
      },
    },
  },
})
