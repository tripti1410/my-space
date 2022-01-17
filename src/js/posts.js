export async function blogPosts(Astro, fetchContent, opts) {
  const baseDir = opts?.projectRootDir || "../.."
  const blogPostsGlob = `${baseDir}gatsby/blog/*.md`
  // console.log("glob", blogPostsGlob)
  const posts = Astro.fetchContent(blogPostsGlob).sort(
    (post1, post2) =>
      new Date(post2.date).valueOf() - new Date(post1.date).valueOf()
  )

  return posts
}

export function sortedPosts(posts) {
  return posts.sort(
    (post1, post2) =>
      new Date(post2.date).valueOf() - new Date(post1.date).valueOf()
  )
}

export function uniqueTags(posts) {
  const allTags = posts
    .map((post) => post.tags)
    .filter((tags) => tags)
    .flat()
  const tags = [...new Set(allTags)]
  return tags
}
