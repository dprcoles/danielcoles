import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/logo.svg" />
          <link rel="shortcut icon" href="/logo.svg" />
          <link rel="apple-touch-icon" href="/logo.svg" sizes="180x180" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
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
