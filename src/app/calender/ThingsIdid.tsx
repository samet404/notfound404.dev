'use client'

import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { currentDayAtom } from './atoms'
import { useEffect } from 'react'
import { Spinner } from '@/src/components/Spinner'

export const ThingsIdid = () => {
  const currrentDay = useAtomValue(currentDayAtom)
  const queryFn = async () => {
    const response = await fetch('/api/get-calender-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: `${currrentDay.getFullYear()}-${currrentDay.getMonth()}-${currrentDay.getDate()}`,
      }),
    })
    return response.json()
  }
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['repoData'],
    queryFn ,
  })

  useEffect(() => {
    refetch()
  }, [currrentDay,refetch])

  if (isPending) return <div className='pl-4'>
    <Spinner />
  </div>

  if (error) return <div className='pl-4'>
    <div className='text-red-500'>Error: {error.message}</div>
  </div>

  return (
    <div className="prose px-4 text-white prose-li:marker:text-white flex flex-col  items-start">
      <div className="text-[2rem]">The things I did that day</div>
      {data ? <ol>
        {data?.map((item: string) => (
          <li key={item} className="text-[1rem] text-white">
            {item}
          </li>
        ))}
      </ol> : <div className='text-black bg-white rounded-md px-2 mt-2'>No data found for that day.</div>}
    </div>
  )
}
