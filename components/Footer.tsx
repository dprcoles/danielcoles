"use client"

import Link from "next/link"
import React from "react"

import { links } from "@/lib/info"

const Footer: React.FC = () => {
  return (
    <div className="max-w-4xl w-full mb-2 md:mb-8 mx-auto border-t-2 border-zinc-700">
      <div className="mt-2 mx-2 md:mx-0 md:mt-4 flex flex-wrap">
        {links.map(x => (
          <div className="p-2 text-zinc-300" key={`footer-${x.name}`}>
            <Link
              className="hover:underline underline-offset-2 hover:text-violet-500"
              href={x.link}
              target={x.external ? "_blank" : ""}
              referrerPolicy={x.external ? "no-referrer" : ""}
            >
              {x.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer
