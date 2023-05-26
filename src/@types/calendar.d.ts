type Package = 'Mini' | 'Standard' | 'Full day'

type Slot = {
  start: string
  end: string
  available: boolean
}

type DaySchedule = {
  Mini: Slot[]
  Standard: Slot[]
  'Full day': Slot[]
}

type Availabilities = Record<string, DaySchedule>

type DayEvent = {
  summary: string
  description: string
  start: string
  end: string
}

type Events = {
  [key: string]: DayEvent[]
}
