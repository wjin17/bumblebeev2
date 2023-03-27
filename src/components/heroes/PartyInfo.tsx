//import PricingCard from "../../cards/pricing/PricingCard";

import { useState } from 'react'
import RoundLink from '../buttons/RoundLink'
import PartayCalendar from '../calendar/PartayCalendar'
import PricingCard from '../cards/Pricing'

interface IPartyInfoHero {}

const Packages = [
  {
    name: 'Mini',
    price: '$400',
    duration: '2hrs',
    times: '9:30am-1pm or 2:00pm-5pm',
    details: [
      'Admissions for 10 children ages 1-10 excluding the guest of honor.',
      '2 hours of exclusive use of our playspace, including set up and clean up time.',
    ],
  },
  {
    name: 'Standard',
    price: '$650',
    duration: '4hrs',
    times: '9am-1pm or 2:00pm-6pm',
    details: [
      'Admissions for 15 children ages 1-10 excluding the guest of honor.',
      '4 hours of exclusive use of our playspace, including set up and clean up time.',
      '2 of our amazing staff members to help with set up, party time and clean up.',
    ],
  },
  {
    name: 'Full day',
    price: '$1,100',
    duration: '7hrs',
    times: '10am-5pm',
    details: [
      'Admissions for 15 children ages 1-10 excluding the guest of honor.',
      '4 hours of exclusive use of our playspace, including set up and clean up time.',
      '2 of our amazing staff members to help with set up, party time and clean up.',
    ],
  },
]

const CommonPackage = [
  'Backdrop stands, tablecloths, plates and utensils are available upon request.',
  'Paper plates and utensils are available upon request.',
  'You will have to provide food and refreshments, decorations and/or party favors, platters and serveware.',
]

type PackageTypes = 'Mini' | 'Standard' | 'Full day'

const PartyInfoHero: React.FC<IPartyInfoHero> = () => {
  const [currentPackage, setCurrentPackage] = useState<PackageTypes>('Standard')
  const activePackage = Packages.find(({ name }) => name === currentPackage)
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-8">
      <div className="mx-auto mt-8 max-w-3xl">
        <div className="mt-4">
          <h1 className="mb-8 text-5xl font-bold lg:text-7xl">
            Party at Bumblebee!
          </h1>
        </div>
        <div className="mx-auto lg:w-1/2">
          <h1 className="mb-8 text-center text-3xl font-bold lg:text-5xl">
            Current schedule
          </h1>
          <PartayCalendar />
        </div>
        <div className="mt-24">
          <h1 className="mb-8 text-3xl font-bold lg:text-5xl">Packages</h1>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-7/12 lg:pr-8">
              <div className="mb-4 flex justify-between sm:justify-start">
                {Packages.map(({ name }, index) => (
                  <button
                    key={name}
                    onClick={() => setCurrentPackage(name as PackageTypes)}
                    className={`rounded-lg border-2 border-amber-900 py-2 px-4 shadow-lg ${
                      name === currentPackage ? 'bg-amber-200' : 'bg-amber-50'
                    } ${index !== 0 ? 'sm:ml-2' : ''}`}
                  >
                    <h1 className="text-lg lg:text-xl">{name}</h1>
                  </button>
                ))}
              </div>
              <h1 className="text-xl lg:text-3xl">Details</h1>
              <h1 className="lg:text-xl">Time slot</h1>
              <h1 className="mb-2 lg:text-xl">{activePackage?.times}</h1>
              <ul className="ml-4 list-outside list-disc">
                {activePackage?.details.map((detail) => (
                  <li key={detail} className="mb-2 text-stone-600">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <PricingCard title={`${currentPackage} party`}>
              <div className="mt-auto font-medium">
                <h1 className="mt-auto text-lg">Starts at</h1>
                <h1 className="text-3xl font-bold">{activePackage?.price}</h1>
                <h1>Total: {activePackage?.duration}</h1>
                <RoundLink
                  href="/#contact"
                  label="Call to book"
                  className="mt-8 bg-amber-300 text-center hover:bg-amber-200"
                />
              </div>
            </PricingCard>
          </div>
          <h1 className="mb-8 mt-8 text-xl font-bold lg:text-3xl">
            Additional info:
          </h1>
          <ul className="ml-4 list-outside list-disc">
            {CommonPackage.map((detail) => (
              <li key={detail} className="mb-2 text-stone-600">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PartyInfoHero
