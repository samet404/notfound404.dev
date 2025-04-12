"use client"
import { useSetAtom } from 'jotai'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { dialogInfoAtom } from './atoms'
import { Svg } from '@/src/components/Svg'

export const SkillIcon = ({ icon, title, description, skillLevel, learning, type }: Props) => {
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
            imageFound: !!icon,
            skillType: type
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

    const typeStatusColor = (() => {
        switch (type) {
            case 'language':
                return '#ffb1f7ff'
            case 'library-framework':
                return '#fffab1ff'
            case 'service':
                return '#9785ffff'
            case 'tool':
                return '#1184ffff'
            case 'database':
                return '#42fba5bc'
            case 'low-skill':
                return '#ff00007d'
            case 'API':
                return '#ffbe4dbc'
        }
    })()

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={iconRef}
            style={{
                borderColor: typeStatusColor,
            }}
            className={`group bg-[#ffffffa3] hover:scale-110 hover:shadow-[0_0px_30px_1px_rgba(0,0,0,0.3)] duration-200 border-[0.15rem] p-[0.15rem] flex w-[3rem] h-[3rem] relative flex-col items-center justify-center rounded-lg`}
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
    type: 'tool' | 'service' | 'library-framework' | 'language' | 'database' | 'low-skill' | 'API'
}