import type { NextApiRequest, NextApiResponse } from "next"
import { getTopTracks } from "@/utils/api/spotify"
import { Artists, TrackType } from "@/types/spotify"
import { cache } from "react"

const get = cache(async () => {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track: TrackType) => ({
    artist: track.artists.map((x: Artists) => x.name).join(", "),
    trackUrl: track.external_urls.spotify,
    title: track.name,
  }))

  return tracks
})

export default get