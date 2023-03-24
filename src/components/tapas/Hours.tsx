interface IHours {
  day: string
  schedule: string
  isToday: boolean
}

const Hours: React.FC<IHours> = ({ day, isToday, schedule }) => {
  return (
    <div className={`mb-2 items-end ${isToday ? 'font-bold' : ''}`}>
      <h1
        className={`sm:text-md mr-2 text-xl ${
          isToday ? 'text-black' : 'text-neutral-500'
        }`}
      >
        {day}:
      </h1>
      <h1 className={isToday ? 'text-black' : 'text-neutral-500'}>
        {schedule}
      </h1>
    </div>
  )
}

export default Hours
