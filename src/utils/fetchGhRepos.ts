export const fetchGhRepos = async (token: string) => {
  const repos = []
  let page = 1
  const perPage = 100

  try {
    while (true) {
      const response = await fetch(
        `https://api.github.com/user/repos?per_page=${perPage}&page=${page}`,
        {
          headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github.v3+json',
          },
        },
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const pageRepos = await response.json()

      if (pageRepos.length === 0) break

      repos.push(...pageRepos)
      page++
    }

    return repos.map((repo) => ({
      name: repo.name,
      description: repo.description || 'No description',
    }))
  } catch (error) {
    console.error('Error fetching repositories:', error)
    throw error
  }
}
