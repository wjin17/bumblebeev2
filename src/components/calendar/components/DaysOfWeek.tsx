export interface IDaysOfWeek {}

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const DaysOfWeek: React.FC<IDaysOfWeek> = () => {
  return (
    <div className="my-4 flex justify-around text-center">
      {days.map((day) => {
        return (
          <h1 className="m-0 w-full font-medium" key={day}>
            {day}
          </h1>
        )
      })}
    </div>
  )
}

export default DaysOfWeek
