export type repositoriesData = {
  repositories: Array<repositoryData>
}

export type repositoryData = {
  name: string
  full_name: string
  html_url: string
  description: string
  language: string
  stargazers_count: number
}
