"use client"

import useIsDarkTheme from '@/src/store/isDarkTheme'
import { useEffect, type PropsWithChildren } from 'react'

export const DarkTheme = ({ children }: PropsWithChildren) => {
    const setDarkTheme = useIsDarkTheme((state) => state.set)

    useEffect(() => {
        const localStorageTheme = localStorage.getItem('theme')
        if (localStorageTheme === 'dark') setDarkTheme(true)
        else setDarkTheme(false)
    }, [])

    return children
}