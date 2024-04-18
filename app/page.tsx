"use client"

import Link from "next/link"
import React from "react"

import AnimatedBlock from "@/components/AnimatedBlock"
import { Box, Bracket, Highlight, Underline } from "@/components/notations"
import NotationGroup from "@/components/notations/NotationGroup"
import { role } from "@/lib/info"
import { shuffledColours } from "@/utils/helpers"
import { FADE_IN } from "@/utils/variants"

const Home = () => {
  const { underline, highlight, box, bracket } = shuffledColours()

  return (
    <div className="w-full">
      <NotationGroup show>
        <AnimatedBlock variants={FADE_IN} className="my-2">
          <h2 className="text-3xl font-extrabold mb-8">
            <Underline colour={underline[0]} order={1} duration={500} show>
              About
            </Underline>
          </h2>
          <div className="space-y-4 text-lg">
            <div>
              Hey 👋🏻, I&apos;m{" "}
              <Underline colour={underline[1]} order={2} duration={500}>
                <b className="font-bold">Daniel</b>
              </Underline>
              . I&apos;m a{" "}
              <Underline colour={underline[2]} order={3} duration={500}>
                <b className="font-bold">Software Engineer</b>
              </Underline>{" "}
              at{" "}
              <Underline colour={underline[3]} order={4} duration={500}>
                <Link
                  href={role.company.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold hocus:text-green-700"
                >
                  {role.company.name}
                </Link>
              </Underline>
              .
            </div>
            <div>
              <Bracket colour={bracket[0]} order={5} duration={500}>
                I like making cool and interesting things with code, as well as designing stuff for
                fun!
              </Bracket>
            </div>
            <div>
              I&apos;m always looking to{" "}
              <Highlight colour={highlight[0]} order={6}>
                learn new skills
              </Highlight>{" "}
              that will help me become a{" "}
              <Highlight colour={highlight[1]} order={7}>
                better developer,
              </Highlight>{" "}
              and enable me to further build my{" "}
              <Highlight colour={highlight[2]} order={8}>
                career in tech.
              </Highlight>
            </div>
            <div className="py-1">
              <Box colour={box[0]} duration={500} order={9}>
                You can check out some of my work here on{" "}
                <Link
                  href="https://www.github.com/dprcoles"
                  target="_blank"
                  className="font-bold hocus:text-violet-500"
                  rel="noreferrer"
                >
                  GitHub!
                </Link>
              </Box>
            </div>
          </div>
        </AnimatedBlock>
      </NotationGroup>
    </div>
  )
}

export default Home
