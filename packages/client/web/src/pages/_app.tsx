import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Proffy</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
