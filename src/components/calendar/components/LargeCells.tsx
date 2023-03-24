import React, { useEffect, useRef, useState } from 'react'
import { AiTwotoneCheckCircle } from 'react-icons/ai'
import {
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  format,
  addDays,
} from 'date-fns'

interface ILargeCells {
  currentDate: Date
  selectedDate: Date
  events: Events
  onSelectDay: (day: Date) => void
  onBlur: () => void
}

interface CellProps {
  day: Date
  isLastCol: boolean
  events: DayEvent[]
  onSelectDay: (day: Date) => void
  onBlur: () => void
}

interface IEventProps {
  events: DayEvent[]
}

const RenderEvents: React.FC<IEventProps> = ({ events }) => {
  return (
    <>
      {events.map((event) => {
        const closed = event.summary.includes('Closed')
        const eventBG = closed ? 'bg-rose-500' : 'bg-teal-400'
        return (
          <div className="my-1 flex items-center" key={event.start}>
            <h1
              className={`w-full truncate rounded-full ${eventBG} px-4 text-left text-sm text-white`}
              key={event.start}
            >
              {event.summary}
            </h1>
          </div>
        )
      })}
    </>
  )
}

const RenderCell: React.FC<CellProps> = ({
  day,
  isLastCol,
  onSelectDay,
  onBlur,
  events,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dayOfMonthFormat = 'd'
  return (
    <div className="flex w-[calc(100%/7)]">
      <button
        className="mx-auto flex h-16 w-[95%] flex-col justify-center p-2 md:h-28 md:justify-start"
        onBlur={onBlur}
        onClick={() => {
          if (buttonRef.current) buttonRef.current.focus()
          onSelectDay(day)
        }}
      >
        {events.length ? (
          <div className="ml-[52%] text-sky-400 md:hidden">
            <AiTwotoneCheckCircle size={12} />
          </div>
        ) : null}
        <p className="w-full text-center md:text-left">
          {format(day, dayOfMonthFormat)}
        </p>
        <div className="hidden w-full md:block">
          {events.length ? <RenderEvents events={events} /> : null}
        </div>
      </button>
      {!isLastCol && <div className="h-full w-[2px] bg-neutral-300" />}
    </div>
  )
}

const LargeCells: React.FC<ILargeCells> = ({
  currentDate,
  onSelectDay,
  events,
  onBlur,
}) => {
  const [monthRows, setMonthRows] = useState<Date[][]>([])
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  useEffect(() => {
    const rows: Date[][] = []
    const days: Date[] = []

    let day = startDate
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        days.push(day)
        day = addDays(day, 1)
      }
      rows.push([...days])
      days.length = 0
    }

    setMonthRows(rows)
  }, [currentDate])

  return (
    <div className="py-2 px-2">
      {monthRows.map((week, numWeek) => {
        return (
          <>
            <div key={numWeek} className="flex justify-center">
              {week.map((day, numDay) => {
                const dayMonthYearFormat = 'MMM d, yyyy'
                const date = format(day, dayMonthYearFormat)
                return (
                  <RenderCell
                    key={date}
                    day={day}
                    isLastCol={numDay === week.length - 1}
                    onSelectDay={onSelectDay}
                    onBlur={onBlur}
                    events={events[date] || []}
                  />
                )
              })}
            </div>
            {numWeek !== monthRows.length - 1 && (
              <div className="mx-auto h-[2px] w-full bg-neutral-300"></div>
            )}
          </>
        )
      })}
    </div>
  )
}

export default LargeCells
