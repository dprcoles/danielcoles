import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'
import { useTheme } from 'next-themes'

export default function Wrapper(props) {
  const { theme, setTheme } = useTheme()
  const { children, ...customMeta } = props
  const meta = {
    title: 'Daniel Coles | Software Engineer',
    description: `Full Stack Software Engineer that loves making fun things with code!`,
    type: 'website',
    ...customMeta,
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Daniel Coles' />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:site' content='@_danielcoles' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
      </Head>
      <Navbar theme={theme} setTheme={setTheme} />
      <main className='[ Main-Content ]'>{children}</main>
      <Footer />
    </div>
  )
}
