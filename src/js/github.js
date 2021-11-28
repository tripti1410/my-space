export async function repos({ user }, { includeForks }) {
  const responseObj = await fetch(
    `https://api.github.com/users/${user}/repos?sort="updated"`,
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  )
  const repos = await responseObj.json()
  if (includeForks) {
    return repos
  }

  return repos.filter((repo) => repo.fork === false)
}
