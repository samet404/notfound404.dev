"use client"

import { useSetAtom } from 'jotai'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { dialogInfoAtom } from './atoms'

export const SkillIcon = ({ icon, title, description, skillLevel }: Props) => {
    const iconRef = useRef<HTMLDivElement>(null)
    const setDialogInfo = useSetAtom(dialogInfoAtom)


    const onMouseDown = () => {
        const boundingRect = iconRef.current?.getBoundingClientRect()
        if (boundingRect) {
            setDialogInfo({
                title,
                description,
                skillLevel,
                x: boundingRect.left,
                y: boundingRect.top,
            })
        }
    }

    return (
        <div
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseDown}
            ref={iconRef} className="group flex bg-[#ffffffa3] w-[3rem] h-[3rem] flex-col items-center justify-center rounded-lg">
            {icon}

        </div>
    )
}

type Props = {
    icon: ReactNode,
    title: string
    description?: string
    skillLevel: number | null
}