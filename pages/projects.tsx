import React, { useEffect, useState } from "react"
import { NextPage } from "next"
import { useTheme } from "next-themes"
import useSWR from "swr"
import { RoughNotationGroup } from "react-rough-notation"
import { Wrapper } from "@/components/layout"
import { Underline } from "@/components/notations"
import { ProjectCard } from "@/components/index"
import { shuffledColours } from "@/utils/helpers"
import fetcher from "@/utils/api/fetcher"
import { repositoriesData, repositoryData } from "@/types/GithubData"

const Projects: NextPage = () => {
  const [loaded, setLoaded] = useState(false)

  const { data } = useSWR<repositoriesData>("/api/getRepositories", fetcher)
  const { resolvedTheme } = useTheme()
  const { underline } = shuffledColours(resolvedTheme)

  useEffect(() => (data ? setLoaded(true) : setLoaded(false)), [data])

  if (!loaded) return <Wrapper page="Projects">Loading...</Wrapper>

  return (
    <Wrapper page="Projects">
      <div className="[ Projects ]">
        <div className="text-4xl font-extrabold">
          <RoughNotationGroup show>
            <Underline colour={underline[0]} order={1} duration={500}>
              Projects
            </Underline>
          </RoughNotationGroup>
        </div>
        <div className="pt-4">
          <p>
            Here is a list of projects that I am working/have worked on, to help grow and develop my
            skills as a developer. All of the projects listed here are publicly available on my{" "}
            <a
              href="https://www.github.com/dcolesDEV?tab=repositories"
              target="_blank"
              className="font-bold hover:text-rose-300 dark:hover:text-violet-500"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            page, which you can access by clicking on any of the projects below!
          </p>
        </div>
        <div className="pt-4">
          {data?.repositories.map((repo: repositoryData, index: number) => (
            <div key={index} className="[ Project ]">
              <ProjectCard data={repo} />
              <hr className="dark:text-gray-700 text-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default Projects
