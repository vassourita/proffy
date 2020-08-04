import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

import { GlobalStyles } from 'src/assets/styles/global'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Proffy</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyles />
      <div id="root">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
