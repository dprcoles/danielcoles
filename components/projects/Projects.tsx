import useSWR from 'swr'
import fetcher from '@/utils/fetcher'

type repositoriesData = {
  repositories: Array<repositoryData>
}

type repositoryData = {
  name: string
  full_name: string
  html_url: string
  description: string
  language: string
  stargazers_count: number
}

const Projects: React.FC = () => {
  const { data } = useSWR<repositoriesData>('/api/getRepositories', fetcher)
  return (
    <div className="container mx-auto my-auto text-dc-grey dark:text-white">
      <div className="[ Projects__Text ] font-extrabold text-7xl text-left self-center pb-4">
        Projects
      </div>
      <div className="[ Projects__Text ] text-lg m-4">
        Here is a list of projects that I am working/have worked on, to help grow and develop my
        skills as a developer. All of the projects listed here are publicly available on GitHub,
        which you can access by clicking on any of the projects below!
      </div>
      {data?.repositories.map((repo: repositoryData, index: number) => (
        <a key={index} href={repo.html_url} target="_blank" rel="noreferrer">
          <div className="[ Projects ] p-2 m-4 border-2 border-dc-grey dark:border-white hover:bg-white dark:hover:bg-black">
            <div className="grid grid-cols-2 grid-flow-row pb-2">
              <div className="[ Projects__Text ] text-4xl font-extrabold">{repo.name}</div>
              <div className="[ Projects__Text ] text-xl font-bold text-right">{repo.language}</div>
            </div>
            <div className="[ Projects__Text ] text-lg pb-1">{repo.description}</div>
            <div className="[ Projects__Text ] text-lg">
              <span className="[ Projects__Text ]" role="img" aria-label="GitHub Stars">
                ⭐
              </span>{' '}
              {repo.stargazers_count}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Projects
