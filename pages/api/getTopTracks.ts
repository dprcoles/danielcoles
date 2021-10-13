import type { NextApiRequest, NextApiResponse } from "next"
import { getTopTracks } from "@/utils/api/spotify"
import { ArtistsData, TrackType } from "@/types/SpotifyData"

const get = async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track: TrackType) => ({
    artist: track.artists.map((x: ArtistsData) => x.name).join(", "),
    trackUrl: track.external_urls.spotify,
    title: track.name,
  }))

  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200")

  return res.status(200).json({ tracks })
}

export default get