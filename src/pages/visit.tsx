import Head from 'next/head'

import AboutHero from '@/components/heroes/About'
import FeaturesHero from '@/components/heroes/Features'
import OpenPlayHero from '@/components/heroes/OpenPlay'
import GalleryHero from '@/components/heroes/Gallery'
import MembershipHero from '@/components/heroes/Memberships'
//import RoomsHero from '../components/heroes/rooms/RoomsHero'

const Visit = () => {
  return (
    <>
      <Head>
        <title>Bumblebee Playspace | Visit</title>
        <meta
          name="description"
          content="Looking for a fun and educational destination for infants, toddlers, and preschoolers? Look no further than Bumblebee Playspace! Our specially designed play areas are the perfect destination for sparking your child's imagination, curiosity, and creativity. Whether you're looking for a fun family outing or a playdate with friends, Bumblebee Playspace has something for everyone. Come visit us today and discover the joy of play!"
          key="desc"
        />
      </Head>
      <main>
        <AboutHero />
        <FeaturesHero />
        <GalleryHero />
        <OpenPlayHero />
        <MembershipHero />
        {/* <RoomsHero /> */}
      </main>
    </>
  )
}

export default Visit
