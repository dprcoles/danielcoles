import React from "react"
import Image from "next/image"
import useSWR from "swr"
import fetcher from "@/utils/api/fetcher"
import { CurrentlyPlayingData } from "@/types/SpotifyData"

interface CurrentlyPlayingProps {
  data: CurrentlyPlayingData
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ data }) => {
  if (!data.isPlaying) return null

  return (
    <div className="[ CurrentlyPlaying ]">
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
            <a
              href={data.trackUrl}
              target="_blank"
              className="text-black hover:text-violet-500 "
              rel="noreferrer"
            >
              <div className="font-bold text-2xl">{data.title}</div>
            </a>
            <p className="text-gray-800">{data.artist}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentlyPlaying
