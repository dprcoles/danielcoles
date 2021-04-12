import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/roboto-medium-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/roboto-medium-webfont.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/logo.svg" />
          <link rel="shortcut icon" href="/logo.svg" />
          <link rel="apple-touch-icon" href="/logo.svg" sizes="180x180" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-434SZPP6T5"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-434SZPP6T5');;`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
