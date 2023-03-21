"server only"

import querystring from "querystring"
import { cache } from "react"

import { Artists, CurrentlyPlayingInfo, TrackType } from "@/types/spotify"

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

const GET_TOKEN_BASE_URL = "https://accounts.spotify.com/api/token"
const CURRENTLY_PLAYING_BASE_URL = "https://api.spotify.com/v1/me/player/currently-playing"
const TOP_TRACKS_BASE_URL = "https://api.spotify.com/v1/me/top/tracks?time_range=short_term"

const getAccessToken = async () => {
  const response = await fetch(GET_TOKEN_BASE_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  })

  return response.json()
}

export const getCurrentlyPlaying = async () => {
  const { access_token } = await getAccessToken()

  const response = await fetch(CURRENTLY_PLAYING_BASE_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: { revalidate: 30 },
  })

  const notPlayingResponse: CurrentlyPlayingInfo = {
    isPlaying: false,
    albumImageUrl: "",
    artist: "",
    title: "",
    trackUrl: "",
  }

  if (response.status === 204 || response.status > 400) {
    return notPlayingResponse
  }

  const track = await response.json()

  const { item, is_playing } = track

  if (!is_playing) return notPlayingResponse

  const albumImageUrl = item.album.images[0].url
  const artist = item.artists.map((x: { name: string }) => x.name).join(", ")
  const isPlaying = is_playing
  const title = item.name
  const trackUrl = item.external_urls.spotify

  const data: CurrentlyPlayingInfo = {
    albumImageUrl,
    artist,
    isPlaying,
    trackUrl,
    title,
  }

  return data
}

export const getTopTracks = cache(async () => {
  const { access_token } = await getAccessToken()

  const response = await fetch(TOP_TRACKS_BASE_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track: TrackType) => ({
    artist: track.artists.map((x: Artists) => x.name).join(", "),
    trackUrl: track.external_urls.spotify,
    title: track.name,
  }))

  return tracks
})
