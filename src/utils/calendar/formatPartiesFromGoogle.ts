import { eachDayOfInterval, getHours } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import formatWithTZ from 'date-fns-tz/format'

/**
 *
 * @param start {Date} start of the month
 * @param end  {Date} end of the month
 * @param events {GoogleCalendarItem[]} currently booked parties
 * @returns map of days of the month and their availabilities
 *
 * example = {
 * 'Jan 1, 2023': {morningAvailable: false, afternoonAvailable: false},
 * 'Jan 2, 2023': {morningAvailable: false, afternoonAvailable: false},
 * }
 */

export function formatPartiesFromGoogle(
  start: Date,
  end: Date,
  events: GoogleCalendarItem[]
) {
  const timeZone = 'America/Los_Angeles'
  const dayMonthYearFormat = 'MMM d, yyyy'
  const militaryFormat = 'kk:mm'

  const unavailableTimes = events.filter((event) =>
    event.summary.includes('Closed')
  )
  // create map of days

  const days: Availabilities = {}

  for (const day of eachDayOfInterval({ start, end })) {
    const dayWithTZ = utcToZonedTime(day, timeZone)
    days[formatWithTZ(dayWithTZ, dayMonthYearFormat)] = {
      Mini: [
        { start: '10:00', end: '12:00', available: true },
        { start: '13:00', end: '15:00', available: true },
        { start: '17:00', end: '19:00', available: true },
      ],
      Standard: [
        { start: '09:30', end: '12:30', available: true },
        { start: '13:15', end: '16:15', available: true },
        { start: '17:00', end: '20:00', available: true },
      ],
      'Full day': [{ start: '10:00', end: '17:00', available: true }],
    }
  }

  for (const time of unavailableTimes) {
    const startTime = (time.start as GoogleCalendarItemDateTime).dateTime
    const endTime = (time.end as GoogleCalendarItemDateTime).dateTime
    const startWithTZ = utcToZonedTime(startTime, timeZone)
    const endWithTZ = utcToZonedTime(endTime, timeZone)

    const militaryStart = formatWithTZ(startWithTZ, militaryFormat)
    const militaryEnd = formatWithTZ(endWithTZ, militaryFormat)
    const date = formatWithTZ(startWithTZ, dayMonthYearFormat)

    const schedule = days[date]!

    for (const key in schedule) {
      const day = schedule[key as Package]!
      day.forEach((slot) => {
        const overlap = militaryEnd > slot.start && slot.end > militaryStart
        if (overlap) {
          slot.available = false
        }
      })
    }
  }

  return days
}
