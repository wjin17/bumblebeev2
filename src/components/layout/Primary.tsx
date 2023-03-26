import Head from 'next/head'

import Footer from '../tapas/Footer'
import BouncerBee from '../tapas/BouncerBee'
import Navigation from '../navigation/Navigation'

interface IPrimaryLayout {}

interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <div className="w-full">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <Navigation />
      <BouncerBee />
      {children}
      <Footer />
    </div>
  )
}

export default PrimaryLayout
