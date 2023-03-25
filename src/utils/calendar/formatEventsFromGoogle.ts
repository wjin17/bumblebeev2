import { eachDayOfInterval, parseISO, format } from 'date-fns'

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
  const dayMonthYearFormat = 'MMM d, yyyy'

  const days: Events = {}

  eachDayOfInterval({ start, end }).map((day) => {
    days[format(day, dayMonthYearFormat)] = []
  })

  for (const event of events) {
    const isFullDay = !Object.keys(event.start).includes('dateTime')
    if (isFullDay) {
      const date = format(
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
      const startDate = new Date(eventStart)
      const endDate = new Date(eventEnd)
      const date = format(startDate, dayMonthYearFormat)
      days[date]!.push({
        summary: event.summary,
        description: event.description || '',
        start: startDate.toString(),
        end: endDate.toString(),
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
