import { getRepositories } from '@/utils/githubApi'

type resType = {
  status: (
    arg0: number
  ) => { (): any; new (): any; json: { (arg0: { repositories: any }): any; new (): any } }
}

type repoData = {
  name: string
  full_name: string
  html_url: string
  description: string
  language: string
  stargazers_count: number
}

export default async (_: any, res: resType) => {
  const response = await getRepositories()

  const repos = await response.json()

  const repositories = repos.map((repo: repoData) => ({
    name: repo.name,
    full_name: repo.full_name,
    html_url: repo.html_url,
    description: repo.description,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
  }))

  return res.status(200).json({ repositories })
}
