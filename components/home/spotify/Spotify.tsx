import CurrentlyPlaying from './CurrentlyPlaying'
import TopTracks from './TopTracks'

const Spotify: React.FC = () => {
  return (
    <>
      <div className="relative md:grid md:grid-flow-row md:grid-cols-2 md:p-4 py-4 md:space-x-4 md:space-y-4">
        <div className="[ About__Article ][ Music ] p-4 col-start-2 col-end-2 border-2 border-dc-grey dark:border-white">
          <div className="[ About__Text ][ Heading ] text-2xl font-extrabold text-left pb-4">
            Music!
          </div>
          <p className="[ About__Text ] font-bold text-lg text-left py-2">
            If you know me, you know that I&apos;ll almost always be jamming out to some music and
            fine tuning my playlists with new finds.
          </p>
          <p className="[ About__Text ] font-bold text-lg text-left py-2">
            Below you can see what i&apos;m currently listening to, as well as my top tracks on
            Spotify.
          </p>
          <CurrentlyPlaying />
          <TopTracks />
        </div>
      </div>
    </>
  )
}

export default Spotify
