const { readdir, readFile, writeFile } = require("node:fs").promises
const { resolve } = require("node:path")
const posthtml = require("posthtml")
const { hash } = require("posthtml-hash")

async function* getHtmlFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true })
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name)
    if (dirent.isDirectory()) {
      yield* getHtmlFiles(res)
    } else if (res.endsWith(".html")) {
      yield res
    }
  }
}

console.log(`Post processing the html files.`)

// source (read all files recursively from directory) - https://stackoverflow.com/a/45130990
;(async () => {
  for await (const f of getHtmlFiles("./dist/")) {
    const html = await readFile(f, { encoding: "UTF-8" })
    await posthtml()
      .use(hash({ path: "dist" }))
      .process(html)
      .then((result) => writeFile(f, result.html))
  }
})()

console.log(`Done with post processing the html files.`)
