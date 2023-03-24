type GoogleCalendarResponse = {
  kind: string
  etag: string
  summary: string
  description: string
  updated: string
  timeZone: 'America/Los_Angeles'
  accessRole: 'reader'
  nextSyncToken: string
  items: CalendarItem[]
}

type GoogleCalendarItem = {
  kind: string
  etag: string
  id: string
  status: string
  htmlLink: string
  created: string
  updated: string
  summary: string
  description?: string
  creator: GoogleCalendarItemCreator
  organizer: GoogleCalendaItemOrganizer
  start: GoogleCalendarItemDateTime | GoogleCalendarItemDate
  end: GoogleCalendarItemDateTime | GoogleCalendarItemDate
  recurringEventId: string
  originalStartTime: GoogleCalendarItemDateTime
  visibility: string
  iCalUID: string
  sequence: number
  eventType: string
}

type GoogleCalendarItemCreator = { email: string }

type GoogleCalendarItemOrganizer = {
  email: string
  displayName: string
  self: boolean
}

type GoogleCalendarItemDateTime = {
  dateTime: string
  timeZone: string
}

type GoogleCalendarItemDate = {
  date: string
}
