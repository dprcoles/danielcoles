export type TopTracks = {
  tracks: Array<Track>
}

export type Track = {
  title: string
  artist: string
  trackUrl: string
}

export type TrackType = {
  artists: Artists[]
  external_urls: {
    spotify: string
  }
  name: string
}

export type Artists = {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export type CurrentlyPlayingInfo = {
  isPlaying: boolean
  albumImageUrl: string
  title: string
  artist: string
  trackUrl: string
}
