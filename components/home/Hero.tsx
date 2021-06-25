import MiniMe from './MiniMe'

interface HeroProps {
  firstName: string
  lastName: string
  jobTitle: string
}

const Hero: React.FC<HeroProps> = ({ firstName, lastName, jobTitle }) => {
  return (
    <header className="[ Hero ] container mx-auto text-dc-grey dark:text-white pt-8 bg-light-hero dark:bg-dark-hero md:bg-transparent md:dark:bg-transparent">
      <div className="grid grid-flow-row grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:gap-4 md:p-8 p-4 pt-8">
        <div className="[ Hero__Me ] md:self-center">
          <MiniMe />
        </div>
        <div className="[ Hero__Message ] self-center">
          <div className="[ Hero__Text ][ Greeting ] text-2xl md:text-3xl font-semibold pb-2">
            <span role="img" aria-label="waving-emoji">
              👋
            </span>{' '}
            Hey, I&apos;m
          </div>
          <div className="[ Hero__Text ][ FirstName ] text-8xl md:text-9xl font-extrabold">
            {firstName}
          </div>
          <div className="[ Hero__Text ][ LastName ] text-8xl md:text-9xl font-extrabold">
            {lastName}
          </div>
          <div className="[ Hero__Text ][ JobTitle ] text-4xl md:text-5xl font-semibold">
            {jobTitle}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
