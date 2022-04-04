export function sortedPosts(posts) {
  return posts.sort(
    (post1, post2) =>
      new Date(post2.frontmatter.date).valueOf() -
      new Date(post1.frontmatter.date).valueOf()
  )
}

export function uniqueTags(posts) {
  const allTags = posts
    .map((post) => post.frontmatter.tags)
    .filter((tags) => tags)
    .flat()
  const tags = [...new Set(allTags)]
  return tags
}
