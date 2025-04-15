"use client"

import type { PropsWithChildren } from 'react'
import useIsDarkTheme from '@/store/isDarkTheme'

export const BackgroundColor = ({
    children
}: PropsWithChildren) => {
    const value = useIsDarkTheme((state) => state.value)

    return (
        <div
            style={{
                backgroundColor: value ? 'hsla(201, 100%, 32%, 1)' : 'hsla(201, 100%, 50%, 1)',
                backgroundImage: value
                    ? 'radial-gradient(at 20% 20%, hsla(193, 66%, 44%, 1) 0px, transparent 50%), radial-gradient(at 40% 20%, hsla(200, 71%, 38%, 1) 0px, transparent 50%)'
                    : 'radial-gradient(at 20% 20%, hsla(188, 92%, 56%, 1) 0px, transparent 50%), radial-gradient(at 40% 20%, hsla(193, 92%, 56%, 1) 0px, transparent 50%)',
                scrollbarWidth: 'none',
            }}
            className="selection:bg-[#ffffff54] flex w-full flex-col gap-7 pt-[5rem] justify-center "
        >
            {children}
        </div>
    )
}