import React from "react"
import { useTheme } from "next-themes"
import { RoughNotationGroup } from "react-rough-notation"
import { Bracket, Highlight, Underline } from "./notations"
import MiniMe from "./MiniMe"
import { shuffledColours } from "@/utils/helpers"

const About: React.FC = () => {
  const { resolvedTheme } = useTheme()
  const { bracket, highlight, underline } = shuffledColours(resolvedTheme)

  return (
    <div className="container mx-auto">
      <div className="md:flex space-x-4 item-center">
        <div>
          <RoughNotationGroup show>
            <div className="text-2xl lg:text-4xl font-extrabold">
              Hey, I&apos;m{" "}
              <Underline colour={underline[0]} order={1} duration={500}>
                Daniel!
              </Underline>{" "}
              👋
            </div>
            <div className="mt-4">
              <p className="my-2 text-lg">
                <Bracket colour={bracket[0]} order={2} duration={500}>
                  I like making cool and interesting things with code, as well as designing stuff
                  for fun!
                </Bracket>
              </p>
              <p className="my-2">
                I&apos;m currently working as a{" "}
                <Highlight colour={highlight[1]} order={3}>
                  Software Engineer
                </Highlight>{" "}
                at{" "}
                <a
                  href="https://www.sainsburys.co.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold hover:text-orange-500"
                >
                  Sainsbury&apos;s
                </a>{" "}
                - focused on building tools to help support colleagues in stores.
              </p>
              <p className="my-2">
                I&apos;m always looking to learn new skills that will help me become a{" "}
                <Highlight colour={highlight[2]} order={3}>
                  better developer,
                </Highlight>{" "}
                and enable me to further build my{" "}
                <Highlight colour={highlight[3]} order={3}>
                  career in tech.
                </Highlight>
              </p>
              <p className="my-2">
                You can check out some of my work here on{" "}
                <a
                  href="https://www.github.com/dcolesDEV"
                  target="_blank"
                  className="font-bold hover:text-rose-300 dark:hover:text-violet-500"
                  rel="noreferrer"
                >
                  GitHub!
                </a>
              </p>
            </div>
          </RoughNotationGroup>
        </div>
        <div className="flex-shrink-0">
          <MiniMe />
        </div>
      </div>
    </div>
  )
}

export default About
