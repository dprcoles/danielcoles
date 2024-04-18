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
    <div className="py-2 px-4 shadow-lg rounded-lg bg-gradient-to-t from-green-300/30 to-green-500/20 ring-2 ring-green-500/50 ring-offset-1 ring-offset-black/5 animate-pulse-slow">
      <div className="flex items-center">
        <span>
          <FaSpotify color="#1DB954" className="mr-4" size="1.5rem" />
        </span>
        <div>
          <b className="text-lg text-green-50 font-heading font-bold">Currently Playing</b>
          <div>
            <Link
              href={data.trackUrl}
              target="_blank"
              className="group text-white flex flex-wrap flex-col"
              rel="noreferrer"
            >
              <span className="group-hocus:text-violet-500">{data.title}</span>
              <span className="group-hocus:text-violet-500/70 text-white/50">{data.artist}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentlyPlaying
