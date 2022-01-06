import React from "react"
import { CurrentlyPlayingData } from "@/types/SpotifyData"
import { motion } from "framer-motion"
import NextLink from "next/link"
import { FaEnvelopeOpen, FaGithub, FaLinkedinIn, FaTwitter, FaListOl } from "react-icons/fa"
import fetcher from "@/utils/api/fetcher"
import useSWR from "swr"
import CurrentlyPlaying from "../CurrentlyPlaying"

const Footer: React.FC = () => {
  const { data } = useSWR<CurrentlyPlayingData>("/api/getCurrentlyPlaying", fetcher)

  return (
    <div className="[ Footer ] max-w-4xl mb-2 md:mb-8 mx-auto border-t-2 border-gray-200 dark:border-gray-700">
      <div className="mt-2 mx-2 md:mx-0 md:mt-4 flex">
        {data && <CurrentlyPlaying data={data} />}
        <div className="ml-auto">
          <NextLink href="/spotify">
            <a>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <div className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  <FaListOl title="Link to top songs" className="mr-2" size={20} /> My top songs
                </div>
              </motion.div>
            </a>
          </NextLink>
        </div>
      </div>
      <div>
        <div className="container p-2">
          <div className="flex justify-center md:justify-between space-x-4 item-center">
            <div className="hidden md:block">
              Built with{" "}
              <a
                className="font-bold hover:text-rose-300 dark:hover:text-violet-500"
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                className="font-bold hover:text-rose-300 dark:hover:text-violet-500"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind
              </a>
              . Hosted on{" "}
              <a
                className="font-bold hover:text-rose-300 dark:hover:text-violet-500"
                href="https://vercel.com/"
                target="_blank"
                rel="noreferrer"
              >
                ▲ Vercel
              </a>
            </div>
            <div className="ml-auto flex space-x-4">
              <a href="mailto:me@danielcoles.co.uk" rel="noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <div className="p-2 hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    <FaEnvelopeOpen title="Get in touch by Email" />
                  </div>
                </motion.div>
              </a>
              <a href="https://github.com/dcolesDEV" target="_blank" rel="noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    <FaGithub title="Check out my GitHub" />
                  </div>
                </motion.div>
              </a>
              <a href="https://www.linkedin.com/in/danielcoles/" target="_blank" rel="noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <div className="p-2 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    <FaLinkedinIn title="Follow me on LinkedIn" />
                  </div>
                </motion.div>
              </a>
              <a href="https://twitter.com/_danielcoles" target="_blank" rel="noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <div className="p-2 hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    <FaTwitter title="Follow me on Twitter" />
                  </div>
                </motion.div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
