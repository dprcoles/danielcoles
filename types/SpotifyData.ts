export type TopTracksData = {
  tracks: Array<TrackData>
}

export type TrackData = {
  title: string
  artist: string
  trackUrl: string
}

export type TrackType = {
  artists: ArtistsData[]
  external_urls: {
    spotify: string
  }
  name: string
}

export type ArtistsData = {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export type CurrentlyPlayingData = {
  isPlaying: boolean
  albumImageUrl: string
  title: string
  artist: string
  trackUrl: string
}
