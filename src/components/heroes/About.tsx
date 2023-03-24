import Image from 'next/image'

import image from '../../../public/assets/mainroom.jpg'
import RoundLink from '../buttons/RoundLink'

export interface IAboutHero {}

const AboutHero: React.FC<IAboutHero> = () => {
  return (
    <section className="mx-auto mt-32 min-h-screen max-w-7xl snap-start items-center justify-between px-8 md:mt-0 md:flex">
      <div className="relative order-1 mt-16 mb-16 flex-1">
        <Image
          src={image}
          alt="big photo of main room"
          className="h-72 rounded-3xl md:h-auto"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="flex-1">
        <h1 className="mb-4 max-w-sm text-5xl font-bold">
          We&apos;d love for you to visit us!
        </h1>
        <p className="mb-4 max-w-md text-lg font-normal text-stone-600">
          Our 3,000 square foot play space is perfect for infants, toddlers and
          preschoolers. We have play areas specially designed to spark their
          imagination, curiosity and learning.
        </p>
        <div>
          <RoundLink
            href="#our-space"
            className="bg-white px-12 py-4 text-lg font-bold shadow-lg hover:bg-amber-200"
            label="Our space"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutHero
