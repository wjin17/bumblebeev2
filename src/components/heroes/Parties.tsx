import Image from 'next/image'
import confetti from 'canvas-confetti'
import RoundLink from '../buttons/RoundLink'
import PartayCalendar from '../calendar/PartayCalendar'

import Logo from '../../../public/bumblebee_logo.png'
import { startParty } from '@/utils/fireConfetti'
import { useRef, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface IPartyHero {}

interface IPartyHero extends React.ComponentPropsWithoutRef<'section'> {}

// animate images on appear
// add a layout thing that scales down div + drops a bit when menu comes out

const PartyHero: React.FC<IPartyHero> = () => {
  const [partyStarted, setPartyStarted] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  if (typeof window !== 'undefined' && isVisible && !partyStarted) {
    startParty()
    setPartyStarted(true)
  }

  return (
    <section
      id="#parties"
      className="mx-auto mt-8 flex min-h-screen max-w-7xl flex-col items-center justify-around sm:px-8 md:mt-0 md:flex-row"
    >
      <div className="my-auto w-full pr-0 text-center md:w-1/2 md:pr-16 md:text-start lg:w-2/5 lg:pr-0">
        <div className="flex">
          <h1 className="mb-4 text-5xl font-bold">We love to party!</h1>
          {/* <div className="w-1/4">
            <Image src={Logo} alt="logo" />
          </div> */}
        </div>
        <p className="mx-auto mb-4 px-8 text-lg font-normal text-stone-600 sm:px-0 md:max-w-lg">
          Host your little one&apos;s next birthday party at Bumblebee! Check
          the calendar for availabilities.
        </p>
        <div className="mb-0 flex">
          <RoundLink
            href="/parties"
            label="Get started"
            className="mx-auto mt-4 bg-amber-50 px-12 py-4 text-lg font-bold shadow-lg hover:bg-amber-200 md:ml-0"
          />
        </div>
      </div>
      <div className="mx-auto mt-6 flex w-full p-8 md:mt-0 md:w-1/2 lg:w-3/6">
        <PartayCalendar />
      </div>
      <div ref={ref} />
    </section>
  )
}

export default PartyHero
