import fs from 'fs'
import Wrapper from '@/components/wrapper/wrapper'
import path from 'path'
import Hero from '@/components/hero'
import AboutMe from '@/components/aboutMe'
import { GetStaticProps } from 'next'

interface indexProps {
  data: {
    fullName: string
    jobTitle: string
    firstName: string
    lastName: string
    employer: string
  }
  aboutMeData: {
    interests: string
    hobbies: string
    games: Array<string>
    location: string
    musicText: string
  }
}

export default function Home({ data, aboutMeData }: indexProps) {
  return (
    <Wrapper>
      <div>
        <Hero firstName={data.firstName} lastName={data.lastName} jobTitle={data.jobTitle} />
      </div>
      <AboutMe
        data={aboutMeData}
        firstName={data.firstName}
        employer={data.employer}
        jobTitle={data.jobTitle}
      />
    </Wrapper>
  )
}

async function readFile(path: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, function (err, data) {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

export const getStaticProps: GetStaticProps<indexProps> = async () => {
  const data = await readFile(path.join('info', 'index.json'))
  const aboutMeData = await readFile(path.join('info', 'aboutMe.json'))

  return {
    props: {
      data: JSON.parse(data as string),
      aboutMeData: JSON.parse(aboutMeData as string),
    },
  }
}
