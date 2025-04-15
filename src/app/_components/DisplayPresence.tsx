"use client"

import dynamic from 'next/dynamic'

const Presence = dynamic(() => import('./Presence').then(m => m.Presence))

export const DisplayPresence = () => {
    return <Presence />
}