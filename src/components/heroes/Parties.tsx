import RoundLink from '../buttons/RoundLink'
import PartayCalendar from '../calendar/PartayCalendar'

interface IPartyHero {}

interface IPartyHero extends React.ComponentPropsWithoutRef<'section'> {}

// animate images on appear
// add a layout thing that scales down div + drops a bit when menu comes out

const PartyHero: React.FC<IPartyHero> = () => {
  return (
    <section
      id="#parties"
      className="mx-auto mt-8 flex min-h-screen max-w-7xl flex-col items-center justify-around px-8 md:mt-0 md:flex-row"
    >
      <div className="my-auto w-full pr-0 text-center md:w-1/2 md:pr-16 md:text-start lg:w-2/5 lg:pr-0">
        <h1 className="mb-8 text-5xl font-bold md:text-7xl">
          We love to party! 🐝
        </h1>
        <p className="mb-8 max-w-md text-lg leading-relaxed text-stone-700">
          Host your little one&apos;s next birthday party at Bumblebee! Check
          the calendar for availabilities.
        </p>
        <div className="mb-0 flex">
          <RoundLink
            href="#pricing"
            label="Pricing"
            className="mx-auto bg-white px-12 py-4 text-lg font-bold shadow-lg hover:bg-amber-200 md:ml-0"
          />
        </div>
      </div>
      <div className="mt-6 flex w-full p-8 md:mx-auto md:mt-0 md:w-1/2 lg:w-3/6">
        <PartayCalendar />
      </div>
    </section>
  )
}

export default PartyHero
