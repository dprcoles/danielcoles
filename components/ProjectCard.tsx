import React from "react"
import NextLink from "next/link"
import { repositoryData } from "@/types/GithubData"
import LanguagePill from "./LanguagePill"

interface ProjectCardProps {
  data: repositoryData
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className="p-4 my-2 rounded-md">
      <div className="flex">
        <div className="text-2xl font-bold dark:hover:text-violet-500 hover:text-rose-300">
          <NextLink href={data.html_url}>
            <a target="_blank">{data.name}</a>
          </NextLink>
        </div>
        <div className="ml-auto">
          <LanguagePill language={data.language} />
        </div>
      </div>
      <div className="pt-2">
        <p>{data.description}</p>
      </div>
      <div className="pt-2">
        <span role="img" aria-label="Stargazers">
          ⭐
        </span>{" "}
        {data.stargazers_count}
      </div>
    </div>
  )
}

export default ProjectCard
