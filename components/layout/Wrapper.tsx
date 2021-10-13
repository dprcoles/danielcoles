import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

interface WrapperProps {
  children?: React.ReactNode
  page: string
}

const meta = {
  title: "Daniel Coles - Software Engineer",
  description: `Full Stack Software Engineer that loves making fun things with code!`,
  type: "website",
  siteName: "Daniel Coles",
  twitterHandle: "@_danielcoles",
  url: "https://danielcoles.dev",
  image: "https://danielcoles.dev/meta.png",
  imageAlt: "Logo for danielcoles.dev",
}

const Wrapper: React.FC<WrapperProps> = ({ children, page }) => {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Head>
        <title>
          {page} | {meta.title}
        </title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`${meta.url}${router.asPath}`} />
        <meta property="og:url" content={`${meta.url}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.imageAlt} />
        <meta name="twitter:creator" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content={meta.imageAlt} />
      </Head>
      <div className="[ Wrapper ]">
        <Navbar />
        <main className="[ Main ]">
          <div className="max-w-4xl mx-auto mt-16 antialiased px-2 md:px-0 pb-16">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Wrapper
