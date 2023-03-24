//import PricingCard from "../../cards/pricing/PricingCard";

interface IPartyInfoHero {}
interface IPartyPackageCard {
  title: string
  price: string
}

interface IPartyPackageCard extends React.ComponentPropsWithoutRef<'div'> {}

const CommonPackage = [
  'In addition to guest seating, we will provide 1 table for food, 1 table for refreshments, 1 table for cake/desserts and 1 table for presents. All tables will have table cloths provided in colored plastic.',
  'Paper plates and utensils are available upon request.',
  'You will have to provide food and refreshments, decorations and/or party favors, platters and serveware.',
  'Available party times are 9am-1pm (you can come in starting at 9am to set up and all party materials must be cleaned up by 1pm) and 2pm-6pm (you can come in starting at 2pm to set up and all party materials must be cleaned up by 6pm).',
]

const BasePackage = [
  'Admissions for 15 children ages 1-10 excluding the guest of honor.',
  '4 hours of exclusive use of our playspace, including set up and clean up time.',
  '2 of our amazing staff members to help with set up, party time and clean up.',
  ...CommonPackage,
]

const MiniPackage = [
  'Admissions for 10 children ages 1-10 excluding the guest of honor.',
  '2.5 hours of exclusive use of our playspace, including set up and clean up time.',
  '2 backdrop stands for decoration if needed.',
  ...CommonPackage,
]

const PartyPackageCard: React.FC<IPartyPackageCard> = ({
  title,
  price,
  children,
}) => {
  return (
    <div className=" flex-1 p-4">
      <div className="flex h-full w-full flex-col rounded-3xl bg-white p-8">
        <h1 className="mb-4 text-4xl font-semibold text-amber-900">{title}</h1>
        <h1 className="mb-8 text-xl text-neutral-600">starts at ${price}</h1>
        <div className="font-medium">{children}</div>
      </div>
    </div>
  )
}

const PartyInfoHero: React.FC<IPartyInfoHero> = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-8">
      <div className="mx-auto mt-8 max-w-3xl">
        <div className="mt-4">
          <h1 className="mb-4 text-6xl font-extrabold text-amber-900">
            Party at Bumblebee!
          </h1>
          {/* <p className="max-w-sm text-lg text-neutral-700">
            We would love to host a party for your little one!
          </p> */}
        </div>
        {/*   <h1 className="mb-6 text-6xl text-amber-900">Packages</h1>
        <div className="mb-4 md:flex">
          <PartyPackageCard title="Base Package" price="550">
            {BasePackage.map((details, index) => {
              return (
                <p key={index} className="text-md mb-4">
                  {details}
                </p>
              );
            })}
          </PartyPackageCard>
          <PartyPackageCard title="Mini Package" price="400">
            {MiniPackage.map((details, index) => {
              return (
                <p key={index} className="text-md mb-4">
                  {details}
                </p>
              );
            })}
          </PartyPackageCard>
        </div>
        <h1 className="mx-4 mb-4 text-2xl text-amber-900">Additional info</h1>
        {CommonPackage.map((details, index) => (
          <p key={index} className="text-md mx-4 mb-6">
            {details}
          </p>
        ))} */}

        <div className="mb-8">
          <h1 className="text-4xl text-amber-900">Base</h1>
          <p className="mb-4 text-xl text-amber-900">starts at $650</p>
          <ul className="list-inside list-disc">
            {BasePackage.map((details, index) => {
              return (
                <li key={index} className="mb-2 text-lg">
                  {details}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="mb-8">
          <h1 className="text-4xl text-amber-900">Mini Party</h1>
          <p className="text-xl text-amber-900">starts at $400</p>
          <ul className="list-inside list-disc">
            {MiniPackage.map((details, index) => {
              return (
                <li key={index} className="mb-2 text-lg">
                  {details}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PartyInfoHero
