"use client"

import type { PropsWithChildren } from 'react'
import useIsDarkTheme from '@/store/isDarkTheme'
import { cn } from '@/src/utils'

export const BackgroundColor = ({
    children
}: PropsWithChildren) => {
    const value = useIsDarkTheme((state) => state.value)

    return (
        <div
            style={{
                scrollbarWidth: 'none',
            }}
            className={cn('selection:bg-[#ffffff54] bg-[hsla(201,100%,50%,1)] [background-image:radial-gradient(at_20%_20%,hsla(188,92%,56%,1)_0px,transparent_50%),radial-gradient(at_40%_20%,hsla(193,92%,56%,1)_0px,transparent_50%)] flex w-full flex-col gap-7 pt-[5rem] justify-center', {
                'bg-[hsla(201,100%,32%,1)] [background-image:radial-gradient(at_20%_20%,hsla(193,66%,44%,1)_0px,transparent_50%),radial-gradient(at_40%_20%,hsla(200,71%,38%,1)_0px,transparent_50%)]': value

            })}
        >
            {children}
        </div>
    )
}

