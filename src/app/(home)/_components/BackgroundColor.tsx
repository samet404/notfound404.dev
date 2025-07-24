'use client'

import type { PropsWithChildren } from 'react'
import useIsDarkTheme from '@/store/isDarkTheme'
import { cn } from '@/src/utils'

export const BackgroundColor = ({ children }: PropsWithChildren) => {
  const value = useIsDarkTheme((state) => state.value)

  return (
    <div
      className="flex w-full flex-col justify-center gap-7 selection:bg-[#ffffff54]"
      style={{
        scrollbarWidth: 'none',
      }}
    >
      <div
        className={cn(
          'pointer-events-none absolute left-0 top-0 z-0 h-full w-full',
          {
            'bg-[#006da3] [background-image:radial-gradient(at_20%_20%,hsla(193,66%,44%,1)_0px,transparent_50%),radial-gradient(at_40%_20%,hsla(200,71%,38%,1)_0px,transparent_50%)]  md:[background-image:radial-gradient(at_20%_20%,hsla(188,87%,35%,1)_0px,transparent_50%),radial-gradient(at_40%_20%,hsla(193,78%,43%,1)_0px,transparent_50%)]':
              value,
            ' bg-[#3dceff] md:bg-[#44b0ef] md:[background-image:radial-gradient(at_20%_20%,hsla(188,92%,56%,1)_0px,transparent_50%),radial-gradient(at_40%_20%,hsla(193,92%,56%,1)_0px,transparent_50%)] ':
              !value,
          },
        )}
      ></div>

      <div className="relative z-9 pt-20">
        <div className="absolute left-0 top-0 z-30 flex h-[10rem] w-full flex-row">
          <div className="h-[90%] bg-gradient-to-b from-red-500 to-transparent w-full"></div>
          <div className="h-full bg-gradient-to-b from-orange-400 to-transparent w-full"></div>
          <div className="h-[80%] bg-gradient-to-b from-yellow-300 to-transparent w-full"></div>
          <div className="h-full bg-gradient-to-b from-green-400 to-transparent w-full"></div>
          <div className="h-full bg-gradient-to-b from-blue-500 to-transparent w-full"></div>
          <div className="h-[90%] bg-gradient-to-b from-indigo-600 to-transparent w-full"></div>
          <div className="h-full bg-gradient-to-b from-purple-500 to-transparent w-full"></div>
        </div>
        {children}
      </div>
    </div>
  )
}
