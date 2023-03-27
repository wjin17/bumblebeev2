import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from '../../../public/bumblebee_logo.png'

interface ITopbar {
  links: INavigationLink[]
}

interface ITopbar extends React.ComponentPropsWithoutRef<'header'> {}

const Topbar: React.FC<ITopbar> = ({ links, className }) => {
  const { pathname } = useRouter()
  const externalLinkRegex = /^http/
  console.log(externalLinkRegex.test('/visit'))
  return (
    <header className={`relative flex h-24 items-center ${className}`}>
      <div className="ml-52 flex w-full justify-between">
        <Link href="/" aria-label="Navigate to home">
          <Image src={Logo} alt="logo" className="w-20" />
        </Link>
        <div className="mr-16 flex w-2/3 items-center justify-around border-b-4 border-amber-900">
          {links.map(({ title, href }) =>
            externalLinkRegex.test(href) ? (
              <a
                key={title}
                href={href}
                className="group text-amber-900 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-xl">{title}</h1>
                <span
                  className={`block h-0.5 ${
                    href === pathname ? 'max-w-full' : 'max-w-0'
                  }  h-1 rounded-full bg-amber-900 transition-all duration-500 group-hover:max-w-full`}
                ></span>
              </a>
            ) : (
              <Link
                key={title}
                href={href}
                className="group text-amber-900 transition duration-300"
              >
                <h1 className="text-xl">{title}</h1>
                <span
                  className={`block h-0.5 ${
                    href === pathname ? 'max-w-full' : 'max-w-0'
                  }  h-1 rounded-full bg-amber-900 transition-all duration-500 group-hover:max-w-full`}
                ></span>
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  )
}

export default Topbar
