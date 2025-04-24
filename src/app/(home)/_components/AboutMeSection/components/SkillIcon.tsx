"use client"
import { useAtomValue, useSetAtom } from 'jotai'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { dialogInfoAtom, skillsCategoryAtom } from './atoms'
import { Svg } from '@/src/components/Svg'
import useIsDarkTheme from '@/src/store/isDarkTheme'
import type { SkillType } from './types'

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

    const typeStatusColor = (() => {
        if (selectedCategory !== 'All') return '#ffffff80'
        switch (type) {
            case 'Language':
                return '#ffb1f7ff'
            case 'Library-framework':
                return '#fffab1ff'
            case 'Service':
                return '#9785ffff'
            case 'Tool':
                return '#1184ffff'
            case 'Database':
                return '#42fba5bc'
            case 'Low-skill':
                return '#ff00007d'
            case 'API':
                return '#ffbe4dbc'
        }
    })()

    if (selectedCategory !== 'All' && selectedCategory !== type) return null

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={iconRef}
            style={{
                borderColor: typeStatusColor,
            }}
            className={`animate-fade group ${isDarkTheme ? 'bg-[#ffffffac]' : 'bg-[#ffffffa3]'} hover:scale-110 hover:shadow-[0_0px_30px_3px_#31a3fd] duration-200 border-[0.15rem] p-[0.15rem] flex w-[3rem] h-[3rem] relative flex-col items-center justify-center rounded-lg`}
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
    type: SkillType
}