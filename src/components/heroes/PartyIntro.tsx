import Image from 'next/image'
import bdayParty from '../../../public/assets/raised-balloon-thing.jpg'

interface IPartyIntroHero {}

const PartyIntroHero: React.FC<IPartyIntroHero> = () => {
  return (
    <section className="relative mx-auto mt-40 w-full max-w-7xl flex-col justify-between md:mt-32">
      <div className="mx-8">
        <Image
          src={bdayParty}
          alt="partay sample"
          className="h-64 rounded-3xl md:h-[60vh]"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </section>
  )
}

export default PartyIntroHero
