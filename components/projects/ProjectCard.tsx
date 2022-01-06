import React from "react"
import { motion } from "framer-motion"
import NextLink from "next/link"
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa"
import { repositoryData } from "@/types/GithubData"
import LanguagePill from "./LanguagePill"
import TopicPill from "./TopicPill"

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
      <div className="pt-4 flex">
        <div className="hidden md:flex mr-auto space-x-4">
          {data.topics?.map(x => (
            <TopicPill key={`${data.name}-${x}-topic`} topic={x} />
          ))}
        </div>
        <div className="flex ml-auto space-x-4">
          <a href={data.html_url} target="_blank" rel="noreferrer">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="bg-gradient-to-r flex p-2 hover:from-[#ee9ca7] hover:to-[#ffdde1] dark:hover:from-[#4568dc] dark:hover:to-[#b06ab3] rounded-md">
                <FaGithub title="View source code" className="mr-2" size={20} /> <b>View source</b>
              </div>
            </motion.div>
          </a>
          {data.homepage.length > 0 && (
            <a href={data.homepage} target="_blank" rel="noreferrer">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <div className="bg-gradient-to-r flex p-2 hover:from-[#fd746C] hover:to-[#ff9068] dark:hover:from-[#cc2b5e] dark:hover:to-[#753a88] rounded-md">
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
