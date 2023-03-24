import Link from 'next/link'

interface IRoundLink {
  label: string
  href: string
  className?: string
}

interface IRoundLink extends React.ComponentPropsWithoutRef<'a'> {}

const RoundLink: React.FC<IRoundLink> = ({
  label,
  href,
  className,
  ...linkProps
}) => {
  const externalLinkRegex = /^http/
  if (externalLinkRegex.test(href)) {
    return (
      <a
        className={`inline-block rounded-full px-8 py-2 ${className}`}
        {...linkProps}
        href={href}
      >
        <h1>{label}</h1>
      </a>
    )
  } else {
    return (
      <Link
        className={`inline-block rounded-full px-8 py-2 ${className}`}
        {...linkProps}
        href={href}
      >
        <h1>{label}</h1>
      </Link>
    )
  }
}

export default RoundLink
