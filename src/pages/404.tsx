import RoundLink from '@/components/buttons/RoundLink'
import Image from 'next/image'
import logo from '../../public/bumblebee_logo.png'

const NotFound = () => {
  return (
    <div className="h-[calc(100vh-13rem)] justify-center">
      <center className="m-auto mt-24">
        <Image src={logo} alt="logo" className="w-48 md:w-64" />
        <div className=" mt-4">
          <h1 className="mb-4 max-w-sm text-5xl font-bold">
            <span>4 0 4</span>
          </h1>
          <p className="mb-4 max-w-md text-lg font-normal text-stone-600">
            Sorry, we couldn&apos;t find what you&apos;re looking for.
          </p>
        </div>
      </center>
      <center className="mt-6">
        <RoundLink
          href="/"
          label="Back to home"
          className="mx-auto bg-white px-12 py-4 text-lg font-bold shadow-lg hover:bg-amber-200"
        />
      </center>
    </div>
  )
}

export default NotFound
