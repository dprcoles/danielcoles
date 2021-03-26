import fs from 'fs'
import Wrapper from '../components/wrapper/wrapper'
import path from 'path'
import Hero from '../components/hero'
import AboutMe from '../components/aboutme'

export default function Home({ data, aboutmeData }) {
  return (
    <div>
      <Wrapper title={`${data.fullName} | ${data.jobTitle}`}>
        <div className='[ First-Section ]'>
          <Hero
            firstName={data.firstName}
            lastName={data.lastName}
            jobTitle={data.jobTitle}
          />
        </div>
        <AboutMe
          data={aboutmeData}
          firstName={data.firstName}
          lastName={data.lastName}
          jobTitle={data.jobTitle}
        />
      </Wrapper>
    </div>
  )
}

async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, function (err, data) {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

export const getStaticProps = async () => {
  const data = await readFile(path.join('info', 'index.json'))
  const aboutmeData = await readFile(path.join('info', 'aboutme.json'))

  return {
    props: {
      data: JSON.parse(data),
      aboutmeData: JSON.parse(aboutmeData),
    },
  }
}
