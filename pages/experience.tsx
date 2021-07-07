import { NextPage } from 'next'
import Wrapper from '@/components/Wrapper'
import { Experience } from '@/components/experience'

export const ExperiencePage: NextPage = () => {
  return (
    <Wrapper>
      <div className="py-36">
        <Experience />
      </div>
    </Wrapper>
  )
}

export default ExperiencePage
