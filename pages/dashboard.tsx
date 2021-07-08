import { NextPage } from 'next'
import Wrapper from '@/components/Wrapper'
import { Dashboard } from '@/components/dashboard'

export const DashboardPage: NextPage = () => {
  return (
    <div>
      <Wrapper>
        <div className="py-36">
          <Dashboard />
        </div>
      </Wrapper>
    </div>
  )
}

export default DashboardPage
