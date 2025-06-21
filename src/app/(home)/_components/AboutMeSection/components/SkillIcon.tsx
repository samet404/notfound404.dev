"use client"
import { useAtomValue, useSetAtom } from 'jotai'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { dialogInfoAtom, skillsCategoryAtom } from './atoms'
import { Svg } from '@/src/components/Svg'
import useIsDarkTheme from '@/src/store/isDarkTheme'
import type { SkillType } from './types'
import { cn } from '@/src/utils'

export const SkillIcon = ({ icon, title, description, skillLevel, learning, type }: Props) => {
    const iconRef = useRef<HTMLDivElement>(null)
    const setDialogInfo = useSetAtom(dialogInfoAtom)
    const isDarkTheme = useIsDarkTheme((state) => state.value)
    const selectedCategory = useAtomValue(skillsCategoryAtom)

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

    if (selectedCategory !== 'All' && selectedCategory !== type) return null

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={iconRef}
            className={cn(` group bg-[#ffffffa3] hover:scale-110 hover:shadow-[0_0px_30px_3px_#ffffff79] duration-200 border-[0.15rem] p-[0.15rem]  flex w-[3rem] h-[3rem] relative flex-col items-center justify-center rounded-lg`, {
                'bg-[#ffffffac]': isDarkTheme,
                'border-[#fff67e]': type === 'Language',
                'border-[#8975ff]': type === 'Service',
                'border-[#1184ff]': type === 'Tool',
                'border-[#42fba5]/[0.74]': type === 'Database',
                'border-[#ffbe4d]/[0.74]': type === 'API',
                'hover:opacity-100 opacity-50': skillLevel && (skillLevel < 10),
            })}
        >
            {icon ? icon : <Svg src='ban' className='w-9 h-9' alt='no image' />}
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
    type: SkillType | null
}