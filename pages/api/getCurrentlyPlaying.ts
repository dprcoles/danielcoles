import type { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentlyPlaying } from '@/utils/spotifyApi'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getCurrentlyPlaying()

  if (response.status === 204 || response.status > 400)
    return res.status(200).json({ isPlaying: false })

  const track = await response.json()

  const { item, is_playing } = track

  const albumImageUrl = item.album.images[0].url
  const artist = item.artists.map((x: { name: string }) => x.name).join(', ')
  const isPlaying = is_playing
  const title = item.name
  const trackUrl = item.external_urls.spotify

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30')

  return res.status(200).json({
    albumImageUrl,
    artist,
    isPlaying,
    trackUrl,
    title,
  })
}
