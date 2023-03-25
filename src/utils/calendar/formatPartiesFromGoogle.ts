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

  const unavailableTimes = events.filter((event) =>
    event.summary.includes('Closed')
  )
  // create map of days

  const days: Availabilities = {}

  for (const day of eachDayOfInterval({ start, end })) {
    const dayWithTZ = utcToZonedTime(day, timeZone)
    days[formatWithTZ(dayWithTZ, dayMonthYearFormat)] = {
      morningAvailable: true,
      afternoonAvailable: true,
    }
  }

  for (const time of unavailableTimes) {
    const startTime = (time.start as GoogleCalendarItemDateTime).dateTime
    const endTime = (time.end as GoogleCalendarItemDateTime).dateTime
    const startWithTZ = utcToZonedTime(startTime, timeZone)
    const endWithTZ = utcToZonedTime(endTime, timeZone)
    const date = formatWithTZ(startWithTZ, dayMonthYearFormat)

    if (getHours(startWithTZ) < 13) {
      days[date]!['morningAvailable'] = false
    }
    if (getHours(startWithTZ) >= 13) {
      days[date]!['afternoonAvailable'] = false
    }
    if (getHours(endWithTZ) >= 13) {
      days[date]!['afternoonAvailable'] = false
    }
  }

  return days
}
