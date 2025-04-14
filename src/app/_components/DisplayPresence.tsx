"use client"

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Presence = dynamic(() => import('./Presence').then(m => m.Presence))

export const DisplayPresence = () => {
    const [shouldDisplay, setShouldDisplay] = useState<Boolean>(false)

    useEffect(() => {
        const localStoragePresence = localStorage.getItem('presence')
        console.log(localStoragePresence)

        if (localStoragePresence !== '0') {
            setShouldDisplay(true)
        }
    }, [])

    if (shouldDisplay) return <Presence />
}