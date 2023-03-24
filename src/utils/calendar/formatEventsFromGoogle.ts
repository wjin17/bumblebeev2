import { eachDayOfInterval, getHours, parseISO } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import formatWithTZ from 'date-fns-tz/format'

/**
 *
 * @param start {Date} start of the month
 * @param end  {Date} end of the month
 * @param events {GoogleCalendarItem[]} all events for the month
 * @returns map of days of the month and a list of their events
 *
 * example = {
 * 'Jan 1, 2023': [{
 *      start: "",
 *      end: "",
 *      description: "",
 *      summary: ""
 * }],
 * 'Jan 2, 2023': [{
 *      start: "",
 *      end: "",
 *      description: "",
 *      summary: ""
 * }],
 * }
 */

export function formatEventsFromGoogle(
  start: Date,
  end: Date,
  events: GoogleCalendarItem[]
) {
  const timeZone = 'America/Los_Angeles'
  const dayMonthYearFormat = 'MMM d, yyyy'

  const days: Events = {}

  eachDayOfInterval({ start, end }).map((day) => {
    const dayWithTZ = utcToZonedTime(day, timeZone)
    days[formatWithTZ(dayWithTZ, dayMonthYearFormat)] = []
  })

  for (const event of events) {
    const isFullDay = !Object.keys(event.start).includes('dateTime')
    if (isFullDay) {
      const date = formatWithTZ(
        parseISO((event.start as GoogleCalendarItemDate).date),
        dayMonthYearFormat
      )
      days[date]!.push({
        summary: event.summary,
        description: event.description || '',
        start: '',
        end: '',
      })
    } else {
      const eventStart = (event.start as GoogleCalendarItemDateTime).dateTime
      const eventEnd = (event.end as GoogleCalendarItemDateTime).dateTime
      const startWithTZ = utcToZonedTime(eventStart, timeZone)
      const endWithTZ = utcToZonedTime(eventEnd, timeZone)
      const date = formatWithTZ(startWithTZ, dayMonthYearFormat)
      days[date]!.push({
        summary: event.summary,
        description: event.description || '',
        start: startWithTZ.toString(),
        end: endWithTZ.toString(),
      })
    }
  }

  for (const day in days) {
    days[day]!.sort((a, b) => {
      if (!a.start || !b.start) return 1
      const aStart = new Date(a.start)
      const bStart = new Date(b.start)
      if (aStart > bStart) return 1
      if (aStart < bStart) return -1
      return 0
    })
  }

  return days
}
