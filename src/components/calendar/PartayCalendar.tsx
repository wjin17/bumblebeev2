import { useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { IoMdClose } from 'react-icons/io'
import { endOfWeek, format, startOfWeek } from 'date-fns'
import { addMonths, endOfMonth, startOfMonth, subMonths } from 'date-fns'

import CalendarHeader from './components/Header'
import DaysOfWeek from './components/DaysOfWeek'
import SmallCells from './components/SmallCells'

export interface IPartayCalendar {}

function makeNormalPeopleTime(time: string) {
  const timeArr = time.split(':') // convert to array
  const hours = +timeArr[0]
  return `${hours % 12 || 12}:${timeArr[1]}${hours < 12 ? 'am' : 'pm'}`
}

async function fetchBirthdayParties(start: Date, end: Date) {
  const { data } = await axios.get<Availabilities>('/api/birthday-parties', {
    params: {
      start,
      end,
    },
  })
  return data
}

const PartayCalendar: React.FC<IPartayCalendar> = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showModal, setShowModal] = useState(false)
  const [selectedPackage, setPackage] = useState<Package>('Mini')

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(monthStart)
  const weekStart = startOfWeek(monthStart)
  const weekEnd = endOfWeek(monthEnd)

  const { data: availabilities } = useQuery({
    queryKey: ['birthday-parties', weekStart, weekEnd],
    queryFn: () => fetchBirthdayParties(weekStart, weekEnd),
  })

  function handleReverseMonth() {
    setCurrentDate((prevDate) => subMonths(prevDate, 1))
  }
  function handleForwardMonth() {
    setCurrentDate((prevDate) => addMonths(prevDate, 1))
  }
  function handleSelectDay(day: Date) {
    setSelectedDate(day)
    setShowModal(true)
  }
  function handleBlur() {
    setShowModal(false)
  }

  const dayMonthYearFormat = 'MMM d, yyyy'
  const formattedSelectedDay = format(selectedDate, dayMonthYearFormat)

  const RenderAvailability = ({ schedule }: { schedule: DaySchedule }) => {
    return (
      <div>
        <div className="my-4 flex flex-wrap items-center gap-1">
          {Object.keys(schedule).map((packageType) => (
            <button
              key={packageType}
              className={`rounded-full border-2 border-amber-200 px-3 py-2 text-sm ${
                selectedPackage === packageType ? 'bg-amber-200' : ''
              }`}
              onClick={() => setPackage(packageType as Package)}
            >
              <h1>{packageType}</h1>
            </button>
          ))}
        </div>
        <div>
          {schedule[selectedPackage].map((slot) => {
            return (
              <div key={slot.start}>
                <h1 className="font-semibold">
                  {makeNormalPeopleTime(slot.start)}-
                  {makeNormalPeopleTime(slot.end)}
                </h1>
                <div className="flex">
                  {slot.available ? (
                    <h1 className="mt-2 mb-4 mr-auto rounded-3xl bg-emerald-400 px-4 py-1 font-medium">
                      Available
                    </h1>
                  ) : (
                    <h1 className="mt-2 mb-4 mr-auto rounded-3xl bg-rose-400 px-4 py-1 font-medium">
                      Unavailable
                    </h1>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="relative mx-auto w-full rounded-3xl shadow-2xl">
      <CalendarHeader
        currentDate={currentDate}
        size="sm"
        onReverseMonth={handleReverseMonth}
        onForwardMonth={handleForwardMonth}
      />
      <DaysOfWeek />
      {availabilities ? (
        <div className="min-w-[18rem]">
          <SmallCells
            currentDate={currentDate}
            selectedDate={selectedDate}
            onSelectDay={handleSelectDay}
            availabilities={availabilities}
          />
          {availabilities[formattedSelectedDay] && (
            <div
              className={`absolute top-8 left-1/2 flex w-full max-w-[95%] -translate-x-1/2 flex-col rounded-3xl bg-amber-50 p-6 shadow-2xl transition-all ${
                showModal ? 'opacity-100' : 'invisible opacity-0'
              }`}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">
                  {formattedSelectedDay}
                </h1>
                <button onClick={handleBlur}>
                  <IoMdClose size={30} className="text-stone-400" />
                </button>
              </div>
              <div className="flex h-full flex-col">
                <RenderAvailability
                  schedule={availabilities[formattedSelectedDay]}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="h-72 min-w-[18rem] animate-pulse rounded-b-3xl bg-amber-200"></div>
      )}
    </div>
  )
}

export default PartayCalendar
