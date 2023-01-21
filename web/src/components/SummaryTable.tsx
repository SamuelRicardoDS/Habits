import { generateDates } from "../utils/generate-dates"
import { HabitDay } from "./HabitDay"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDates()
console.log(summaryDates)

const minimunSummaryDateSize = 18 * 7
const amountOfDaysToFill = minimunSummaryDateSize - summaryDates.length

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, i) => {
          return (
            <div key={`${day}-${i}`}  className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center font-bold">
              {day}
            </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          return (
            <HabitDay 
              amount={5} 
              completed={Math.round(Math.random() * 5)} 
              key={date.toString()}
            />
          )
        })}

        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => {
          return (
            <div key={i} className="bg-zinc-900 w-10 h-10 text-white rounded flex items-center justify-center opacity-40 cursor-not-allowed"/>
          )
        })}
      </div>
    </div>
  )
}