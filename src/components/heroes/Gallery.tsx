import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import lightRoom from '../../../public/assets/light-room.jpg'
import toddlerRoom from '../../../public/assets/toddler-room.jpg'
import mainRoom2 from '../../../public/assets/mainroom2.jpg'
import trainTable from '../../../public/assets/train-table.jpg'
import bday from '../../../public/assets/bday-partay.jpg'
import market from '../../../public/assets/market.jpg'

type CollageImage = {
  image: StaticImageData
  alt: string
}

const images: FixedLengthArray<6, CollageImage> = [
  { image: lightRoom, alt: 'Light room' },
  { image: toddlerRoom, alt: 'Toddler room' },
  { image: mainRoom2, alt: 'Main room' },
  { image: trainTable, alt: 'Train table' },
  { image: bday, alt: 'Birthday Party' },
  { image: market, alt: 'Market' },
]

interface IGalleryHero extends React.ComponentPropsWithoutRef<'section'> {}

const GalleryHero: React.FC<IGalleryHero> = () => {
  return (
    <section className="mx-auto mt-24 max-w-7xl items-center justify-between px-8 md:mt-24 md:flex">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-1/2">
          <div className="flex">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                className="block h-full w-full rounded-3xl object-cover object-center"
                alt={images[0].alt}
                src={images[0].image}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                className="block h-full w-full rounded-3xl object-cover object-center"
                alt={images[1].alt}
                src={images[1].image}
              />
            </div>
          </div>
          <div className="w-full p-1 md:p-2">
            <Image
              className="block h-full w-full rounded-3xl object-cover object-center"
              alt={images[2].alt}
              src={images[2].image}
            />
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2">
          <div className="w-full p-1 md:p-2">
            <Image
              className="block h-full w-full rounded-3xl object-cover object-center"
              alt={images[3].alt}
              src={images[3].image}
            />
          </div>
          <div className="flex">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                className="block h-full w-full rounded-3xl object-cover object-center"
                alt={images[4].alt}
                src={images[4].image}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                className="block h-full w-full rounded-3xl object-cover object-center"
                alt={images[5].alt}
                src={images[5].image}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto flex flex-wrap px-5 py-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                className="block h-full w-full rounded-3xl object-cover object-center"
                alt={images[0].alt}
                src={images[0].image}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                className="block h-full w-full rounded-3xl object-cover object-center"
                alt={images[1].alt}
                src={images[1].image}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                className="block h-full w-full rounded-3xl object-cover object-center"
                alt={images[2].alt}
                src={images[2].image}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                className="block h-full w-full rounded-3xl object-cover object-center"
                alt={images[3].alt}
                src={images[3].image}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                className="block h-full w-full rounded-3xl object-cover object-center"
                alt={images[4].alt}
                src={images[4].image}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                className="block h-full w-full rounded-3xl object-cover object-center"
                alt={images[5].alt}
                src={images[5].image}
              />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default GalleryHero
