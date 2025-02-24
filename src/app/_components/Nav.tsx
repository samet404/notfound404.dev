"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export const Nav = () => {
    const [isVisible, setIsVisible] = useState(true)
    const router = usePathname()

    useEffect(() => {
        let lastScrollY = 0
        const scrollContainer = document.getElementById('scroll-container')
        if (!scrollContainer) { return }

        const handleScroll = () => {
            const currentScrollY = scrollContainer.scrollTop

            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false)
            } else {
                // Scrolling up
                setIsVisible(true)
            }

            lastScrollY = currentScrollY
        }

        scrollContainer.addEventListener('scroll', handleScroll)
        return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }, [router])

    return (
        <div className='fixed h-[4rem] w-full flex p-2 justify-center z-50'>
            <nav
                style={{ transform: `translateY(${isVisible ? '0' : '-200%'})`, transition: 'transform 0.3s ease' }}
                className='text-[#ffffff7e] md:w-[50rem] xxs:w-full flex h-full px-5  top-0 rounded-lg shadow-[0_0px_20px_1px_rgba(0,0,0,0.4)] bg-[#00000060] backdrop-blur-md items-center justify-between drop-shadow-md'>

                <Link href="/">
                    notfound404.dev
                </Link>
                <div className='flex flex-row gap-6'>
                    <Link href="/blog">
                        Blog
                    </Link>
                    <Link href="/">
                        Portfolio
                    </Link>
                </div>
            </nav>
        </div>
    )
}