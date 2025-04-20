"use client"

import { Svg } from '@/src/components/Svg'
import { useEffect, useState } from 'react'

type Activity = {
    name: string
    type: number
    state?: string
    details?: string
    assets?: {
        large_image?: string
        large_text?: string
    }
}

type PresenceData = {
    activities: Activity[]
    discord_status: string
    active_on_discord_web: boolean
    active_on_discord_desktop: boolean
    active_on_discord_mobile: boolean
}

export const Presence = () => {
    const [presenceData, setPresenceData] = useState<PresenceData | null>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => setIsMobile(window.innerWidth < 768), [])

    useEffect(() => {
        const localStoragePresence = localStorage.getItem('presence')
        if (localStoragePresence === '0') {
            console.log('useEffect return')
            return
        }

        if (!isOpen) setIsOpen(true)

        const fetchPresence = async () => {
            try {
                const res = await fetch("https://api.lanyard.rest/v1/users/713803539117244496")
                const json = await res.json()
                setPresenceData(json.data)
            } catch (error) {
                console.error('Failed to fetch presence:', error)
            }
        }

        fetchPresence()

        const interval = setInterval(fetchPresence, 1000)
        return () => clearInterval(interval)
    }, [isOpen])

    if (isMobile) return null

    if (!isOpen) return (
        <div onMouseDown={() => {
            localStorage.setItem('presence', '1')
            setIsOpen(true)
        }} className="hover:opacity-0 duration-300 absolute bottom-2 left-2 bg-[#000000aa] backdrop-blur-sm rounded-lg z-30 animate-fade  shadow-lg p-1 max-w-sm space-y-2">
            <Svg src={'up'} alt='' className="w-5 h-5 !fill-white opacity-50" />
        </div>
    )

    if (!presenceData) return null

    const getStatusColor = (status: string) => ({
        online: 'bg-green-500',
        idle: 'bg-yellow-500',
        dnd: 'bg-red-500',
        offline: 'bg-gray-500'
    }[status] || 'bg-gray-500')

    const getPlatformStatus = () =>
        [
            presenceData.active_on_discord_web && 'Web',
            presenceData.active_on_discord_desktop && 'Desktop',
            presenceData.active_on_discord_mobile && 'Mobile'
        ].filter(Boolean).join(', ')

    if (presenceData) return (
        <div className="fixed bottom-2 left-2 bg-[#000000aa] backdrop-blur-sm rounded-lg z-30 animate-fade animate-delay-100 shadow-lg px-[0.5rem] py-1 max-w-sm space-y-2">
            <div className='flex w-full items-center justify-between'>
                <div className="flex items-center gap-2 p-1 animate-pulse">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(presenceData.discord_status)}`} />
                    <span className="text-[0.6rem] text-gray-600 dark:text-gray-300 capitalize">
                        {presenceData.discord_status} ({getPlatformStatus()})
                    </span>
                </div>

                <Svg src={'line'} alt='' className="w-6 h-6 rotate-90  !fill-white opacity-50" onClick={() => {
                    localStorage.setItem('presence', '0')
                    setIsOpen(false)
                }} />
            </div>

            {presenceData.activities.map((activity) => {
                if (activity.type === 4) return null

                return (
                    <div
                        key={activity.name}
                        className="pb-2 pl-1   rounded w-[10rem]"
                    >
                        <div className="space-y-0.5 text-[0.65rem]">
                            <div className=" font-medium break-all text-gray-800 dark:text-gray-200">
                                {activity.details}
                            </div>
                            <div className=" text-gray-600 break-all dark:text-gray-400">
                                {activity.state}
                            </div>
                            <div className=" pt-[0.2rem] text-gray-500 break-all">
                                {activity.name}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}