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
      <div className="mt-2 mx-2 md:mx-0 md:mt-4 grid grid-cols-1 md:grid-cols-3">
        {data && (
          <div className="md:col-span-2">
            <CurrentlyPlaying data={data} />
          </div>
        )}
        <div className="p-2">
          <div className="flex justify-center md:justify-between space-x-4 item-center">
            <div className="mr-auto md:ml-auto flex space-x-4">
              <a href="mailto:me@danielcoles.co.uk" rel="noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <div className="p-2 hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    <FaEnvelopeOpen title="Get in touch by Email" />
                  </div>
                </motion.div>
              </a>
              <a href="https://github.com/dprcoles" target="_blank" rel="noreferrer">
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
