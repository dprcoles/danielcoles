import querystring from "querystring"

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

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
      refresh_token: refreshToken,
    }),
  })

  return response.json()
}

export const getCurrentlyPlaying = async (): Promise<Response> => {
  const { access_token } = await getAccessToken()

  return fetch(CURRENTLY_PLAYING_BASE_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getTopTracks = async (): Promise<Response> => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_TRACKS_BASE_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
