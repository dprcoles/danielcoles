import { cache } from "react"
import { getRepositories } from "@/utils/api/github"
import { Repository } from "@/types/github"

type RepositoryResponse = {
  name: string
  full_name: string
  html_url: string
  description: string
  language: string
  stargazers_count: number
  homepage: string
  topics: Array<string>
}

const get = cache(async () => {
  const response = await getRepositories()

  const repos = await response.json()

  const repositories: Repository[] = repos.map((repo: RepositoryResponse) => ({
    name: repo.name,
    full_name: repo.full_name,
    html_url: repo.html_url,
    description: repo.description,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    homepage: repo.homepage,
    topics: repo.topics,
  }))

  return repositories
})

export default get
