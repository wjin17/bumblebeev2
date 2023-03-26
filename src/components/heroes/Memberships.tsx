import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import dellaBee from '../../../public/assets/della-bee.jpg'
import toddlerRoom from '../../../public/assets/blocks.jpg'
import RoundLink from '../buttons/RoundLink'

type CollageImage = {
  image: StaticImageData
  alt: string
}

const images: FixedLengthArray<2, CollageImage> = [
  { image: dellaBee, alt: 'Light room' },
  { image: toddlerRoom, alt: 'Toddler room' },
]

interface IMembershipHero extends React.ComponentPropsWithoutRef<'section'> {}

// animate images on appear
// add a layout thing that scales down div + drops a bit when menu comes out

const MembershipHero: React.FC<IMembershipHero> = () => {
  return (
    <section className="mx-auto mt-24 max-w-7xl items-center justify-between px-8 md:mt-12 md:flex">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="lg:py-24">
          <div className="mx-auto max-w-xl">
            <h1 className="mb-4 max-w-md text-5xl font-bold">
              Memberships and Monthly Passes
            </h1>
            <p className="mb-4 max-w-md text-lg font-normal text-stone-600">
              Memberships are charged every month and are valid for entry to any
              Open Play time. Members also receive 20% off party packages.
            </p>
            <p className="mb-4 max-w-md text-lg font-normal text-stone-600">
              Monthly pass members have access to unlimited Open Play visits for
              30-days starting from the date of purchase.
            </p>
            <div>
              <RoundLink
                href="/#pricing"
                className="mt-4 bg-white px-12 py-4 text-lg font-bold shadow-lg hover:bg-amber-200"
                label="See pricing"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
          <Image
            className="h-40 w-full rounded-3xl object-cover sm:h-56 md:h-full"
            alt={images[0].alt}
            src={images[0].image}
          />

          <Image
            className="h-40 w-full rounded-3xl object-cover sm:h-56 md:h-full"
            alt={images[1].alt}
            src={images[1].image}
          />
        </div>
      </div>
    </section>
  )
}

export default MembershipHero
