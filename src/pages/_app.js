import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Salvador Gómez - Home</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
