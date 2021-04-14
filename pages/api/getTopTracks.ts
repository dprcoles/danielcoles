import { getTopTracks } from '@/utils/spotifyApi'

type resType = {
  setHeader: (arg0: string, arg1: string) => void
  status: (
    arg0: number
  ) => {
    (): any
    new (): any
    json: {
      (arg0: { tracks: any }): any
      new (): any
    }
  }
}

type trackType = {
  artists: any[]
  external_urls: {
    spotify: any
  }
  name: any
}

export default async (_: any, res: resType) => {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track: trackType) => ({
    artist: track.artists.map((x: { name: any }) => x.name).join(', '),
    trackUrl: track.external_urls.spotify,
    title: track.name,
  }))

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({ tracks })
}
