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
