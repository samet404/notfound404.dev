"use client"

import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { dialogInfoAtom } from './atoms'

export const Dialog = () => {
    const info = useAtomValue(dialogInfoAtom)
    const setDialogInfo = useSetAtom(dialogInfoAtom)
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    )

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        const handleScroll = () => {
            setDialogInfo(null)
        }

        window.addEventListener('resize', handleResize)
        const scrollContainer = document.getElementById('scroll-container')
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll)
        }

        return () => {
            window.removeEventListener('resize', handleResize)
            scrollContainer?.removeEventListener('scroll', handleScroll)
        }
    }, [setDialogInfo])

    if (!info) return null

    const { title, description, x, y, skillLevel } = info

    const getDialogPosition = () => {
        if (windowWidth <= 550) {
            return {
                left: '50%',
                transform: 'translateX(-50%) translateY(-100%)',
            }
        }

        const screenMiddle = windowWidth / 2
        const isRightSide = x > screenMiddle

        return {
            left: isRightSide ? `${x - 280}px` : `${x}px`,
            transform: 'translateY(-100%)',
        }
    }

    return (
        <div className='absolute inset-0 pointer-events-none z-50'>
            <div
                style={{
                    position: 'absolute',
                    top: y,
                    ...getDialogPosition(),
                }}
                className='pointer-events-none'
            >
                <div className="flex flex-col gap-3 p-3 text-white w-[15rem] shadow-[0_0px_10px_1px_rgba(0,0,0,0.5)] bg-[#000000b9] backdrop-blur-lg rounded-md">
                    <div className='flex flex-col gap-1'>
                        <div className="text-sm font-bold">{title}</div>
                        {description && <div className="text-[0.7rem]">{description}</div>}
                    </div>
                    {skillLevel && <div className='flex flex-col'>
                        <div className='text-[0.9rem]'>
                            Skill level: {skillLevel}/100
                        </div>
                        <div className='text-[0.6rem]'>
                            Calculated based on my guess, experience and the amount of time I've spent using the technology.
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}