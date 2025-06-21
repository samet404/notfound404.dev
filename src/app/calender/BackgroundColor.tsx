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
            className={cn('selection:bg-[#ffffff54] flex w-full min-h-screen flex-col pb-20 gap-7 pt-[5rem]  justify-center', {
                'bg-[#006da3] [background-image:radial-gradient(at_20%_20%,hsla(193,66%,44%,1)_0px,transparent_50%),radial-gradient(at_40%_20%,hsla(200,71%,38%,1)_0px,transparent_50%)]  md:[background-image:radial-gradient(at_20%_20%,hsla(188,87%,35%,1)_0px,transparent_50%),radial-gradient(at_40%_20%,hsla(193,78%,43%,1)_0px,transparent_50%)]': value,
                ' bg-[#48b5f4] md:bg-[#44b0ef] md:[background-image:radial-gradient(at_20%_20%,hsla(188,92%,56%,1)_0px,transparent_50%),radial-gradient(at_40%_20%,hsla(193,92%,56%,1)_0px,transparent_50%)] ': !value

            })}
        >
            {children}
        </div>
    )
}

