"use client"

import classNames from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useRef, useState } from "react"
import { useIntersection } from "react-use"

import { links, role } from "@/lib/info"
import { NotationColours } from "@/types/notations"
import { CurrentlyPlayingInfo } from "@/types/spotify"
import { shuffledColours } from "@/utils/helpers"
import { CURRENTLY_PLAYING_VARIANT, FADE_IN, MINI_ME_VARIANT, STAGGER } from "@/utils/variants"

import AnimatedBlock from "./AnimatedBlock"
import CurrentlyPlaying from "./CurrentlyPlaying"
import HeaderNavLink from "./HeaderNavLink"
import MiniMe from "./MiniMe"
import Navbar from "./Navbar"
import NavLink from "./NavLink"
import { Highlight, Underline } from "./notations"
import NotationGroup from "./notations/NotationGroup"

interface NavBlockProps {
  currentlyPlaying?: CurrentlyPlayingInfo
}

const NavBlock = ({ currentlyPlaying }: NavBlockProps) => {
  const [colours, setColours] = useState<NotationColours>(shuffledColours())
  const pathname = usePathname()
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "-100px",
  })

  useEffect(() => {
    if (!colours) {
      setColours(shuffledColours())
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { underline } = colours

  let showNavbar = false
  if (intersection && !intersection.isIntersecting) {
    showNavbar = true
  }

  return (
    <>
      <div className="max-w-full lg:max-w-4xl mx-auto mt-16 px-4 pb-2" ref={intersectionRef}>
        <div
          className={classNames(
            "transition duration-500",
            showNavbar && "opacity-0",
            !showNavbar && "opacity-100"
          )}
        >
          <div className="md:flex mx-2 md:mx-0 md:space-x-4 items-center justify-between">
            <AnimatedBlock variants={MINI_ME_VARIANT} className="flex-shrink-0 mb-2">
              <MiniMe />
            </AnimatedBlock>
            <div>
              <NotationGroup show>
                <AnimatedBlock variants={FADE_IN}>
                  <h1 className="text-4xl font-extrabold mb-2">
                    <Underline colour={underline[0]} duration={500} order={1}>
                      Daniel Coles
                    </Underline>
                  </h1>
                  <div className="text-lg pt-4">
                    {role.title} at{" "}
                    <Link
                      href={role.company.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold hover:text-black"
                    >
                      <Highlight colour="rgb(21 128 61)" order={2}>
                        {role.company.name}
                      </Highlight>
                    </Link>
                  </div>
                </AnimatedBlock>
              </NotationGroup>
              <AnimatedBlock variants={STAGGER} className="flex gap-4 py-8 flex-wrap">
                {links
                  .filter((x) => x.external)
                  .map((x) => (
                    <NavLink key={x.name} {...x} showText />
                  ))}
              </AnimatedBlock>
              <AnimatedBlock variants={CURRENTLY_PLAYING_VARIANT}>
                <div>
                  <CurrentlyPlaying data={currentlyPlaying} />
                </div>
              </AnimatedBlock>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
            {links
              .filter((x) => !x.external)
              .map((x) => (
                <HeaderNavLink key={x.name} {...x} active={pathname === x.link} />
              ))}
          </div>
        </div>
      </div>
      {showNavbar && <Navbar />}
    </>
  )
}

export default NavBlock
