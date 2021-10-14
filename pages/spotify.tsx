import React from "react"
import { NextPage } from "next"
import useSWR from "swr"
import { useTheme } from "next-themes"
import { Wrapper } from "@/components/layout"
import fetcher from "@/utils/api/fetcher"
import { CurrentlyPlayingData, TopTracksData, TrackData } from "@/types/SpotifyData"
import { TrackCard, CurrentlyPlaying } from "@/components/index"
import { RoughNotationGroup } from "react-rough-notation"
import { Underline } from "@/components/notations"
import { shuffledColours } from "@/utils/helpers"

const Spotify: NextPage = () => {
  const { data: trackData } = useSWR<TopTracksData>("/api/getTopTracks", fetcher)
  const { data: playingData } = useSWR<CurrentlyPlayingData>("/api/getCurrentlyPlaying", fetcher)

  const { resolvedTheme } = useTheme()
  const { box, underline } = shuffledColours(resolvedTheme)

  return (
    <Wrapper page="Spotify">
      <div className="[ Spotify ]">
        <RoughNotationGroup show>
          <div className="text-4xl font-extrabold">
            <Underline colour={underline[0]} order={1} duration={500}>
              Spotify
            </Underline>
          </div>
          <div className="pt-4">
            If you know me, you know that I&apos;ll almost always be jamming out to some music and
            fine tuning my playlists with new finds! Below you can see a list of my top songs right
            now.
          </div>
        </RoughNotationGroup>
        {playingData ? (
          <div>
            <div className="p-4">
              <CurrentlyPlaying data={playingData} />
            </div>
            <div className="pt-4">
              {trackData &&
                trackData.tracks.map((track: TrackData, index: number) => (
                  <div key={index} className="[ Track ]">
                    <TrackCard track={track} rank={index} notationColour={box[index]} />
                    <hr className="dark:text-gray-700 text-gray-200" />
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Wrapper>
  )
}

export default Spotify
