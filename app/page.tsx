"use client"

import React from "react"
import AnimatedBlock from "@/components/AnimatedBlock"
import { FADE_IN, FADE_UP, MINI_ME_VARIANT, STAGGER } from "@/utils/variants"
import { Bracket, Highlight, Underline } from "@/components/notations"
import { useTheme } from "next-themes"
import { shuffledColours } from "@/utils/helpers"
import Link from "next/link"
import { MiniMe } from "../components"
import NotationGroup from "@/components/notations/NotationGroup"

const Home = () => {
  const { resolvedTheme } = useTheme()
  const { bracket, highlight, underline } = shuffledColours(resolvedTheme)

  return (
    <div className="[ Home ]">
      <div className="container mx-auto">
        <div className="md:flex mx-2 md:mx-0 md:space-x-4 item-center">
          <AnimatedBlock variants={STAGGER}>
            <NotationGroup show>
              <AnimatedBlock variants={FADE_IN} className="text-2xl lg:text-4xl">
                <span className="font-extrabold">
                  Hey, I&apos;m{" "}
                  <Underline colour={underline[0]} order={1} duration={500}>
                    Daniel!
                  </Underline>
                </span>{" "}
                👋
              </AnimatedBlock>
              <div className="mt-4">
                <AnimatedBlock variants={FADE_IN} className="my-2 text-lg">
                  <Bracket colour={bracket[0]} order={2} duration={500}>
                    I like making cool and interesting things with code, as well as designing stuff
                    for fun!
                  </Bracket>
                </AnimatedBlock>
                <AnimatedBlock variants={FADE_IN} className="my-2">
                  I&apos;m currently working as a{" "}
                  <Highlight colour={highlight[1]} order={3}>
                    Software Engineer
                  </Highlight>{" "}
                  at{" "}
                  <Link
                    href="https://www.thebodyshop.com"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold hover:text-green-700"
                  >
                    The Body Shop
                  </Link>
                  .
                </AnimatedBlock>
                <AnimatedBlock variants={FADE_IN} className="my-2">
                  I&apos;m always looking to learn new skills that will help me become a{" "}
                  <Highlight colour={highlight[2]} order={3}>
                    better developer,
                  </Highlight>{" "}
                  and enable me to further build my{" "}
                  <Highlight colour={highlight[3]} order={3}>
                    career in tech.
                  </Highlight>
                </AnimatedBlock>
                <AnimatedBlock variants={FADE_UP} className="my-2">
                  You can check out some of my work here on{" "}
                  <Link
                    href="https://www.github.com/dprcoles"
                    target="_blank"
                    className="font-bold hover:text-rose-300 dark:hover:text-violet-500"
                    rel="noreferrer"
                  >
                    GitHub!
                  </Link>
                </AnimatedBlock>
              </div>
            </NotationGroup>
          </AnimatedBlock>
          <AnimatedBlock variants={MINI_ME_VARIANT} className="flex-shrink-0">
            <MiniMe />
          </AnimatedBlock>
        </div>
      </div>
    </div>
  )
}

export default Home
