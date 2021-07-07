import { NextPage } from 'next'
import Wrapper from '@/components/Wrapper'
import { Tech } from '@/components/tech'

export const TechPage: NextPage = () => {
  return (
    <Wrapper>
      <div className="py-36">
        <Tech />
      </div>
    </Wrapper>
  )
}

export default TechPage
