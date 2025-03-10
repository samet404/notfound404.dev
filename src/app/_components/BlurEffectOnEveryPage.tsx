"use client"

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const BlurEffectOnEveryPage = () => {
    const pathname = usePathname()
    const [isBlurred, setIsBlurred] = useState(false)

    useEffect(() => {
        console.log('dspaojdop')
        // Set blur to true on route change
        setIsBlurred(true)

        // Remove blur after 5 seconds
        const timeout = setTimeout(() => {
            setIsBlurred(false)
        }, 400)

        return () => clearTimeout(timeout)
    }, [pathname])

    return (
        <div
            className={`
                absolute z-[50] top-0 left-0 w-full h-full pointer-events-none
                transition-all duration-[5000ms] ease-out
                ${isBlurred ? 'backdrop-blur-md bg-[#0000002d]' : 'backdrop-blur-none'}
            `}
        />
    )
}