import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import { formatPartiesFromGoogle } from '@/utils/calendar/formatPartiesFromGoogle'
import { utcToZonedTime } from 'date-fns-tz'

const { PUBLIC_GOOGLE_CAL_ID: publicCalendarId, GOOGLE_CAL_KEY: googleCalKey } =
  process.env

interface IPartyRequest extends NextApiRequest {
  query: {
    start: string
    end: string
  }
}

export default async function handler(
  req: IPartyRequest,
  res: NextApiResponse<Availabilities>
) {
  const { start, end } = req.query

  const timeZone = 'America/Los_Angeles'

  const calendarURL = `https://www.googleapis.com/calendar/v3/calendars/${publicCalendarId}/events`
  const queryParams = {
    timeMin: start,
    timeMax: end,
    singleEvents: true,
    key: googleCalKey,
  }

  const { data } = await axios.get<GoogleCalendarResponse>(calendarURL, {
    params: queryParams,
  })

  const availabilities = formatPartiesFromGoogle(
    utcToZonedTime(start, timeZone),
    utcToZonedTime(end, timeZone),
    data.items
  )

  res.status(200).json(availabilities)
}
