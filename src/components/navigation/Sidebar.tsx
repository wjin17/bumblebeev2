import Link from 'next/link'
import { useRouter } from 'next/router'

interface ISidebar {
  isOpen: boolean
  links: INavigationLink[]
  closeSidebar: () => void
}

interface ISidebar extends React.ComponentPropsWithoutRef<'header'> {}

const Sidebar: React.FC<ISidebar> = ({
  isOpen,
  closeSidebar,
  links,
  className,
  ...sideBarProps
}) => {
  const { pathname } = useRouter()
  const externalLinkRegex = /^http/
  return (
    <div
      className={`fixed left-0 top-0  h-screen w-full transform  transition duration-700 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-full'
      } ${className}`}
      onClick={closeSidebar}
      {...sideBarProps}
    >
      <div className="fixed right-0 flex h-full w-64 flex-col justify-between rounded-l-3xl bg-white py-32 px-8 shadow-2xl md:w-80">
        {links.map(({ title, href }) => {
          if (externalLinkRegex.test(href)) {
            return (
              <a
                key={title}
                href={href}
                className="group text-amber-900 transition duration-300"
                onClick={closeSidebar}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-4xl font-bold">{title}</h1>
                <span
                  className={`block h-0.5 ${
                    href === pathname ? 'max-w-full' : 'max-w-0'
                  }  h-2 rounded-full bg-amber-900 transition-all duration-500 group-hover:max-w-full`}
                ></span>
              </a>
            )
          } else if (href) {
            return (
              <Link
                key={title}
                href={href}
                className="group text-amber-900 transition duration-300"
                onClick={closeSidebar}
              >
                <h1 className="text-4xl font-bold">{title}</h1>
                <span
                  className={`block h-0.5 ${
                    href === pathname ? 'max-w-full' : 'max-w-0'
                  }  h-2 rounded-full bg-amber-900 transition-all duration-500 group-hover:max-w-full`}
                ></span>
              </Link>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Sidebar

// className={`fixed right-0 top-0 flex h-screen w-64 transform flex-col justify-between rounded-l-3xl bg-white py-32 px-8 shadow-2xl transition duration-500 ease-in-out md:w-80 ${
//   isOpen ? "translate-x-0" : "translate-x-64 md:translate-x-80"
// } ${className}`}
