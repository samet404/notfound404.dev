"use client"
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { dialogInfoAtom } from './atoms'

const DIALOG_WIDTH = 240;
const PADDING = 16;

const dialogBaseStyle = {
    backgroundColor: "#000000b9"
};

const getDialogPosition = (x: number, y: number) => {
    if (typeof window === 'undefined') return {}

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const isRightHalf = x > viewportWidth / 2;
    const isBottomHalf = y > viewportHeight / 2;

    let left: number;
    let top: number;
    let transform = '';

    if (isRightHalf) {
        left = Math.max(PADDING, x - DIALOG_WIDTH - PADDING);
    } else {
        left = Math.min(x + PADDING, viewportWidth - DIALOG_WIDTH - PADDING);
    }

    if (isBottomHalf) {
        transform = 'translateY(-100%)';
        top = y - 10;
    } else {
        transform = 'translateY(20px)';
        top = y;
    }

    return {
        left: `${left}px`,
        top: `${top}px`,
        transform,
    }
}

export const Dialog = () => {
    const info = useAtomValue(dialogInfoAtom)
    const setDialogInfo = useSetAtom(dialogInfoAtom)

    useEffect(() => {
        const scrollContainer = document.getElementById('scroll-container')
        if (!scrollContainer) return

        const onScrollCloseDialog = () => setDialogInfo(null)
        scrollContainer.addEventListener('scroll', onScrollCloseDialog)
        return () => scrollContainer.removeEventListener('scroll', onScrollCloseDialog)
    }, [setDialogInfo])

    useEffect(() => {
        if (!info || info.isHovering) return

        const closeTimeout = setTimeout(() => setDialogInfo(null), 100)
        return () => clearTimeout(closeTimeout)
    }, [info?.isHovering, setDialogInfo])

    if (!info) return null

    const { title, description, x, y, skillLevel, learning, imageFound, skillType } = info
    const position = getDialogPosition(x, y)

    return (
        <div className='absolute inset-0 pointer-events-none z-50'>
            <div
                style={{
                    position: 'absolute',
                    ...position,
                }}
                className='pointer-events-none transition-transform xxs:duration-0 md:duration-150'
            >
                <div
                    style={dialogBaseStyle}
                    className="flex flex-col gap-3 p-3 text-white w-[15rem] shadow-[0_0px_10px_1px_rgba(0,0,0,0.5)] backdrop-blur-lg rounded-md"
                >

                    {learning && (
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='w-4 h-4 rounded-full bg-[#ff0edf]'></div>
                            <div className='text-sm font-bold'>Learning</div>
                        </div>
                    )}

                    <div className='flex flex-col gap-1'>
                        <div className="text-sm font-bold">{title}</div>
                        {description && <div className="text-[0.7rem]">{description}</div>}
                    </div>



                    {skillLevel && (
                        <div className='flex flex-col'>
                            <div className='text-[0.9rem]'>
                                Skill level: {skillLevel}/100
                            </div>
                            <div className='text-[0.55rem]'>
                                Calculated based on my guess, experience and the amount of time I've spent using the technology. Doesn't mean I know every little thing about it.
                            </div>
                        </div>
                    )}
                    <div className='flex flex-col gap-1'>
                        {skillType && <div className='text-[0.7rem]'>{skillType}</div>}
                        {!imageFound && <div className='text-[0.7rem]'>No image found for that.</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}