import RoundLink from '../buttons/RoundLink'
import PricingCard from '../cards/Pricing'

interface IPricingHero extends React.ComponentPropsWithoutRef<'section'> {}

const PricingHero: React.FC<IPricingHero> = () => {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-7xl items-center justify-between px-8 pt-32"
    >
      <h1 className="mb-4 text-5xl font-bold text-amber-900">Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <PricingCard
          title="Open play"
          //description="Admissions is per child. Adults and siblings under 12 months are free. No reservations needed. Admissions is valid for full day access with re-entry. No restrictions on number of adults."
        >
          <div className="mt-auto font-medium">
            <div className="flex xl:justify-between">
              <h1 className="w-52 xl:w-auto">Little Bee {'(Age 1-10yrs)'}</h1>
              <h1>$15</h1>
            </div>
            <div className="mt-4 flex xl:justify-between">
              <h1 className="w-52 xl:w-auto">Sibling {'(Age 1-10yrs)'}</h1>
              <h1>$10</h1>
            </div>
            <div className="mt-4 flex xl:justify-between">
              <h1 className="w-52 xl:w-auto">Baby Bee {'(Under 1yr)'}</h1>
              <h1>$10</h1>
            </div>
            <RoundLink
              href="/visit"
              label="Visit"
              className="mt-4 bg-amber-300 text-center hover:bg-amber-200 xl:w-3/4"
            />
          </div>
        </PricingCard>
        <PricingCard
          title="Private play"
          description="Private play admission is per person (adults and children) and is charged per hour. Reservations must be made in advance."
        >
          <div className="mt-auto font-medium">
            <div className="mt-8 flex lg:mt-8 xl:justify-between">
              <h1 className="w-52 xl:w-auto">Per Bee {'(Over 1yr)'}</h1>
              <h1>$25</h1>
            </div>
            <div className="mt-4 flex xl:justify-between">
              <h1 className="w-52 xl:w-auto">Baby Bee {'(Under 1yr)'}</h1>
              <h1>$14</h1>
            </div>
            <RoundLink
              href="#location"
              label="Contact us"
              className="mt-4 bg-amber-300 text-center hover:bg-amber-200 xl:w-3/4"
            />
          </div>
        </PricingCard>
        <PricingCard
          title="Memberships"
          description="Members get unlimited access to open play and 20% off parties."
        >
          <div className="mt-auto font-medium">
            <div className="mt-8 flex lg:mt-8 xl:justify-between">
              <h1 className="w-52 xl:w-auto">Little Bee {'(Age 6mo+)'}</h1>
              <h1>$45</h1>
            </div>
            <div className="mt-4 flex xl:justify-between">
              <h1 className="w-52 xl:w-auto">Any additional bees</h1>
              <h1>+$20</h1>
            </div>

            <RoundLink
              href="#location"
              label="Contact us"
              className="mt-4 bg-amber-300 text-center hover:bg-amber-200 xl:w-3/4"
            />
          </div>
        </PricingCard>
        <PricingCard
          title="Parties"
          description="Starts at $400 for 10 children and includes exclusive use of our space for 2.5 hours. Other packages available as well!"
        >
          <div className="mt-auto font-medium">
            <RoundLink
              label="Learn more"
              href="/parties"
              className="mt-4 bg-amber-300 text-center hover:bg-amber-200 xl:w-3/4"
            />
          </div>
        </PricingCard>
      </div>
    </section>
  )
}

export default PricingHero
