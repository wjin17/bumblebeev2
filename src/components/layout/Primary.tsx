import Head from 'next/head'
import { useState } from 'react'
import Hamburger from '../buttons/Hamburger'
import Sidebar from '../navigation/Sidebar'
import Footer from '../tapas/Footer'

interface IPrimaryLayout {}

interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="relative w-full">
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
      {children}
      <Sidebar
        isOpen={menuOpen}
        closeSidebar={() => setMenuOpen(false)}
        className="z-50"
      />
      <Hamburger
        className="fixed top-6 right-6 z-50 ml-auto text-neutral-500"
        menuOpen={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      />
      <Footer />
    </div>
  )
}

export default PrimaryLayout
