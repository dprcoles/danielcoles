import Minime from './minime'

export default function hero({ firstName, lastName, jobTitle }) {
  return (
    <header className='[ Hero ] container mx-auto text-dc-grey'>
      <div className='grid grid-flow-row grid-cols-2 grid-rows-1 gap-4'>
        <div className='[ Hero__Me ] self-center'>
          <Minime />
        </div>
        <div className='[ Hero__Message ] self-center'>
          <div className='[ Hero__Text ][ Greeting ] text-3xl font-semibold font-roboto pb-2'>
            👋 Hey, I'm
          </div>
          <div className='[ Hero__Text ][ FirstName ] text-9xl font-extrabold font-roboto'>
            {firstName}
          </div>
          <div className='[ Hero__Text ][ LastName ] text-9xl font-extrabold font-roboto'>
            {lastName}
          </div>
          <div className='[ Hero__Text ][ JobTitle ] text-5xl font-semibold font-roboto'>
            {jobTitle}
          </div>
        </div>
      </div>
    </header>
  )
}
