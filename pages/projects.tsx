import { NextPage } from 'next'
import Wrapper from '@/components/Wrapper'
import { Projects } from '@/components/projects'

export const ProjectsPage: NextPage = () => {
  return (
    <Wrapper>
      <div className="py-36">
        <Projects />
      </div>
    </Wrapper>
  )
}

export default ProjectsPage
