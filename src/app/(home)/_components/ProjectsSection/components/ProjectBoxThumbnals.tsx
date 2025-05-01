"use client"

import { useEffect, useState, type ReactNode } from 'react'

type Props = {
    thumbnails: ReactNode[]
}

export const ProjectBoxThumbnals = ({
    thumbnails,
}: Props) => {
    const [currentThumbnail, setCurrentThumbnail] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentThumbnail((prevThumbnail) => {
                if (prevThumbnail === thumbnails.length - 1) {
                    return 0
                } else {
                    return prevThumbnail + 1
                }
            })
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return <div className='animate-fade flex items-center justify-center w-full h-[13rem]'>
        {thumbnails[currentThumbnail]}
    </div>
}