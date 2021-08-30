import '../styles/global.scss'
import Head from 'next/head';

import styles from './app.module.scss';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <title>Clocker</title>
  </Head>
  return <Component {...pageProps} />
}
export default MyApp
