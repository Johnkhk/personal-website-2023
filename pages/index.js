import Head from 'next/head'
// import Landing from 'pages/landing.js'
// import Landing from '~/pages/landing.js'
import Landing from './Landing'



export default function Home() {
  return (
    <>
      <Head>
        <title>John Ho&apos;s Website</title>
        <meta name="description" content="Kwok Hung Ho's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing/>
    </>
  )
}
