import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '@/styles/main.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
