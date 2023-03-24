import Head from 'next/head'

import EventsCalendar from '@/components/calendar/EventsCalendar'

const Events = () => {
  return (
    <>
      <Head>
        <title>Bumblebee Playspace | Calendar</title>
        <meta
          name="description"
          content="Experience endless fun and learning at Bumblebee Playspace! Our play area is designed to spark the imagination, curiosity, and creativity of infants, toddlers, and preschoolers. From birthday parties to educational events, there's always something happening at our playspace. Join us and discover the joy of play today!"
          key="desc"
        />
      </Head>
      <main>
        <section className="mx-auto my-16 flex min-h-screen max-w-7xl flex-col items-center px-8">
          <h1 className="mb-8 text-5xl font-bold md:text-7xl">Calendar</h1>
          <div className="mb-16 w-full">
            <EventsCalendar />
          </div>
        </section>
      </main>
    </>
  )
}

export default Events
