import React from "react"
import { notFound } from "next/navigation"
import { FADE_IN, FADE_UP, STAGGER } from "@/utils/variants"
import ProjectCard from "@/components/projects/ProjectCard"
import getRepositories from "@/lib/get-repositories"
import PageTitle from "@/components/layout/PageTitle"
import AnimatedBlock from "@/components/AnimatedBlock"

const Projects = async () => {
  const data = await getRepositories()

  if (!data) notFound()

  return (
    <div className="[ Projects ]">
      <PageTitle>Projects</PageTitle>
      <AnimatedBlock variants={FADE_IN} className="pt-4">
        <p>
          Here is a list of projects that I am working/have worked on, to help grow and develop my
          skills as a developer. All of the projects listed here are publicly available on my{" "}
          <a
            href="https://www.github.com/dprcoles?tab=repositories"
            target="_blank"
            className="font-bold hover:text-rose-300 dark:hover:text-violet-500"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          page, which you can access by clicking on any of the projects below!
        </p>
      </AnimatedBlock>
      <AnimatedBlock variants={STAGGER} className="pt-4">
        {data.map((repo, index) => (
          <AnimatedBlock variants={FADE_UP} key={index} className="[ Project ]">
            <ProjectCard data={repo} />
            <hr className="dark:text-gray-700 text-gray-200" />
          </AnimatedBlock>
        ))}
      </AnimatedBlock>
    </div>
  )
}

export default Projects
