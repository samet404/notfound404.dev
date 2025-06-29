'use client'

import { useAtom } from 'jotai'
import { skillsCategoryAtom } from './atoms'
import useIsDarkTheme from '@/src/store/isDarkTheme'
import { useState, useRef, useEffect } from 'react'

export const SkillsCategoryDropdown = () => {
  const [category, setCategory] = useAtom(skillsCategoryAtom)
  const isDarkTheme = useIsDarkTheme((state) => state.value)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const categories = [
    'All',
    'Language',
    'Library-framework',
    'Service',
    'Tool',
    'Database',
    'API',
    'Dev tool',
    'Other',
  ] as const

  const getCategoryColor = (cat: (typeof categories)[number]) => {
    switch (cat) {
      case 'Language':
        return '#ffb1f7ff'
      case 'Library-framework':
        return '#fffab1ff'
      case 'Service':
        return '#9785ffff'
      case 'Tool':
        return '#1184ffff'
      case 'Database':
        return '#42fba5bc'
      case 'API':
        return '#ffbe4dbc'
      default:
        return '#ffffff80'
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative  inline-block cursor-none " ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
                    ${isDarkTheme ? 'bg-[#ffffff90]' : 'bg-[#ffffff90]'}
                    flex  w-[15rem] cursor-none flex-row
                    items-center
                    justify-between 
                    gap-2
                    rounded-lg  
                    border-2
                    px-3
                    py-1
                    outline-none
                    transition-all duration-200 hover:shadow-[0_0px_20px_1px_rgba(0,0,0,0.2)]
                    
                `}
        style={{
          borderColor: getCategoryColor(category),
        }}
      >
        {category.replace('-', '/')}
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 max-h-60 overflow-auto rounded-lg border border-gray-200 bg-[#fffffff5] shadow-lg backdrop-blur-sm">
          {categories.map((cat) => {
            if (cat === category) return null
            return (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat)
                  setIsOpen(false)
                }}
                className={`
                                w-full cursor-none  px-2 py-1 text-left text-[0.9rem]  hover:bg-gray-100
                                ${category === cat ? 'bg-gray-50' : ''}
                            `}
                style={{
                  color: category === cat ? getCategoryColor(cat) : 'inherit',
                }}
              >
                {cat.replace('-', '/')}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
