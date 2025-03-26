"use client"

import { useAtomValue } from 'jotai'
import Link from 'next/link'
import { useState, useEffect, type ReactNode } from 'react'
import { NavScrollbarContainerAtom } from './atoms'
import { Svg } from '@/src/components/Svg'
import { usePathname } from 'next/navigation'

export const Nav = () => {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(true)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const scrollContainer = useAtomValue(NavScrollbarContainerAtom)

    useEffect(() => {
        setIsVisible(true)
    }, [pathname])

    useEffect(() => {
        if (!scrollContainer) { return }

        let lastScrollY = 0
        const scrollThreshold = 10 // Minimum scroll distance needed to trigger hide/show
        let lastScrollTime = Date.now()
        const debounceTime = 50 // Milliseconds to wait between scroll events

        const handleScroll = () => {
            const now = Date.now()
            const currentScrollY = scrollContainer.scrollTop
            const scrollDifference = Math.abs(currentScrollY - lastScrollY)

            // Only process scroll if threshold is met and enough time has passed
            if (scrollDifference > scrollThreshold && (now - lastScrollTime) > debounceTime) {
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false)
                    setIsMobileMenuOpen(false)
                } else {
                    setIsVisible(true)
                }

                lastScrollY = currentScrollY
                lastScrollTime = now
            }
        }

        scrollContainer.addEventListener('scroll', handleScroll)
        return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }, [scrollContainer])

    return (
        <div className='fixed h-[4rem] w-full flex p-2 justify-center top-0 z-[45]'>
            <nav
                style={{ transform: `translateY(${isVisible ? '0' : '-200%'})`, transition: 'transform 0.3s ease', pointerEvents: isVisible ? 'auto' : 'none' }}
                className='md:w-[50rem] xxs:w-full flex h-full px-5 top-0 rounded-lg shadow-[0_0px_20px_0.5px_rgba(0,0,0,0.3)] md:bg-[#00000061] xxs:bg-[#0000009a] xxs:backdrop-blur-sm md:backdrop-blur-md items-center justify-between drop-shadow-md relative'
            >
                <NavLink href="/">
                    notfound404.dev
                </NavLink>

                {/* Desktop Menu */}
                <div className='hidden xs:flex flex-row gap-6'>
                    <NavLink href="/articles">Articles</NavLink>
                    <NavLink href="/">About me</NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className='xs:hidden text-[#ffffff7e] hover:text-[#ffffff] transition-colors'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Svg src='menu' className='w-6 h-6 opacity-75' alt='menu' />
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className='absolute top-full left-0 right-0 items-center mt-2 bg-[#000000] backdrop-blur-md rounded-lg p-4 flex flex-col gap-4 xs:hidden '>
                        <NavLink href="/articles">Articles</NavLink>
                        <NavLink href="/">About me</NavLink>
                    </div>
                )}
            </nav>
        </div>
    )
}

export const NavLink = ({ href, children, className }: NavLinkProps) => {
    return (
        <Link className={`text-[#ffffff7e] hover:text-[#ffffff] transition-colors ${className}`} href={href}>
            {children}
        </Link>
    )
}

type NavLinkProps = {
    href: string
    children: ReactNode
    className?: string
}