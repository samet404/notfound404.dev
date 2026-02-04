'use client'

import React, { useState, useEffect } from 'react'

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container')
    const documentScrollContainer =
      document.getElementById('scroll-container')
    if (!documentScrollContainer) return

    const calculateScrollProgress = () => {
      const totalHeight =
        documentScrollContainer.scrollHeight -
        documentScrollContainer.clientHeight
      const currentScroll = documentScrollContainer.scrollTop
      const scrollPercentage = (currentScroll / totalHeight) * 100
      setScrollProgress(Math.min(100, Math.max(0, scrollPercentage)))
    }


    scrollContainer!.addEventListener('scroll', calculateScrollProgress)

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', calculateScrollProgress)
      }
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollProgress}%`,
          backgroundColor: '#ffffffb9',
        }}
      />
    </div>
  )
}

export default ScrollProgressBar
