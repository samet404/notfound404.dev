"use client"

import useIsDarkTheme from '@/src/store/isDarkTheme'
import type { ReactNode } from 'react'

export const Background = ({ children }: { children: ReactNode }) => {
    const isDarkTheme = useIsDarkTheme((state) => state.value)

    return (
        <div className={`${isDarkTheme ? 'bg-gray-700 text-[#ffffffbd]' : 'bg-white text-black'} shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)] flex flex-col gap-10 p-5 md:w-[40rem] xxs:w-[90%] rounded-lg`}>
            {children}
        </div>
    )
}