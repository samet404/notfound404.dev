"use client"

import { useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { NavScrollbarContainerAtom } from '../app/_components/atoms'

export const SetScrollContainer = () => {
    const setScrollContainer = useSetAtom(NavScrollbarContainerAtom)

    useEffect(() => {
        setScrollContainer(document.getElementById('scroll-container') as HTMLDivElement)
    }, [])

    return null
}