import "./styles/globals.css"

import classNames from "classnames"
import { Metadata } from "next"
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google"
import Script from "next/script"
import React from "react"

import Footer from "@/components/Footer"
import NavBlock from "@/components/NavBlock"
import { getCurrentlyPlaying } from "@/lib/spotify"

import { Providers } from "./providers"

const baseFont = Inter({
  subsets: ["latin"],
  variable: "--font-family-base",
})

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-family-heading",
})

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-family-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://danielcoles.dev"),
  applicationName: "Daniel Coles",
  title: {
    default: "Daniel Coles - Software Engineer",
    template: "%s | Daniel Coles",
  },
  creator: "me@danielcoles.co.uk",
  description: "Full Stack Software Engineer that loves making fun things with code!",
  icons: {
    shortcut: "/logo.svg",
  },
  openGraph: {
    title: "Daniel Coles - Software Engineer",
    description: "Full Stack Software Engineer that loves making fun things with code!",
    url: "https://danielcoles.dev",
    type: "website",
    siteName: "Daniel Coles",
    locale: "en_GB",
    images: [
      {
        url: "https://danielcoles.dev/me.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Coles - Software Engineer",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={classNames(baseFont.variable, headingFont.variable, monoFont.variable)}
    >
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
      <body className={"text-white bg-zinc-900"}>
        <Providers>
          <main className="mx-auto min-h-screen flex flex-col selection:text-zinc-900 selection:bg-violet-500">
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
