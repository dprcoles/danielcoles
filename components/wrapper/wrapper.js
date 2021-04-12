import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'
import { useTheme } from 'next-themes'

export default function Wrapper() {
  const { theme, setTheme } = useTheme()
  const meta = {
    title: 'Daniel Coles | Software Engineer',
    description: `Full Stack Software Engineer that loves making fun things with code!`,
    type: 'website',
    siteName: 'Daniel Coles',
    twitterHandle: '@_danielcoles',
    url: 'https://danielcoles.dev',
    image: 'https://danielcoles.dev/meta.png',
    imageAlt: 'Logo for danielcoles.dev',
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content={meta.siteName} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:image' content={meta.image} />
        <meta property='og:image:alt' content={meta.imageAlt} />
        <meta name='twitter:creator' content={meta.twitterHandle} />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        <meta name='twitter:image:alt' content={meta.imageAlt} />
      </Head>
      <div className='[ Wrapper ]'>
        <Navbar theme={theme} setTheme={setTheme} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
