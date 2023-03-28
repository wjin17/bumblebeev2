import { ReactNode } from 'react'
import {
  MdBrush,
  MdOutlineChair,
  MdOutlineChildCare,
  MdOutlineFoodBank,
  MdOutlineLocalGroceryStore,
  MdOutlineMusicNote,
  MdOutlineTheaterComedy,
  MdOutlineToys,
  MdOutlineWavingHand,
  MdWater,
} from 'react-icons/md'

import RoundLink from '../buttons/RoundLink'

export interface IFeatureHero {}

const items = [
  {
    name: 'Play Kitchen, and Market',
    icon: <MdOutlineLocalGroceryStore size={30} />,
  },
  {
    name: 'Puzzles, Blocks, and Train Table',
    icon: <MdOutlineToys size={30} />,
  },
  {
    name: 'Costumes and Dramatic Play',
    icon: <MdOutlineTheaterComedy size={30} />,
  },
  { name: 'Water Room', icon: <MdWater size={30} /> },
  { name: 'Sensory Rice Table', icon: <MdOutlineWavingHand size={30} /> },
  { name: 'Music Room', icon: <MdOutlineMusicNote size={30} /> },
  { name: 'Arts and Crafts Room', icon: <MdBrush size={30} /> },
  { name: 'Infant and Crawler Room', icon: <MdOutlineChildCare size={30} /> },
  { name: 'Mothers Room', icon: <MdOutlineChair size={30} /> },
]

interface IFeatureItem {
  name: string
  icon: ReactNode
}

const FeatureItem: React.FC<IFeatureItem> = ({ name, icon }) => {
  return (
    <div className="block rounded-xl bg-amber-50 p-4 shadow-md">
      <span className="inline-block rounded-lg bg-stone-100 p-3 text-stone-700">
        {icon}
      </span>
      <h1 className="mt-2 font-bold text-stone-500">{name}</h1>
    </div>
  )
}

const FeaturesHero: React.FC<IFeatureHero> = () => {
  return (
    <section
      id="our-space"
      className="mx-auto mt-24 max-w-7xl items-center justify-between px-8 md:mt-12 md:flex"
    >
      <div className="max-w-screen-xl py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h1 className="mb-4 text-5xl font-bold text-amber-900 lg:max-w-sm">
              Our Space
            </h1>
            <p className="mb-4 text-lg font-normal text-stone-600 lg:max-w-md">
              Our play space is perfect for infants, toddlers and preschoolers.
              We have play areas specially designed to spark their imagination,
              curiosity and learning.
            </p>
            <RoundLink
              href="#open-play"
              className="mt-4 bg-amber-50 px-12 py-4 text-lg font-bold shadow-lg hover:bg-amber-200"
              label="Open play"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {items.map(({ name, icon }) => (
              <FeatureItem key={name} name={name} icon={icon} />
            ))}
            <div className="sm:hidden">
              <FeatureItem
                name={'Snack room'}
                icon={<MdOutlineFoodBank size={30} />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesHero
