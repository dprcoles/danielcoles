import "@/styles/globals.css"

import classNames from "classnames"
import { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import Script from "next/script"
import React from "react"

import Footer from "@/components/Footer"
import NavBlock from "@/components/NavBlock"
import { getCurrentlyPlaying } from "@/lib/spotify"

import { Providers } from "./providers"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  applicationName: "Daniel Coles",
  title: {
    default: "Daniel Coles - Software Engineer",
    template: "%s | Daniel Coles",
  },
  colorScheme: "dark",
  creator: "me@danielcoles.co.uk",
  description: "Full Stack Software Engineer that loves making fun things with code!",
  icons: {
    shortcut: "/logo.svg",
  },
  themeColor: {
    color: "rgb(24, 24, 27)",
  },
  openGraph: {
    title: "Daniel Coles - Software Engineer",
    description: `Full Stack Software Engineer that loves making fun things with code!`,
    url: "https://danielcoles.dev",
    type: "website",
    images: [
      {
        url: "https://danielcoles.dev/meta.png",
        alt: "Logo for danielcoles.dev",
      },
      {
        url: "https://danielcoles.dev/me.png",
        alt: "Daniel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Coles - Software Engineer",
    description: "Full Stack Software Engineer that loves making fun things with code!",
    site: "@_danielcoles",
    creator: "@_danielcoles",
    creatorId: "1295450166699458562",
    images: ["https://danielcoles.dev/me.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentlyPlaying = await getCurrentlyPlaying()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" />
        <link rel="shortcut icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" sizes="180x180" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-434SZPP6T5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-434SZPP6T5');
          `}
        </Script>
      </head>
      <body className={classNames(spaceGrotesk.className, "text-white bg-zinc-900")}>
        <Providers>
          <main className="mx-auto min-h-screen flex flex-col selection:text-zinc-900 selection:bg-violet-500">
            <svg
              className="pointer-events-none fixed isolate z-30 opacity-50 mix-blend-soft-light"
              width="100%"
              height="100%"
            >
              <filter id="displacementFilter">
                <feTurbulence
                  type="turbulence"
                  baseFrequency="0.9"
                  numOctaves="3"
                  result="turbulence"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#displacementFilter)"></rect>
            </svg>
            <NavBlock currentlyPlaying={currentlyPlaying} />
            <div className="max-w-full lg:max-w-4xl mx-auto mt-8 antialiased px-4 pb-16">
              <div className="py-2 min-h-screen">{children}</div>
            </div>
            <Footer />
            <div id="background-pattern" />
          </main>
        </Providers>
      </body>
    </html>
  )
}
