import { useState } from 'react'
import Image from 'next/image'

import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Hamburger from '../buttons/Hamburger'

import HoneyComb from '../../../public/assets/honeycomb.png'

const LINKS = [
  { title: 'Home', href: '/' },
  { title: 'Visit', href: '/visit' },
  { title: 'Parties', href: '/parties' },
  { title: 'Calendar', href: '/calendar' },
  { title: 'Waiver', href: 'https://www.waiverfile.com/b/BumblebeePlayspace' },
]

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <Image
        src={HoneyComb}
        alt="honeycomb"
        className="absolute -top-10 -left-16 w-48 transition-all md:w-52 lg:w-64"
      />
      <Topbar links={LINKS} className="hidden md:flex" />
      <Sidebar
        className="z-50 md:hidden"
        links={LINKS}
        isOpen={menuOpen}
        closeSidebar={() => setMenuOpen(false)}
      />
      <Hamburger
        className="fixed top-6 right-6 z-50 ml-auto text-neutral-500 md:hidden"
        menuOpen={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      />
    </>
  )
}

export default Navigation
