import { useEffect, useState } from 'react'
import {
  endOfMonth,
  endOfWeek,
  isSameDay,
  startOfMonth,
  startOfWeek,
  format,
  addDays,
  isWeekend,
  isAfter,
} from 'date-fns'

interface ISmallCells {
  currentDate: Date
  selectedDate: Date
  onSelectDay: (day: Date) => void
  availabilities: Availabilities
}

const SmallCells: React.FC<ISmallCells> = ({
  currentDate,
  selectedDate,
  onSelectDay,
  availabilities,
}) => {
  const [monthRows, setMonthRows] = useState<Date[][]>([])
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const dayOfMonthFormat = 'd'
  const dayMonthYearFormat = 'MMM d, yyyy'

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
    <div className="py-2">
      {monthRows.map((week, index) => {
        return (
          <div key={index} className="flex justify-between py-1 px-1">
            {week.map((day) => {
              const date = format(day, dayMonthYearFormat)
              const hasOpening = Object.values(availabilities[date] ?? {}).some(
                (slots) => slots.some((slot) => slot.available)
              )
              const validDay = isWeekend(day) && isAfter(day, new Date())
              return (
                <div
                  key={day.toString()}
                  className="flex w-10 items-center justify-center"
                >
                  <button
                    className={`h-10 w-10 rounded-full text-center ${
                      hasOpening && validDay
                        ? 'text-stone-600 hover:bg-amber-300'
                        : 'text-neutral-300'
                    } ${isSameDay(day, selectedDate) ? 'bg-amber-200' : ''}`}
                    onClick={() => {
                      onSelectDay(day)
                    }}
                    disabled={!isWeekend(day) || !hasOpening || !validDay}
                  >
                    <p>{format(day, dayOfMonthFormat)}</p>
                  </button>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default SmallCells
