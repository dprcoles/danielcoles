import React from "react"
import { TrackData } from "@/types/spotify"
import { Box } from "./notations"

interface TrackCardProps {
  track: TrackData
  rank: number
  notationColour: string
  order: number
}

const TrackCard: React.FC<TrackCardProps> = ({ track, rank, notationColour, order }) => {
  return (
    <div className="flex py-4 space-x-4">
      <div className="text-lg font-bold p-2">
        {
          <Box colour={notationColour} order={order} duration={300}>
            {(rank + 1).toString().padStart(2, "0")}
          </Box>
        }
      </div>
      <div>
        <a
          href={track.trackUrl}
          target="_blank"
          className="dark:hover:text-violet-500 hover:text-rose-300"
          rel="noreferrer"
        >
          <div className="font-bold">{track.title}</div>
        </a>
        <p className="text-sm text-gray-500">{track.artist}</p>
      </div>
    </div>
  )
}

export default TrackCard
