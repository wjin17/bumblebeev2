import { useState } from 'react'
import { getDay } from 'date-fns'

import { AiFillPhone, AiOutlineInstagram } from 'react-icons/ai'
import { MdOutlineMail } from 'react-icons/md'
import { RiFacebookFill } from 'react-icons/ri'
import { IoLogoTiktok } from 'react-icons/io5'
import Hours from '../tapas/Hours'

interface ILocationHero extends React.ComponentPropsWithoutRef<'section'> {}

const DAY_MAP = [
  { day: 'Sunday', schedule: '10am-2pm' },
  { day: 'Monday', schedule: '10am-2pm' },
  { day: 'Tuesday', schedule: 'Closed' },
  { day: 'Wednesday', schedule: '10am-5pm' },
  { day: 'Thursday', schedule: '10am-5pm' },
  { day: 'Friday', schedule: '10am-5pm' },
  { day: 'Saturday', schedule: '10am-5pm' },
]

const DAY_ORDER = [1, 5, 2, 6, 3, 0, 4]

const LocationHero: React.FC<ILocationHero> = () => {
  const [instructionsText, setInstructionsText] = useState(
    'Click email to copy'
  )

  function updateClipboard() {
    navigator.clipboard.writeText('hello@bumblebeeplayspace.com').then(
      function () {
        setInstructionsText('Copied!')
      },
      function (err) {
        console.error('Copy failed :c', err)
        /* clipboard write failed */
      }
    )
  }

  const today = getDay(new Date())

  return (
    <section
      id="location"
      className="mx-auto min-h-screen max-w-7xl items-center justify-between px-8 pt-8"
    >
      <div className="my-8 grid-cols-2 grid-rows-[auto_auto_auto] justify-around lg:grid">
        <div
          className="col-start-2 row-start-1 mb-8 flex max-w-md flex-col lg:mr-auto lg:ml-16"
          id="hours"
        >
          <h1 className="mb-4 text-3xl font-bold text-amber-900">Hours</h1>
          <div className="grid grid-cols-2">
            {DAY_ORDER.map((order) => {
              const { day, schedule } = DAY_MAP[order]!
              return (
                <Hours
                  key={day}
                  day={day}
                  schedule={schedule}
                  isToday={order == today}
                />
              )
            })}
          </div>
        </div>
        <div className="col-start-1 row-start-1 row-end-3 mb-8 flex max-w-sm flex-col lg:ml-auto lg:mr-16">
          <div>
            <h1 className="mb-4 text-3xl font-bold text-amber-900">Location</h1>
            <a
              className="hover:text-stone-700"
              href="https://goo.gl/maps/oinCZQ1FEURK9uEJ6"
              target="_blank"
              rel="noreferrer noopener"
            >
              <h1 className="text-xl">35500 Dumbarton Court</h1>
              <h1 className="text-xl">Newark, CA 94560</h1>
            </a>
            <p className="text-md mb-4 pt-2 text-stone-700">
              We are located behind the Sprouts grocery store and across from
              Challenger School. We have ample parking available!
            </p>
          </div>
          <iframe
            className="rounded-3xl shadow-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.255854072102!2d-122.052467!3d37.5490354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbe5adc78b4c9%3A0x50a19b207f579f8c!2s35500%20Dumbarton%20Ct%2C%20Newark%2C%20CA%2094560!5e0!3m2!1sen!2sus!4v1670486902909!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div
          className="col-start-2 row-start-2 mb-8 flex max-w-md flex-col lg:mr-auto lg:ml-16"
          id="contact"
        >
          <h1 className="mb-4 text-3xl font-bold text-amber-900">Contact</h1>
          <div className="">
            <a
              href="tel:510-894-0442"
              className="my-2 mr-auto flex items-center"
            >
              <div className="rounded-full border-2 border-stone-500 p-2">
                <AiFillPhone size={24} color="rgb(120 113 108)" />
              </div>
              <h1 className="ml-4 text-xl text-stone-700 hover:underline">
                510-894-0442
              </h1>
            </a>
            <div className="my-2 mr-auto flex items-center">
              <div className="rounded-full border-2 border-stone-500 p-2">
                <MdOutlineMail size={24} color="rgb(120 113 108)" />
              </div>
              <div className="ml-4">
                <button
                  className="button-nostyle"
                  onClick={updateClipboard}
                  onMouseOver={() => setInstructionsText('Click email to copy')}
                  onFocus={() => setInstructionsText('Click email to copy')}
                >
                  <h1 className="text-md text-stone-700">
                    hello{'\u0040'}bumblebeeplayspace{'\u002e'}com
                  </h1>
                </button>
                <p className="text-sm text-stone-700">{instructionsText}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-4 mb-24 w-48 lg:ml-16">
          <h1 className="mb-4 text-3xl font-bold text-amber-900">Follow</h1>
          <div className="flex justify-between">
            <a
              className="my-2 flex items-center"
              href="https://www.facebook.com/bumblebee.playspace/"
              target="__blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full border-2 border-stone-500 p-2">
                <RiFacebookFill size={24} color="rgb(120 113 108)" />
              </div>
            </a>
            <a
              className="my-2 flex items-center"
              href="https://www.instagram.com/bumblebeeplayspace/"
              target="__blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full border-2 border-stone-500 p-2">
                <AiOutlineInstagram size={24} color="rgb(120 113 108)" />
              </div>
            </a>
            <a
              className="my-2 flex items-center"
              href="https://www.tiktok.com/@bumblebeeplayspace"
              target="__blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full border-2 border-stone-500 p-2">
                <IoLogoTiktok size={24} color="rgb(120 113 108)" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationHero
