import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  )
}
export default App;
