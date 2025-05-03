"use client"

import useIsDarkTheme from '@/src/store/isDarkTheme'
import { cn } from '@/src/utils'
import type { PropsWithChildren } from 'react'

export const Prose = ({
    children
}: PropsWithChildren) => {
    const isDarkTheme = useIsDarkTheme((state) => state.value)

    return (
        <div className={cn('px-3 selection:bg-[#9f004da3]   prose prose-li:marker:text-[#000000] text-[#000000c2]', {
            'prose-headings:text-white prose-a:text-[#ffffff4b] prose-code:text-[#ffffff8c] prose-code:selection:bg-[#ffffff4b]  prose prose-li:marker:text-[#ffffff] text-[#ffffffa2]': isDarkTheme
        })}>
            {children}
        </div>
    )
}