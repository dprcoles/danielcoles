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

const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <div className="p-4 my-2 rounded-lg bg-zinc-700/10">
      <div className="flex">
        <Link
          className="text-2xl font-bold hocus:text-violet-500"
          href={data.html_url}
          target="_blank"
        >
          {data.name}
        </Link>
        <div className="ml-auto">
          <LanguagePill language={data.language} />
        </div>
      </div>
      <p className="pt-2">{data.description}</p>
      <div className="pt-2">
        <span role="img" aria-label="Stargazers">
          ⭐
        </span>{" "}
        {data.stargazers_count}
      </div>
      <div className="pt-4 flex">
        <div className="hidden md:flex mr-auto space-x-2">
          {data.topics
            ?.filter((_, i) => i < 5)
            .map((x) => (
              <span
                key={`${data.name}-${x}-topic`}
                className="bg-zinc-700/10 text-white p-2 rounded-lg shadow-lg"
              >
                <b>{x}</b>
              </span>
            ))}
        </div>
        <div className="flex ml-auto space-x-2">
          {data.homepage?.length > 0 && (
            <ProjectCardLink link={data.homepage}>
              <FaExternalLinkSquareAlt title="View site" className="mr-2" size={20} />{" "}
              <b>View site</b>
            </ProjectCardLink>
          )}
          <ProjectCardLink link={data.html_url}>
            <FaGithub title="View source code" size={20} />{" "}
            <b className="hidden xl:block xl:ml-2">View source</b>
          </ProjectCardLink>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
