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

      <div className="relative z-10  pt-20">
        <div
         style={{
          backgroundImage:  'radial-gradient(at 100% 0%, #d52effff 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(310, 100%, 55%, 0.825) 0px, transparent 50%), radial-gradient(at 30% 0%, hsla(299, 100%, 55%, 0.825) 0px, transparent 50%)',
        }}
        className="absolute left-0 top-0 z-[-1] flex h-[40rem] w-full ">
        
        </div>
        {children}
      </div>
    </div>
  )
}
