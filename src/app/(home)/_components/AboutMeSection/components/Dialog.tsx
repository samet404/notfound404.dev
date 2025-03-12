"use client"
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { dialogInfoAtom } from './atoms'


const DIALOG_WIDTH = 240;
const PADDING = 16;

export const Dialog = () => {
    const info = useAtomValue(dialogInfoAtom)
    const setDialogInfo = useSetAtom(dialogInfoAtom)


    useEffect(() => {
        let closeTimeout: NodeJS.Timeout;

        if (info && !info.isHovering) {
            closeTimeout = setTimeout(() => {
                setDialogInfo(null)
            }, 100)
        }

        return () => {
            if (closeTimeout) {
                clearTimeout(closeTimeout)
            }
        }
    }, [info?.isHovering, setDialogInfo])

    if (!info) return null

    const { title, description, x, y, skillLevel, learning } = info

    const getDialogPosition = () => {
        if (typeof window === 'undefined') return

        if (window.innerWidth <= 550) {
            return {
                left: '50%',
                transform: 'translateX(-50%) translateY(-100%)',
            }
        }

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Determine which quadrant of the screen the cursor is in
        const isRightHalf = x > viewportWidth / 2;
        const isBottomHalf = y > viewportHeight / 2;

        let left: number;
        let top: number;
        let transform = '';

        // Position horizontally based on cursor's screen half
        if (isRightHalf) {
            // Cursor on right side - show dialog to the left
            left = Math.max(PADDING, x - DIALOG_WIDTH - PADDING);
        } else {
            // Cursor on left side - show dialog to the right
            left = Math.min(x + PADDING, viewportWidth - DIALOG_WIDTH - PADDING);
        }

        // Position vertically based on cursor's position
        if (isBottomHalf) {
            // Cursor in bottom half - show dialog above cursor
            transform = 'translateY(-100%)';
            top = y - 10; // Offset to prevent flickering
        } else {
            // Cursor in top half - show dialog below cursor
            transform = 'translateY(20px)';
            top = y;
        }

        return {
            left: `${left}px`,
            top: `${top}px`,
            transform,
        }
    }

    return (
        <div className='absolute inset-0 pointer-events-none z-50'>
            <div
                style={{
                    position: 'absolute',
                    ...getDialogPosition(),
                }}
                className='pointer-events-none transition-transform duration-150'
            >
                <div
                    style={{
                        backgroundColor: "#000000b9"
                    }}
                    className="flex flex-col gap-3 p-3 text-white w-[15rem] shadow-[0_0px_10px_1px_rgba(0,0,0,0.5)] backdrop-blur-lg rounded-md">
                    {
                        learning && <div className='flex flex-row gap-2 items-center'>
                            <div className='w-4 h-4 rounded-full bg-[#ff0edf]'></div>
                            <div className='text-sm font-bold'>Learning</div>
                        </div>
                    }

                    <div className='flex flex-col gap-1'>
                        <div className="text-sm font-bold">{title}</div>
                        {description && <div className="text-[0.7rem]">{description}</div>}
                    </div>


                    {skillLevel && <div className='flex flex-col'>
                        <div className='text-[0.9rem]'>
                            Skill level: {skillLevel}/100
                        </div>
                        <div className='text-[0.55rem]'>
                            Calculated based on my guess, experience and the amount of time I've spent using the technology. Doesn't mean I know every little thing about it.
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}