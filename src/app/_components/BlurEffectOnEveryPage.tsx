"use client"

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

let firstAppear = true

export const BlurEffectOnEveryPage = () => {
    const pathname = usePathname()
    const [isBlurred, setIsBlurred] = useState(false)

    useEffect(() => {
        if (firstAppear) {
            firstAppear = false
            return
        }
        setIsBlurred(true)

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
                ${isBlurred ? 'animate-wave backdrop-blur-md bg-[#0000003f]' : 'backdrop-blur-none'}
            `}
            style={{
                animation: isBlurred ? 'wave 400ms ease-in-out' : 'none'
            }}
        />
    )
}