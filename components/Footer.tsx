"use client"

import classNames from "classnames"
import Link from "next/link"
import React from "react"

import { links } from "@/lib/info"

const Footer = () => {
  return (
    <div className="max-w-4xl w-full mb-2 md:mb-8 mx-auto border-t-2 border-zinc-700">
      <div className="mt-2 mx-2 md:mx-0 md:mt-4 flex flex-wrap">
        {[...links]
          .sort((x) => (x.external ? 1 : -1))
          .map((x, i) => (
            <div
              className={classNames(
                "p-2 text-zinc-300",
                x.external && !links[i - 1].external && "ml-auto"
              )}
              key={`footer-${x.name}`}
            >
              <Link
                className="hocus:underline underline-offset-2 hocus:text-violet-500"
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
