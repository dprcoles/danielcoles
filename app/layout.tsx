import React from "react"
import { Space_Grotesk } from "next/font/google"
import { AnimatedNavbar } from "@/components/layout"
import { Metadata } from "next"
import Footer from "@/components/layout/Footer"
import { Providers } from "./providers"
import Script from "next/script"

import "@/styles/globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Daniel Coles",
    template: "%s | Daniel Coles",
  },
  description: "Full Stack Software Engineer that loves making fun things with code!",
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
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
      <body className={spaceGrotesk.className}>
        <Providers>
          <div className="selection:text-black selection:bg-rose-300 dark:selection:bg-violet-500 dark:selection:text-white flex flex-col min-h-screen justify-between">
            <div className="[ Wrapper ]">
              <div className="[ Navbar ]">
                <AnimatedNavbar />
              </div>
              <main className="[ Main ] min-h-screen flex flex-col">
                <div className="max-w-4xl mx-auto mt-16 antialiased px-2 md:px-0 pb-16">
                  {children}
                </div>
              </main>
              <div className="[ Footer ]">
                <Footer />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
