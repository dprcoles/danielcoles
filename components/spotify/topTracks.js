import useSWR from 'swr'
import { FaExternalLinkAlt } from 'react-icons/fa'
import fetcher from '../../utils/fetcher'

export default function NowPlaying() {
  const { data } = useSWR('/api/getTopTracks', fetcher)

  return (
    <div className='[ Spotify ][ TopTracks ] p-4 font-roboto'>
      <div className='[ Spotify ][ TopTracks__Text ] text-2xl font-extrabold pb-4'>
        My top 10 songs on Spotify
      </div>
      <div className='[ Spotify ][ TopTracks__List ] max-w-lg'>
        {data?.tracks.map((track, index) => (
          <div
            key={index}
            className={`[ Spotify ][ TopTracks__Track ][ Rank__${
              index + 1
            } ] flex flex-row items-baseline`}
          >
            <p className='[ Spotify ][ TopTracks__Text ] font-bold text-xl text-left'>
              {(index + 1).toString().padStart(2, '0')}
            </p>
            <div className='pl-4'>
              <div className='[ Spotify ][ TopTracks__Text ] font-bold text-xl whitespace-nowrap overflow-hidden'>
                {track.title}
              </div>
              <div className='[ Spotify ][ TopTracks__Text ] font-bold text-lg opacity-75 whitespace-nowrap overflow-hidden'>
                {track.artist}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
