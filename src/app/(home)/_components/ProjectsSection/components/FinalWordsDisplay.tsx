"use client"

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const FinalWords = dynamic(() => import('./FinalWords').then(m => m.FinalWords))

export const FinalWordsDisplay = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isInView, setIsInView] = useState(false)
    
    useEffect(() => {
        if (!document) return
    
        const scrollContainer = document.getElementById('scroll-container')
        if (!scrollContainer) return
    
        const checkInView = () => {
          const rect = containerRef.current!.getBoundingClientRect();
          setIsInView(rect.top < window.innerHeight && rect.bottom >= 0)
        }
    
        scrollContainer.addEventListener('scroll', () => checkInView())
        return () => scrollContainer.removeEventListener('scroll', () => checkInView())
      }, [])

      
      return <div ref={containerRef}>
          {isInView && <FinalWords />}
      </div>
}
