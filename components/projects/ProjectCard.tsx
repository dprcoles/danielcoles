"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa"
import { RepositoryData } from "@/types/github"
import LanguagePill from "./LanguagePill"
import TopicPill from "./TopicPill"
import Link from "next/link"

interface ProjectCardProps {
  data: RepositoryData
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className="p-4 my-2 rounded-md">
      <div className="flex">
        <div className="text-2xl font-bold dark:hover:text-violet-500 hover:text-rose-300">
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
            <TopicPill key={`${data.name}-${x}-topic`} topic={x} />
          ))}
        </div>
        <div className="flex ml-auto space-x-4">
          <a href={data.html_url} target="_blank" rel="noreferrer">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="flex p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                <FaGithub title="View source code" className="mr-2" size={20} /> <b>View source</b>
              </div>
            </motion.div>
          </a>
          {data.homepage.length > 0 && (
            <a href={data.homepage} target="_blank" rel="noreferrer">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <div className="flex p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                  <FaExternalLinkSquareAlt title="View site" className="mr-2" size={20} />{" "}
                  <b>View site</b>
                </div>
              </motion.div>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
