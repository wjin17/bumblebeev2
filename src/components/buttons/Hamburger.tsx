interface IHamburgerTemplate {
  menuOpen: boolean
  className?: string
}

interface IHamburgerTemplate extends React.ComponentPropsWithoutRef<'button'> {}

const Hamburger: React.FC<IHamburgerTemplate> = ({
  menuOpen,
  className,
  ...hamburgerProps
}) => {
  return (
    <button
      className={`h-10 w-10 focus:outline-none ${className}`}
      {...hamburgerProps}
    >
      <span className="sr-only">Open main menu</span>
      <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
        <span
          aria-hidden={true}
          className={`absolute block h-1 w-8 transform rounded-full bg-current transition duration-500 ease-in-out ${
            menuOpen ? 'rotate-45' : '-translate-y-2'
          }`}
        />
        <span
          aria-hidden={true}
          className={`absolute block h-1 transform rounded-full bg-current transition-opacity duration-500 ease-in-out ${
            menuOpen ? 'opacity-0' : 'w-6 translate-x-2'
          }`}
        />
        <span
          aria-hidden={true}
          className={`absolute block h-1 transform rounded-full bg-current transition duration-500 ease-in-out ${
            menuOpen ? 'w-8 -rotate-45' : 'w-5 translate-y-2 translate-x-3'
          }`}
        />
      </div>
    </button>
  )
}

export default Hamburger
