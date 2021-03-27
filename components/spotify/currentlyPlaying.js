import useSWR from 'swr'

import fetcher from '../../utils/fetcher'

export default function CurrentlyPlaying() {
  const { data } = useSWR('/api/getCurrentlyPlaying', fetcher)

  return (
    <div className='[ Spotify ][ CurrentlyPlaying ] md:p-4 font-roboto'>
      <div className='[ Spotify ][ CurrentlyPlaying__Container ] md:mx-auto shadow-md rounded-lg border-dc-grey border-2'>
        {data?.isPlaying ? (
          <div className='[ Spotify ][ CurrentlyPlaying__IsPlaying ] grid grid-flow-row md:grid-cols-5 grid-cols-3 grid-rows-1 space-x-2'>
            <div className='[ Spotify ][ CurrentlyPlaying__TrackAlbumImage ]'>
              <img
                className='max-h-full max-w-full h-auto w-auto rounded-l-md'
                src={data.albumImageUrl}
                alt={`${data.title}-Image`}
              />
            </div>
            <div className='[ Spotify ][ CurrentlyPlaying__TrackInfo ] md:col-span-4 col-span-2'>
              <div className='[ Spotify ][ CurrentlyPlaying__Text ] italic opacity-75 whitespace-nowrap overflow-hidden'>
                Currently Playing...
              </div>
              <div className='[ Spotify ][ CurrentlyPlaying__TrackTitle ] font-extrabold text-lg md:text-3xl whitespace-nowrap overflow-hidden'>
                {data.title}
              </div>
              <div className='[ Spotify ][ CurrentlyPlaying__TrackArtist ] font-bold text-base md:text-2xl whitespace-nowrap overflow-hidden'>
                {data.artist}
              </div>
              <div className='[ Spotify ][ CurrentlyPlaying__TrackLink ] opacity-75'>
                <a
                  href={data.trackUrl}
                  target='_blank'
                  title='Click to view song on Spotify'
                  rel='noreferrer'
                  className='underline'
                >
                  View song on Spotify
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className='[ Spotify ][ NotPlaying ]'>
            <div className='[ Spotify ][ NotPlaying ][ CurrentlyPlaying__Text ] p-5 self-center text-center font-bold'>
              Looks like i'm not playing anything at the moment!
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
