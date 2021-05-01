import { CurrentlyPlaying, TopTracks } from './spotify'
import { firstName, employer, jobTitle, games } from '@/utils/constants'

const About: React.FC = () => {
  return (
    <>
      <div className="[ About__Title ][ About__Text ] font-roboto font-extrabold text-7xl text-left py-10">
        About Me
      </div>
      <div className="font-roboto relative md:grid md:grid-flow-row md:grid-cols-2 md:p-4 py-4 md:space-x-4 md:space-y-4">
        <div className="[ About__Article ][ Intro ] p-4 col-start-1 col-end-1">
          <div className="[ About__Text ][ Heading ] text-2xl font-extrabold text-left pb-4">
            Who am I?
          </div>
          <p className="[ About__Text ][ Summary ] font-bold text-lg text-left py-2">
            Hey, I&apos;m {firstName}. I work at {employer} as a {jobTitle}, and aim to continue on
            my journey into the world of technology and learn as many wicked and wonderful things as
            I can!
          </p>
          <p className="[ About__Text ][ Interests ] font-bold text-lg text-left py-2">
            I like making cool and interesting things with code, as well as designing stuff for fun.
          </p>
          <p className="[ About__Text ][ Hobbies ] font-bold text-lg text-left py-2">
            In my spare time I will probably be doing one of two things, listening to music or
            gaming, sometimes both! At the moment, I am really enjoying: {games.join(', ')}.
          </p>
          <p className="[ About__Text ][ Location ] font-bold text-lg text-left py-2">
            I&apos;m currently based in Luton, England.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
