import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";

function App({ Component, pageProps, router }: AppProps) {
  const [appMounted, setAppMounted] = useState(false)

  useEffect(() => setAppMounted(true), [])

  return (
    <ThemeProvider attribute="class">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} appMounted={appMounted} />
      </AnimatePresence>
    </ThemeProvider>
  )
}
export default App;
