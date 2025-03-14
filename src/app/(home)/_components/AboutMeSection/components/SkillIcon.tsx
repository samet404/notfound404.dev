"use client"
import { useSetAtom } from 'jotai'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { dialogInfoAtom } from './atoms'
import { Svg } from '@/src/components/Svg'

export const SkillIcon = ({ icon, title, description, skillLevel, learning }: Props) => {
    const iconRef = useRef<HTMLDivElement>(null)
    const setDialogInfo = useSetAtom(dialogInfoAtom)


    const handleMouseEnter = (e: React.MouseEvent) => {
        setDialogInfo({
            title,
            description,
            skillLevel,
            x: e.clientX,
            y: e.clientY,
            learning,
            lastHoverTime: Date.now(),
            isHovering: true,
            imageFound: !!icon
        })
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        setDialogInfo(prev => prev ? {
            ...prev,
            x: e.clientX,
            y: e.clientY,
            lastHoverTime: Date.now()
        } : null)
    }

    const handleMouseLeave = () => {
        setDialogInfo(prev => prev ? {
            ...prev,
            isHovering: false,
            lastHoverTime: Date.now()
        } : null)
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={iconRef}
            className="group flex bg-[#ffffffa3] w-[3rem] h-[3rem] relative flex-col items-center justify-center rounded-lg"
        >
            {icon ? icon : <Svg src='ban' className='w-9 h-9 opacity-20' alt='no image' />}

            {learning && <div className='animate-pulse shadow-[0_0px_10px_1px_rgba(0,0,0,0.4)] absolute bottom-[-3px] right-[-3px] w-2 h-2 rounded-full bg-[#ff7dee]'></div>}
        </div>
    )
}
type Props = {
    icon?: ReactNode,
    title: string
    description?: string
    skillLevel?: number | null
    learning?: boolean
}