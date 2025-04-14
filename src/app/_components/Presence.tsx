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

    useEffect(() => {
        const windowSize = window.innerWidth
        if (windowSize < 768) return

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
        const interval = setInterval(fetchPresence, 5000)
        return () => clearInterval(interval)
    }, [])

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

    return (
        <div className="fixed bottom-2 left-2 bg-[#000000aa] backdrop-blur-sm rounded-lg z-30 animate-fade-up animate-delay-100 shadow-lg p-1 max-w-sm space-y-2">
            <div className="flex items-center gap-2 px-1 py-[0.35rem]">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(presenceData.discord_status)}`} />
                <span className="text-[0.6rem] text-gray-600 dark:text-gray-300 capitalize">
                    {presenceData.discord_status} ({getPlatformStatus()})
                </span>
            </div>

            {presenceData.activities.map((activity) => {
                if (activity.type === 4) return null

                return (
                    <div
                        key={activity.name}
                        className="p-2   rounded w-[10rem]"
                    >
                        {activity.type === 2 || activity.type === 3 && (
                            <div className="space-y-0.5 text-[0.65rem]">
                                <div className=" font-medium text-gray-800 dark:text-gray-200">
                                    {activity.details}
                                </div>
                                <div className=" text-gray-600 dark:text-gray-400">
                                    {activity.state}
                                </div>
                                <div className=" text-gray-500">
                                    {activity.name}
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}