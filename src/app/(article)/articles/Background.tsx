"use client"

import useIsDarkTheme from '@/src/store/isDarkTheme'
import { cn } from '@/src/utils'
import type { ReactNode } from 'react'

export const Background = ({ children }: { children: ReactNode }) => {
    const isDarkTheme = useIsDarkTheme((state) => state.value)

    return (
        <div className={cn(' shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)] flex flex-col gap-2 p-2 md:w-[40rem] xxs:w-[90%] rounded-lg', {
            'bg-gray-700 text-[#ffffffbd]': isDarkTheme,
            'bg-white text-black': !isDarkTheme
        })}>
            {children}
        </div>
    )
}