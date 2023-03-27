import Head from 'next/head'
import PartyInfoHero from '@/components/heroes/PartyInfo'
import PartyIntroHero from '@/components/heroes/PartyIntro'

const Parties = () => {
  return (
    <>
      <Head>
        <title>Bumblebee Playspace | Parties</title>
        <meta
          name="description"
          content="Make your child's birthday unforgettable with Bumblebee Playspace! Our specially designed play areas are the perfect venue for a fun-filled birthday celebration for infants, toddlers, and preschoolers. With activities and games designed to spark their imagination and curiosity, your child and their friends will have an unforgettable experience. Book your party with us today and let us help you create magical memories that will last a lifetime!"
          key="desc"
        />
      </Head>
      <main className="min-h-screen w-full bg-amber-100">
        <PartyIntroHero />
        <PartyInfoHero />
      </main>
    </>
  )
}

export default Parties
