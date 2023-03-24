import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import artRoomImage from '../../../public/assets/art-room.jpg'
import costumes from '../../../public/assets/costumes.jpg'
import blocks from '../../../public/assets/blocks.jpg'
import dollhouse from '../../../public/assets/dollhouse.jpg'
import waterRoom from '../../../public/assets/water-room.jpg'
import lightTable from '../../../public/assets/light-table.jpg'
import groceries from '../../../public/assets/groceries.jpg'

type CollageImage = {
  image: StaticImageData
  alt: string
}

const images: FixedLengthArray<7, CollageImage> = [
  { image: artRoomImage, alt: 'Art room' },
  { image: costumes, alt: 'Costumes' },
  { image: blocks, alt: 'Blocks' },
  { image: dollhouse, alt: 'Dollhouse' },
  { image: waterRoom, alt: 'Water room' },
  { image: lightTable, alt: 'Light table' },
  { image: groceries, alt: 'Groceries' },
]

interface ICollageHero extends React.ComponentPropsWithoutRef<'section'> {}

// animate images on appear
// add a layout thing that scales down div + drops a bit when menu comes out

const CollageHero: React.FC<ICollageHero> = () => {
  const hoverEffect = 'transition-all ease-out lg:hover:scale-105 duration-300'
  return (
    <section id="landing" className="flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full  max-w-7xl flex-col items-center justify-center space-y-3">
          <div className="mb-16 mt-40 flex flex-col items-center justify-center space-y-3 px-8 text-center md:items-start">
            <h1 className="mb-8 text-5xl font-bold md:text-7xl">
              Bumblebee Playspace
            </h1>
            <p className="mx-auto max-w-md text-xl text-stone-700">
              Bumblebee Playspace is a large, 3,000+ square foot indoor play
              area intentionally designed for infants, toddlers, and
              preschool-aged children.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center space-x-2 space-y-3 md:space-x-6 lg:flex-row">
            <Image
              src={images[0].image}
              alt={images[0].alt}
              className={`hidden h-40 w-64 overflow-hidden rounded-xl object-cover lg:inline lg:w-40 ${hoverEffect}`}
            />
            <div className="hidden flex-row items-center justify-center space-x-3 space-y-6 lg:flex lg:flex-col">
              <Image
                src={images[1].image}
                alt={images[1].alt}
                className={`h-32 w-32 overflow-hidden rounded-xl  object-cover lg:w-40 ${hoverEffect}`}
              />
              <Image
                src={images[2].image}
                alt={images[2].alt}
                className={`h-48 w-32 overflow-hidden rounded-xl  object-cover lg:w-40 ${hoverEffect}`}
              />
            </div>
            <Image
              src={images[3].image}
              alt={images[3].alt}
              className={`h-96 w-64 overflow-hidden  rounded-xl object-cover lg:w-60 ${hoverEffect}`}
              style={{ objectPosition: '10% 50%' }}
            />
            <div className="hidden flex-row items-center justify-center space-x-3 space-y-6 lg:flex lg:flex-col">
              <Image
                src={images[4].image}
                alt={images[4].alt}
                className={`h-48 w-32 overflow-hidden rounded-xl  object-cover lg:w-40 ${hoverEffect}`}
              />
              <Image
                src={images[5].image}
                alt={images[5].alt}
                className={`h-32 w-32 overflow-hidden rounded-xl  object-cover lg:w-40 ${hoverEffect}`}
              />
            </div>
            <Image
              src={images[6].image}
              alt={images[6].alt}
              className={`rounded-xlm hidden h-32  w-32 overflow-hidden lg:inline lg:w-40 ${hoverEffect}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollageHero
