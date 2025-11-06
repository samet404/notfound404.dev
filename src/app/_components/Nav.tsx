'use client'

import { useAtomValue } from 'jotai'
import Link from 'next/link'
import { useState, useEffect, type ReactNode } from 'react'
import { NavScrollbarContainerAtom } from './atoms'
import { Svg } from '@/src/components/Svg'
import { usePathname } from 'next/navigation'
import useIsDarkTheme from '@/src/store/isDarkTheme'

const DarkThemeButton = () => {
  const setDarkTheme = useIsDarkTheme((state) => state.set)
  const darkTheme = useIsDarkTheme((state) => state.value)

  return (
    <Svg
      src="dark-theme"
      onClick={() => setDarkTheme(!darkTheme)}
      className="h-6 w-6   rounded-full bg-white opacity-50"
      alt="menu"
    />
  )
}

export const Nav = () => {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollContainer = useAtomValue(NavScrollbarContainerAtom)

  useEffect(() => {
    setIsVisible(true)
  }, [pathname])

  useEffect(() => {
    if (!scrollContainer) {
      return
    }

    let lastScrollY = 0
    const scrollThreshold = 10 // Minimum scroll distance needed to trigger hide/show
    let lastScrollTime = Date.now()
    const debounceTime = 50 // Milliseconds to wait between scroll events

    const handleScroll = () => {
      const now = Date.now()
      const currentScrollY = scrollContainer.scrollTop
      const scrollDifference = Math.abs(currentScrollY - lastScrollY)

      // Only process scroll if threshold is met and enough time has passed
      if (
        scrollDifference > scrollThreshold &&
        now - lastScrollTime > debounceTime
      ) {
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
    <div className="pointer-events-none fixed top-0 z-[45] flex h-[4rem] w-full justify-center p-2">
      <nav
        style={{
          transform: `translateY(${isVisible ? '0' : '-200%'})`,
          transition: 'transform 0.3s ease',
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
        className="relative top-0 flex h-full items-center justify-between rounded-lg px-5 shadow-[0_0px_20px_0.5px_rgba(0,0,0,0.3)] drop-shadow-md xxs:w-full xxs:bg-[#00000071] xxs:backdrop-blur-sm md:w-[50rem] md:bg-[#00000061] md:backdrop-blur-md"
      >
        <NavLink href="/">notfound404.dev</NavLink>

        {/* Desktop Menu */}
        <div className="hidden flex-row gap-5 min-[600px]:flex">
          <NavLink href="https://notfound404.life">Life</NavLink>
          <NavLink href="/articles">Articles</NavLink>
          <NavLink href="/">About me</NavLink>
          <DarkThemeButton />
        </div>
        <div className="flex flex-row items-center gap-3 min-[600px]:hidden">
          <DarkThemeButton />
          <button
            className="text-[#ffffff7e] transition-colors hover:text-[#ffffff]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Svg src="menu" className="h-6 w-6 opacity-75" alt="menu" />
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 flex flex-col items-center gap-4 rounded-lg bg-[#2b2b2b] p-4 backdrop-blur-md min-[600px]:hidden ">
            <NavLink href="https://notfound404.life">Life</NavLink>
            <NavLink href="/calender">Calender</NavLink>
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
    <Link
      className={`text-[#ffffff7e] transition-colors hover:text-[#ffffff] ${className}`}
      href={href}
    >
      {children}
    </Link>
  )
}

type NavLinkProps = {
  href: string
  children: ReactNode
  className?: string
}
