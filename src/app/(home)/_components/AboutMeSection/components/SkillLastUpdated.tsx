'use client'

import { useState, useEffect } from 'react'

const lastUpdated = 1765997012622

export const SkillLastUpdated = () => {
  const [timeElapsed, setTimeElapsed] = useState('')

  const calculateTimeElapsed = () => {
    const now = Date.now()
    const diff = now - lastUpdated

    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const weeks = Math.floor(days / 7)

    if (weeks > 0) {
      const remainingDays = days % 7
      const remainingHours = hours % 24

      let result = `${weeks} week${weeks > 1 ? 's' : ''}`
      if (remainingDays > 0) {
        result += `, ${remainingDays} day${remainingDays > 1 ? 's' : ''}`
      }
      if (remainingHours > 0 && remainingDays === 0) {
        result += `, ${remainingHours} hour${remainingHours > 1 ? 's' : ''}`
      }
      return result
    } else if (days > 0) {
      const remainingHours = hours % 24
      let result = `${days} day${days > 1 ? 's' : ''}`
      if (remainingHours > 0) {
        result += `, ${remainingHours} hour${remainingHours > 1 ? 's' : ''}`
      }
      return result
    } else if (hours > 0) {
      const remainingMinutes = minutes % 60
      let result = `${hours} hour${hours > 1 ? 's' : ''}`
      if (remainingMinutes > 0) {
        result += `, ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`
      }
      return result
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''}`
    } else {
      return `${seconds} second${seconds > 1 ? 's' : ''}`
    }
  }

  useEffect(() => {
    const updateTime = () => {
      setTimeElapsed(calculateTimeElapsed())
    }

    updateTime() // Initial calculation
    const interval = setInterval(updateTime, 1000) // Update every second

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2 rounded bg-[#ffffff3c] px-2 py-1 text-[0.7rem] text-white">
      <div className="relative h-2 w-2">
        <div className="h-full w-full shrink-0 rounded-full bg-white"></div>

        <div className="h-full duration-1000 w-full shrink-0 absolute left-0 top-0 animate-ping rounded-full bg-white"></div>
      </div>
      <span>Last updated: {timeElapsed} ago</span>
    </div>
  )
}
