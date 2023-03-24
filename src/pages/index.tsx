import Head from 'next/head'

import CollageHero from '@/components/heroes/Collage'
import PricingHero from '@/components/heroes/Pricing'
import LocationHero from '@/components/heroes/Location'
import PartyHero from '@/components/heroes/Parties'

const Home = () => {
  return (
    <>
      <Head>
        <title>Bumblebee Playspace</title>
        <meta
          name="description"
          content="Welcome to Bumblebee Playspace! Our 3,000 square foot play area is the ideal destination for infants, toddlers, and preschoolers. Our specially designed play areas are perfect for sparking children's imagination, curiosity, and learning. Come visit us today and discover the joy of play!"
          key="desc"
        />
      </Head>
      <main>
        <CollageHero />
        <PartyHero />
        <PricingHero />
        <LocationHero />
      </main>
    </>
  )
}

export default Home
