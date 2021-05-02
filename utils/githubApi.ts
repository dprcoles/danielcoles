const GET_REPOSITORIES_URL = 'https://api.github.com/users/dcolesDEV/repos'

const githubToken = process.env.GITHUB_PAT_TOKEN

export const getRepositories = async () => {
  return fetch(GET_REPOSITORIES_URL, {
    method: 'GET',
    headers: {
      Authorization: `token ${githubToken}`,
    },
  })
}
