import { getCurrentlyPlaying } from "@/utils/api/spotify"

const get = async () => {
  const response = await getCurrentlyPlaying()

  console.log(response)

  if (response.status === 204 || response.status > 400) return { isPlaying: false }

  const track = await response.json()

  const { item, is_playing } = track

  const albumImageUrl = item.album.images[0].url
  const artist = item.artists.map((x: { name: string }) => x.name).join(", ")
  const isPlaying = is_playing
  const title = item.name
  const trackUrl = item.external_urls.spotify

  return {
    albumImageUrl,
    artist,
    isPlaying,
    trackUrl,
    title,
  }
}

export default get
