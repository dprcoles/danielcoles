import Wrapper from '@/components/Wrapper'
import { Dashboard } from '@/components/dashboard'

export default function dashboard() {
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
