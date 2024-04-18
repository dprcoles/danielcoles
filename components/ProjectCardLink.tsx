import Link from "next/link"
import React, { PropsWithChildren } from "react"

interface ProjectCardLinkProps {
  link: string
}

const ProjectCardLink = ({ link, children }: PropsWithChildren<ProjectCardLinkProps>) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer" className="group">
      <div className="bg-zinc-700/10 flex p-2 shadow-md rounded-lg transition-all duration-300 ease-out group-hocus:scale-[1.05] group-hocus:rounded-[10px] group-hocus:shadow-violet-500/50 group-hocus:bg-violet-500/10">
        {children}
      </div>
    </Link>
  )
}

export default ProjectCardLink
