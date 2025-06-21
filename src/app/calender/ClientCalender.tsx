'use client'

import React from 'react'
import { atom, useAtom } from 'jotai'
import { cn } from '@/src/utils'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { currentDayAtom } from './atoms'

interface CalendarDay {
  currentMonth: boolean
  date: Date
  month: number
  number: number
  selected: boolean
  year: number
}

interface CalendarDaysProps {
  day: Date
  changeCurrentDay: (day: CalendarDay) => void
}

const CalendarDays: React.FC<CalendarDaysProps> = ({
  day,
  changeCurrentDay,
}) => {
  const firstDayOfMonth = new Date(day.getFullYear(), day.getMonth(), 1)
  const weekdayOfFirstDay = firstDayOfMonth.getDay()
  const currentDays: CalendarDay[] = []

  for (let i = 0; i < 42; i++) {
    if (i === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7)
    } else if (i === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (i - weekdayOfFirstDay),
      )
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1)
    }

    const calendarDay: CalendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    }

    currentDays.push(calendarDay)
  }

console.log('day',day.getFullYear(), day.getMonth(), day.getDate())
  return (
    <div className="grid grid-cols-7 gap-0 ">
      {currentDays.map((day, index) => (
        <div
          key={index}
          onClick={() => changeCurrentDay(day)}
          className={cn(
            'relative h-[4.6875rem] border border-gray-400  transition-all duration-500 hover:bg-gray-200',
            day.currentMonth ? 'bg-white' : 'bg-gray-50',
            day.selected &&
              'bg-yellow-300 font-bold opacity-80 hover:bg-yellow-400',
          )}
        >
          <p
            className={cn(
              'absolute right-2.5',
              day.currentMonth ? 'text-black' : 'text-gray-400',
              day.selected && ' font-bold',
            )}
          >
            {day.number}
          </p>
        </div>
      ))}
    </div>
  )
}

const weekdaysAtom = atom(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
const monthsAtom = atom([
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
])

const CalendarClient: React.FC = () => {
  const [weekdays] = useAtom(weekdaysAtom)
  const [months] = useAtom(monthsAtom)
  const [currentDay, setCurrentDay] = useAtom(currentDayAtom)

  const changeCurrentDay = (day: CalendarDay) => {
    setCurrentDay(new Date(day.year, day.month, day.number))
  }

  const nextDay = () => {
    setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() + 1)))
  }

  const previousDay = () => {
    setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() - 1)))
  }
  return (
    <div className="mx-auto  flex  px-4 w-full flex-col">
      <div className="flex h-[3.125rem] w-full items-center justify-between">
        <div className="flex h-full items-center ">
          <h2 className="mx-auto text-white">
            {months[currentDay.getMonth()]} {currentDay.getFullYear()}
          </h2>
        </div>
        <div className="flex h-full flex-row gap-3 items-center text-white">
          <ControlButton onClick={previousDay}>
            <ArrowLeft />
          </ControlButton>
          <p className="mx-auto">
            {months[currentDay.getMonth()]?.substring(0, 3)}{' '}
            {currentDay.getDate()}
          </p>
          <ControlButton onClick={nextDay}>
            <ArrowRight />
          </ControlButton>
        </div>
      </div>

      <div className="flex  w-full flex-col rounded-lg bg-white p-1 ">
        <div className="flex  w-full items-center rounded-t-lg bg-white ">
          {weekdays.map((weekday, index) => (
            <div
              key={index}
              className="w-[6.25rem] grow border border-gray-400 text-center    first:rounded-tl-lg last:rounded-tr-lg"
            >
              <p>{weekday}</p>
            </div>
          ))}
        </div>
        <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
      </div>
    </div>
  )
}

export default CalendarClient

const ControlButton = ({
  onClick,
  children,
}: {
  onClick: () => void
  children: React.ReactNode
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center rounded-lg p-1 hover:bg-[#0000004e]',
      )}
    >
      {children}
    </button>
  )
}
