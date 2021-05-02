import Wrapper from '@/components/Wrapper'
import { About, Hero, Spotify } from '@/components/home'
import { firstName, lastName, jobTitle } from '../utils/constants'

export default function Home() {
  return (
    <Wrapper>
      <div>
        <Hero firstName={firstName} lastName={lastName} jobTitle={jobTitle} />
      </div>
      <section className="[ About ] bg-light-about dark:bg-dark-about">
        <div className="container mx-auto p-5 text-dc-grey dark:text-white">
          <About />
          <Spotify />
        </div>
      </section>
    </Wrapper>
  )
}
