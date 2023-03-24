import RoundLink from '../buttons/RoundLink'

export interface IOpenPlayHero {}

const OpenPlayHero: React.FC<IOpenPlayHero> = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="mb-4 text-5xl font-bold text-amber-900">Open play</h1>
          <p className="mx-auto mb-4 text-lg font-normal text-stone-600 md:max-w-lg">
            Come join us for Open Play! No reservations required, walk in any
            time. Re-entry available on same day visits.
          </p>
          <p className="mx-auto mb-4 text-lg font-normal text-stone-600 md:max-w-lg">
            First time visitors are recommended to complete our waiver before
            arriving.
          </p>
          <p className="mx-auto mb-4 text-lg font-normal text-stone-600 md:max-w-lg">
            At this time, we still require adults to wear masks. Shoes are not
            allowed in our play areas, so please remember to bring socks.
          </p>
        </div>
        <div className="flex w-full flex-col px-8">
          <RoundLink
            href="https://www.waiverfile.com/b/BumblebeePlayspace"
            label="Sign waiver"
            className="mx-auto bg-white px-12 py-4 text-lg font-bold shadow-lg hover:bg-amber-200"
          />
        </div>
      </div>
    </section>
  )
}

export default OpenPlayHero
