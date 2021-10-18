import React from "react"
import Image from "next/image"
import { CurrentlyPlayingData } from "@/types/SpotifyData"
import { motion } from "framer-motion"

interface CurrentlyPlayingProps {
  data: CurrentlyPlayingData
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ data }) => {
  if (!data.isPlaying) return null

  return (
    <a
      href={data.trackUrl}
      target="_blank"
      className="text-black hover:text-violet-500 "
      rel="noreferrer"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="[ CurrentlyPlaying ]"
      >
        <div className="p-2 rounded-md spotify__currently-playing ring-2 ring-green-700">
          <div className="flex space-x-4">
            <Image
              className="rounded-md"
              src={data.albumImageUrl}
              height={76}
              width={76}
              alt={data.title}
            />
            <div>
              <p className="text-gray-700 text-sm">Currently playing...</p>
              <div className="font-bold text-2xl">{data.title}</div>
              <p className="text-gray-800">{data.artist}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  )
}

export default CurrentlyPlaying
