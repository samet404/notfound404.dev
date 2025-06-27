'use client'

import useIsDarkTheme from '@/src/store/isDarkTheme'
import type { ReactNode } from 'react'

export const Scroll = ({ children }: { children: ReactNode }) => {
  const isDarkTheme = useIsDarkTheme((state) => state.value)

  return (
    <div
      id="scroll-container"
      style={{
        scrollbarWidth: 'none',
      }}
      className={`w-full ${isDarkTheme ? 'bg-[#202020]' : 'bg-[#f2f0d4]'} h-full overflow-x-hidden overflow-y-scroll pb-11 pt-[7rem] selection:bg-[#0000004b]`}
    >
      {children}
    </div>
  )
}
