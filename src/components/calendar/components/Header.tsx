import { format } from 'date-fns'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

interface ICalendarHeader {
  currentDate: Date
  size: string
  onReverseMonth: () => void
  onForwardMonth: () => void
}

const CalendarHeader: React.FC<ICalendarHeader> = ({
  currentDate,
  size,
  onReverseMonth,
  onForwardMonth,
}) => {
  const isSmall = size === 'sm'
  return (
    <div className="flex w-full flex-nowrap items-center justify-between rounded-t-3xl bg-amber-300 py-8 px-4">
      <button onClick={onReverseMonth}>
        <AiOutlineLeft size={32} />
      </button>
      <div
        className={`flex justify-center gap-2 text-center ${
          isSmall ? '' : 'md:flex-col'
        }`}
      >
        <h1
          className={`inline-block text-2xl font-medium ${
            isSmall ? '' : 'md:text-4xl'
          }`}
        >
          {format(currentDate, 'MMMM')}
        </h1>
        <h1
          className={`inline-block text-2xl font-medium ${
            isSmall ? '' : 'md:text-stone-600'
          }`}
        >
          {format(currentDate, 'yyyy')}
        </h1>
      </div>
      <button onClick={onForwardMonth}>
        <AiOutlineRight size={32} />
      </button>
    </div>
  )
}

export default CalendarHeader
