import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { endOfDay, format, startOfDay } from 'date-fns'

import SpeechBubble from '../../../public/assets/speech-bubble.png'
import Logo from '../../../public/bumblebee_logo.png'

async function fetchBirthdayParties(start: Date, end: Date) {
  const { data } = await axios.get<Availabilities>('/api/birthday-parties', {
    params: {
      start,
      end,
    },
  })
  return data
}

const BouncerBee = () => {
  const [open, setOpen] = useState(true)

  const now = new Date()
  const today = format(now, 'MMM d, yyyy')
  const isMorning = parseInt(format(now, 'H')) < 12
  const dayStart = startOfDay(now)
  const dayEnd = endOfDay(now)

  const { data: availabilities, isLoading } = useQuery({
    queryKey: ['birthday-parties', dayStart, dayEnd],
    queryFn: () => fetchBirthdayParties(dayStart, dayEnd),
  })

  const morningAvailable =
    availabilities && availabilities[today].morningAvailable

  const afternoonAvailable =
    availabilities && availabilities[today].afternoonAvailable

  const available = isMorning ? morningAvailable : afternoonAvailable
  const hideNoti = available || (!available && !open)

  /**
   * truth table lmao
   * a | o | hide
   * 0   0    1
   * 0   1    0
   * 1   0    1
   * 1   1    1
   */

  if (isLoading || hideNoti) return null
  return (
    <div className="fixed bottom-8 right-4 z-50 flex">
      <div className="flex flex-col items-center justify-center">
        <button
          className="absolute right-4 top-8"
          onClick={() => setOpen(false)}
        >
          <AiOutlineCloseCircle
            size={48}
            className="rounded-full bg-white shadow-lg"
          />
        </button>
        <div className="relative right-[7.5rem] top-10 flex">
          <Image
            src={SpeechBubble}
            alt="Bee logo"
            className="w-44 -scale-x-100 drop-shadow-2xl"
          />
          <h1 className="absolute top-1/2 left-1/2 w-40 -translate-x-1/2 -translate-y-1/2 text-center">
            We&apos;re closed for a private event right now
          </h1>
        </div>
        <Image src={Logo} alt="Bee logo" className="w-32" />
      </div>
    </div>
  )
}

export default BouncerBee
