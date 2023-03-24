import Image from 'next/image'
import bdayParty from '../../../public/assets/bday-partay.jpg'

interface IPartyIntroHero {}

const PartyIntroHero: React.FC<IPartyIntroHero> = () => {
  return (
    <section className="relative mx-auto w-full flex-col justify-between">
      <Image
        src={bdayParty}
        alt="partay sample"
        className="h-64 md:h-[60vh]"
        style={{ objectFit: 'cover' }}
        priority
      />
      {/* <div className="absolute top-1/3 hidden h-96 w-[620px] rounded-r-3xl bg-amber-100 bg-opacity-70 p-4 md:block">
        <h1 className="mb-4 text-8xl font-extrabold text-amber-900">
          Party at Bumblebee!
        </h1>
        <p className="mb-8 max-w-sm text-lg text-neutral-700">
          We would love to host a party for your little one!
        </p>
      </div> */}
    </section>
  )
}

export default PartyIntroHero
