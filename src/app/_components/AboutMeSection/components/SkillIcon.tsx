"use client"

import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

export const SkillIcon = ({ icon, title, description }: Props) => {
    const [showOnLeft, setShowOnLeft] = useState(false)
    const iconRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const checkPosition = () => {
            if (iconRef.current) {
                const rect = iconRef.current.getBoundingClientRect()
                const windowWidth = window.innerWidth
                setShowOnLeft(rect.left > windowWidth / 2)
            }
        }

        checkPosition()
        window.addEventListener('resize', checkPosition)
        return () => window.removeEventListener('resize', checkPosition)
    }, [])

    return (
        <div ref={iconRef} className="relative group flex bg-[#ffffffa3] w-[3rem] h-[3rem] flex-col items-center justify-center rounded-lg">
            {icon}
            <div className={`hidden z-40 group-hover:block absolute bottom-0 ${showOnLeft ? 'right-[calc(100%+1rem)]' : 'left-[calc(100%+1rem)]'} w-max h-full bg-[#ffffff71] rounded-lg`}>
                <div className="flex flex-col gap-2 p-3 text-white w-[20rem] shadow-[0_0px_10px_1px_rgba(0,0,0,0.5)] bg-[#000000] rounded-md">
                    <div className="text-sm tex-white font-bold">{title}</div>
                    <div className="text-[0.8rem]">{description}</div>
                </div>
            </div>
        </div>
    )
}

type Props = {
    icon: ReactNode,
    title: string
    description: string
}