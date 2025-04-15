"use client"

import useIsDarkTheme from '@/src/store/isDarkTheme'
import type { PropsWithChildren } from 'react'

export const Prose = ({
    children
}: PropsWithChildren) => {
    const isDarkTheme = useIsDarkTheme((state) => state.value)

    return (
        <div className={`px-3 ${isDarkTheme ? 'prose-headings:text-white prose-a:text-[#ffffff4b] prose-code:text-[#ffffff8c] prose-code:selection:bg-[#ffffff4b]  prose prose-li:marker:text-[#ffffff] text-[#ffffffa2]' : 'prose-code:selection:bg-[#9f004c]  prose prose-li:marker:text-[#000000] text-[#000000a2]'} prose`}>
            {children}
        </div>
    )
}