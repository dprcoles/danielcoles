import { getCurrentlyPlaying } from '@/utils/spotifyApi'

type resType = {
  status: (
    arg0: number
  ) => {
    (): any
    new (): any
    json: {
      (arg0: {
        isPlaying: any
        albumImageUrl?: any
        artist?: any
        trackUrl?: any
        title?: any
      }): any
      new (): any
    }
  }
  setHeader: (arg0: string, arg1: string) => void
}

export default async (_: any, res: resType) => {
  const response = await getCurrentlyPlaying()

  if (response.status === 204 || response.status > 400)
    return res.status(200).json({ isPlaying: false })

  const track = await response.json()

  const albumImageUrl = track.item.album.images[0].url
  const artist = track.item.artists.map((x: { name: any }) => x.name).join(', ')
  const isPlaying = track.is_playing
  const title = track.item.name
  const trackUrl = track.item.external_urls.spotify

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30')

  return res.status(200).json({
    albumImageUrl,
    artist,
    isPlaying,
    trackUrl,
    title,
  })
}
