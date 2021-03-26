import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export default function Wrapper(props) {
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
        <link
          rel='preload'
          href='/fonts/roboto-medium-webfont.woff2'
          as='font'
          type='font/woff2'
          crossOrigin
        />
        <link rel='icon' href='/logo.svg' />
        <title>{meta.title}</title>
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Daniel Coles' />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:site' content='@_danielcoles' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
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
      <main className='[ Main-Content ]'>{children}</main>
      <Footer />
    </div>
  )
}
