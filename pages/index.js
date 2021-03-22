import React from 'react'
import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Navbar from '../components/index/navbar'
import Hero from '../components/index/hero'
import AboutMe from '../components/index/aboutme'
import Footer from '../components/index/footer'

export default function Home({ indexInfo, footerInfo }) {
  const data = JSON.parse(indexInfo)
  const footerData = JSON.parse(footerInfo)

  return (
    <div>
      <Head>
        <title>
          {data.fullName} | {data.jobTitle}
        </title>
        <link rel='icon' href='/logo.svg' />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-434SZPP6T5'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-434SZPP6T5');;`,
          }}
        />
      </Head>
      <Navbar />
      <main tabIndex='-1' className='main-content'>
        <Hero
          firstName={data.firstName}
          lastName={data.lastName}
          jobTitle={data.jobTitle}
        />
        <AboutMe />
      </main>
      <Footer data={footerData} />
    </div>
  )
}

export const getStaticProps = async () => {
  const indexInfo = fs.readFileSync(path.join('info', 'index.json')).toString()
  const footerInfo = fs
    .readFileSync(path.join('info', 'footer.json'))
    .toString()

  return {
    props: {
      indexInfo,
      footerInfo,
    },
  }
}
