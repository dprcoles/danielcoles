"use client"

import Link from "next/link"
import React from "react"
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa"

import { Repository } from "@/types/github"

import LanguagePill from "./LanguagePill"
import ProjectCardLink from "./ProjectCardLink"

interface ProjectCardProps {
  data: Repository
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className="p-4 my-2 rounded-lg bg-zinc-700/10">
      <div className="flex">
        <div className="text-2xl font-bold hover:text-violet-500">
          <Link href={data.html_url} target="_blank">
            {data.name}
          </Link>
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
      <div className="pt-4 flex">
        <div className="hidden md:flex mr-auto space-x-4">
          {data.topics?.map(x => (
            <span
              key={`${data.name}-${x}-topic`}
              className="bg-zinc-700/10 text-white p-2 rounded-lg shadow-lg"
            >
              <b>{x}</b>
            </span>
          ))}
        </div>
        <div className="flex ml-auto space-x-4">
          <ProjectCardLink link={data.html_url}>
            <FaGithub title="View source code" className="mr-2" size={20} /> <b>View source</b>
          </ProjectCardLink>
          {data.homepage.length > 0 && (
            <ProjectCardLink link={data.homepage}>
              <FaExternalLinkSquareAlt title="View site" className="mr-2" size={20} />{" "}
              <b>View site</b>
            </ProjectCardLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
