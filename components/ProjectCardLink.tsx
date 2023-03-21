import Link from "next/link"
import React, { PropsWithChildren } from "react"

interface ProjectCardLinkProps {
  link: string
}

const ProjectCardLink: React.FC<PropsWithChildren<ProjectCardLinkProps>> = ({ link, children }) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <div className="bg-zinc-700/10 flex p-2 shadow-md rounded-lg transition-all duration-300 ease-out hover:scale-[1.05] hover:rounded-[10px] hover:shadow-violet-500/50 hover:bg-violet-500/10">
        {children}
      </div>
    </Link>
  )
}

export default ProjectCardLink
