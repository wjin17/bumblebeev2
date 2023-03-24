import { format } from 'date-fns'

interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <footer className="text-stone-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        <p className="mt-4 text-sm text-stone-700 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-amber-900 sm:py-2 sm:pl-4">
          © {format(new Date(), 'yyyy')} Bumblebee Playspace — Learn, Play, Grow
        </p>
      </div>
    </footer>
  )
}

export default Footer
