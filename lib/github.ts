"server only"

import { cache } from "react"

import { Repository } from "@/types/github"

const GET_REPOSITORIES_URL = "https://api.github.com/users/dprcoles/repos"

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

export const getRepositories = cache(async () => {
  const response = await fetch(GET_REPOSITORIES_URL, {
    method: "GET",
  })

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
