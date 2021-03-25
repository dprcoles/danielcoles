import useSWR from 'swr'
import { FaExternalLinkAlt } from 'react-icons/fa'

import fetcher from '../../utils/fetcher'

export default function CurrentlyPlaying() {
  const { data } = useSWR('/api/getCurrentlyPlaying', fetcher)
  console.log(data)

  return (
    <div className='[ Spotify ][ CurrentlyPlaying ] p-4 font-roboto'>
      <div className='[ Spotify ][ CurrentlyPlaying__Container ] mx-auto shadow-md rounded-lg max-w-lg border-dc-grey border-2'>
        {data?.isPlaying ? (
          <div className='[ Spotify ][ CurrentlyPlaying__IsPlaying ] grid grid-flow-row grid-cols-5 grid-rows-1 space-x-2'>
            <div className='[ Spotify ][ CurrentlyPlaying__TrackAlbumImage ]'>
              <img
                className='max-h-full max-w-full h-auto w-auto rounded-l-md'
                src={data.albumImageUrl}
                alt={`${data.album}-Image`}
              />
            </div>
            <div className='[ Spotify ][ CurrentlyPlaying__TrackInfo ] col-span-3'>
              <div className='[ Spotify ][ CurrentlyPlaying__Text ] italic opacity-75'>
                Currently Playing...
              </div>
              <div className='[ Spotify ][ CurrentlyPlaying__TrackTitle ] font-extrabold text-2xl whitespace-nowrap overflow-hidden'>
                {data.title}
              </div>
              <div className='[ Spotify ][ CurrentlyPlaying__TrackArtist ] font-bold text-xl whitespace-nowrap overflow-hidden'>
                {data.artist}
              </div>
            </div>
            <a
              className='[ Spotify ][ CurrentlyPlaying__TrackLink ]'
              href={data.trackUrl}
              target='_blank'
              title='Click to view song on Spotify'
            >
              <FaExternalLinkAlt size='large' className='p-8 self-center' />
            </a>
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
