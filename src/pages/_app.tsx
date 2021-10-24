import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import DefaultLayout from 'components/Layouts/default'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || DefaultLayout

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>NextJS - Boilerplate</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project started to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
