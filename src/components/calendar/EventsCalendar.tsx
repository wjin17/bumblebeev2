import { useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { IoMdClose } from 'react-icons/io'
import {
  addMonths,
  endOfMonth,
  format,
  startOfMonth,
  subMonths,
} from 'date-fns'

import CalendarHeader from './components/Header'
import DaysOfWeek from './components/DaysOfWeek'
import LargeCells from './components/LargeCells'

interface IEventsCalendar {}

async function fetchEvents(start: Date, end: Date) {
  const { data } = await axios.get<Events>('/api/events', {
    params: {
      start,
      end,
    },
  })
  return data
}

const EventsCalendar: React.FC<IEventsCalendar> = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showModal, setShowModal] = useState(false)

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(monthStart)

  const { data: events } = useQuery({
    queryKey: ['birthday-parties', monthStart, monthEnd],
    queryFn: () => fetchEvents(monthStart, monthEnd),
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
    // maybe change this to an event listener to handle modal or whateverz
  }
  const dayMonthYearFormat = 'MMM d, yyyy'
  const timeFormat = 'K:mm bbb'
  const formattedSelectedDay = format(selectedDate, dayMonthYearFormat)

  return (
    <div className="relative w-full rounded-3xl shadow-2xl">
      <CalendarHeader
        currentDate={currentDate}
        size="lg"
        onReverseMonth={handleReverseMonth}
        onForwardMonth={handleForwardMonth}
      />
      <DaysOfWeek />
      {events ? (
        <>
          <LargeCells
            currentDate={currentDate}
            selectedDate={selectedDate}
            onSelectDay={handleSelectDay}
            events={events}
            //onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {events[formattedSelectedDay] && (
            <div
              className={`absolute top-16 left-1/2 flex min-h-[80%] w-5/6 -translate-x-1/2 flex-col rounded-3xl bg-white p-8 shadow-2xl transition-all md:max-w-sm ${
                showModal ? 'opacity-100' : 'invisible opacity-0'
              }`}
            >
              <div className="mb-8 flex items-center justify-between ">
                <h1 className="text-3xl font-semibold text-amber-900">
                  {formattedSelectedDay}
                </h1>
                <button onClick={handleBlur}>
                  <IoMdClose size={36} className="text-stone-300" />
                </button>
              </div>
              <div className="h-full">
                {events[formattedSelectedDay]!.length ? (
                  events[formattedSelectedDay]!.map((event, index) => {
                    return (
                      <div className="mb-8" key={index}>
                        <h1 className="text-xl font-semibold">
                          {event.summary}
                        </h1>
                        <div className="mb-2">
                          {event.start ? (
                            <h1 className="text-lg">
                              {format(new Date(event.start), timeFormat)} -{' '}
                              {format(new Date(event.end), timeFormat)}
                            </h1>
                          ) : (
                            <h1 className="text-lg">All day</h1>
                          )}
                        </div>
                        {event.description && <p>{event.description}</p>}
                      </div>
                    )
                  })
                ) : (
                  <h1 className="text-xl font-semibold">No events</h1>
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="h-96 w-full animate-pulse rounded-b-3xl bg-amber-200"></div>
      )}
    </div>
  )
}

export default EventsCalendar
