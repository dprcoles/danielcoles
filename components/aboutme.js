import CurrentlyPlaying from './spotify/currentlyPlaying'
import TopTracks from './spotify/topTracks'

export default function aboutme({ data, firstName, employer, jobTitle }) {
  return (
    <section className='[ AboutMe ] bg-pastel-blue'>
      <div className='container mx-auto p-5 text-dc-grey'>
        <div className='[ AboutMe__Title ][ AboutMe__Text ] font-roboto font-extrabold text-7xl text-left py-10'>
          About Me
        </div>
        <div className='font-roboto relative md:grid md:grid-flow-row md:grid-cols-2 md:p-4 py-4 md:space-x-4 md:space-y-4'>
          <div className='[ AboutMe__Article ][ Intro ] p-4 col-start-1 col-end-1'>
            <div className='[ AboutMe__Text ][ Heading ] text-2xl font-extrabold text-left pb-4'>
              Who am I?
            </div>
            <p className='[ AboutMe__Text ][ Summary ] font-bold text-lg text-left py-2'>
              Hey, I'm {firstName}. I work at {employer} as a {jobTitle}, and
              aim to continue on my journey into the world of technology and
              learn as many wicked and wonderful things as I can!
            </p>
            <p className='[ AboutMe__Text ][ Interests ] font-bold text-lg text-left py-2'>
              {data.interests}
            </p>
            <p className='[ AboutMe__Text ][ Hobbies ] font-bold text-lg text-left py-2'>
              {data.hobbies} {data.games.join(', ')}.
            </p>
            <p className='[ AboutMe__Text ][ Location ] font-bold text-lg text-left py-2'>
              {data.location}
            </p>
          </div>
        </div>
        <div className='font-roboto relative md:grid md:grid-flow-row md:grid-cols-2 md:p-4 py-4 md:space-x-4 md:space-y-4'>
          <div className='[ AboutMe__Article ][ Music ] p-4 col-start-2 col-end-2'>
            <div className='[ AboutMe__Text ][ Heading ] text-2xl font-extrabold text-left pb-4'>
              Music!
            </div>
            <p className='[ AboutMe__Text ] font-bold text-lg text-left py-2'>
              {data.musicText}
            </p>
            <p className='[ AboutMe__Text ] font-bold text-lg text-left py-2'>
              Below you can see what i'm currently listening to, as well as my
              top tracks on Spotify.
            </p>
            <CurrentlyPlaying />
            <TopTracks />
          </div>
        </div>
      </div>
    </section>
  )
}
