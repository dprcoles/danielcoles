import React from "react"
import Image from "next/image"
import { CurrentlyPlayingData } from "@/types/SpotifyData"
import { motion } from "framer-motion"
import { FaSpotify } from "react-icons/fa"

interface CurrentlyPlayingProps {
  data: CurrentlyPlayingData
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ data }) => {
  if (!data.isPlaying)
    return (
      <div className="p-2 mb-2 rounded-md">
        <div className="flex space-x-4">
          <FaSpotify color="#1DB954" size={20} />
          <b>Not Playing</b>
        </div>
      </div>
    )

  return (
    <a
      href={data.trackUrl}
      target="_blank"
      className="text-black dark:text-white hover:text-violet-500 "
      rel="noreferrer"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="[ CurrentlyPlaying ]"
      >
        <div className="p-2 mb-2 rounded-md">
          <div className="md:flex md:space-x-4">
            <span className="flex">
              <FaSpotify color="#1DB954" className="mr-2" size={20} />
              <b>Now Playing</b>
            </span>
            <span className="hidden md:block"> – </span>
            <div className="md:flex md:space-x-2">
              <div>{data.title}</div>
              <div className="opacity-75">{data.artist}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  )
}

export default CurrentlyPlaying
