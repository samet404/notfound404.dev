"use client"

import useIsDarkTheme from '@/src/store/isDarkTheme'
import { cn } from '@/src/utils'
import type { PropsWithChildren } from 'react'

export const Prose = ({
    children
}: PropsWithChildren) => {
    const isDarkTheme = useIsDarkTheme((state) => state.value)

    return (
        <div className={cn('px-3  prose-blockquote:text-[#000000ab] selection:bg-[#9f004da3]  prose-h1:pt-10 prose prose-li:marker:text-[#000000] text-[#000000c2]', {
            'prose-headings:text-white prose-strong:text-white prose-blockquote:text-[#ffffffab] prose-a:text-[#ffffff4b] prose-code:text-[#ffffffd9] prose-code:selection:bg-[#ffffff4b]  prose prose-li:marker:text-[#ffffff] text-[#ffffffa2]': isDarkTheme
        })}>
            {children}
        </div>
    )
}