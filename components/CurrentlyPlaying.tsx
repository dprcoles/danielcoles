"use client"

import Link from "next/link"
import React from "react"
import { FaSpotify } from "react-icons/fa"

import { CurrentlyPlayingInfo } from "@/types/spotify"

interface CurrentlyPlayingProps {
  data?: CurrentlyPlayingInfo
}

const CurrentlyPlaying = ({ data }: CurrentlyPlayingProps) => {
  if (!data || !data.isPlaying) return null

  return (
    <div className="py-2 px-4 shadow-lg rounded-lg bg-gradient-to-tl from-green-300/10 to-green-500/5 ring-2 ring-green-500/25 ring-offset-1 ring-offset-black/5">
      <div className="flex items-center">
        <span>
          <FaSpotify color="#1DB954" className="mr-4" size="1.5rem" />
        </span>
        <div>
          <b className="text-lg text-green-100">Currently Playing</b>
          <Link
            href={data.trackUrl}
            target="_blank"
            className="text-white hover:text-violet-500"
            rel="noreferrer"
          >
            <div className="flex items-center flex-wrap">
              <div className="mr-2">{data.title}</div>
              <div className="opacity-75">{data.artist}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CurrentlyPlaying
