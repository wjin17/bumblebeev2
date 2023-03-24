type DaySchedule = {
  morningAvailable: boolean
  afternoonAvailable: boolean
}

type Availabilities = {
  [key: string]: DaySchedule
}

type DayEvent = {
  summary: string
  description: string
  start: string
  end: string
}

type Events = {
  [key: string]: DayEvent[]
}
