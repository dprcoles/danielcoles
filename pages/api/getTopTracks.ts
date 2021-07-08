import type { NextApiRequest, NextApiResponse } from 'next'
import { getTopTracks } from '@/utils/spotifyApi'

type trackType = {
  artists: artistsData[]
  external_urls: {
    spotify: string
  }
  name: string
}

type artistsData = {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track: trackType) => ({
    artist: track.artists.map((x: artistsData) => x.name).join(', '),
    trackUrl: track.external_urls.spotify,
    title: track.name,
  }))

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({ tracks })
}
