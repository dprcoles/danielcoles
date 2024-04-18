import { Metadata } from "next"
import { notFound } from "next/navigation"
import React from "react"

import AnimatedBlock from "@/components/AnimatedBlock"
import { Underline } from "@/components/notations"
import ProjectCard from "@/components/ProjectCard"
import { getRepositories } from "@/lib/github"
import { shuffledColours } from "@/utils/helpers"
import { FADE_IN, FADE_UP, STAGGER } from "@/utils/variants"

export const metadata: Metadata = {
  title: "Projects",
  description: "Here are some of the projects that I am working/have worked on",
}

const Projects = async () => {
  const data = await getRepositories()
  const { underline } = shuffledColours()

  if (!data) notFound()

  return (
    <div>
      <AnimatedBlock variants={FADE_IN}>
        <h2 className="text-3xl font-extrabold mb-8">
          <Underline colour={underline[0]} order={1} duration={500} show>
            Projects
          </Underline>
        </h2>
        <p>
          Here is a list of projects that I am working/have worked on, to help grow and develop my
          skills as a developer. All of the projects listed here are publicly available on my{" "}
          <a
            href="https://www.github.com/dprcoles?tab=repositories"
            target="_blank"
            className="font-bold hocus:text-violet-500"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          page, which you can access by clicking on any of the projects below!
        </p>
      </AnimatedBlock>
      <AnimatedBlock variants={STAGGER} className="pt-4">
        {data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .map((repo, index) => (
            <AnimatedBlock variants={FADE_UP} key={index}>
              <ProjectCard data={repo} />
            </AnimatedBlock>
          ))}
      </AnimatedBlock>
    </div>
  )
}

export default Projects
