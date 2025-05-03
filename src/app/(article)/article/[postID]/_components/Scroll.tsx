"use client"

import useIsDarkTheme from '@/src/store/isDarkTheme'
import type { ReactNode } from 'react'

export const Scroll = ({ children }: { children: ReactNode }) => {
    const isDarkTheme = useIsDarkTheme((state) => state.value)

    return (
        <div
            id='scroll-container'
            style={{
                scrollbarWidth: 'none',
            }}
            className={`w-full ${isDarkTheme ? 'bg-[#202020]' : 'bg-[#fffee8]'} pt-[7rem] pb-11 h-full selection:bg-[#0000004b] overflow-y-scroll overflow-x-hidden`}>
            {children}
        </div>
    )
}