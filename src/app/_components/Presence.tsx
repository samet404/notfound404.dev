/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'

import { Svg } from '@/src/components/Svg'
import { cn } from '@/src/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState } from 'react'
import {
  getPresenceTimeWorker,
  postMsgToTimerWorker,
  terminateTimerWorker,
} from './presenceTimeWorkerUtils'
import type {
  TimerOnMsgData,
  TimerWorkerPostMsgData,
} from './presenceTimeWorker'

type Activity = {
  name: string
  type: number
  state?: string
  details?: string
  assets?: {
    large_image?: string
    large_text?: string
  }
}

type PresenceData = {
  activities: Activity[]
  discord_status: string
  active_on_discord_web: boolean
  active_on_discord_desktop: boolean
  active_on_discord_mobile: boolean
}

export const Presence = () => {
  const [presenceData, setPresenceData] = useState<PresenceData | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const [error, setError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    try {
      setIsMobile(window.innerWidth < 768)
    } catch (e) {
      console.error('Failed to check window width:', e)
    }
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const localStoragePresence = localStorage.getItem('presence')
        if (localStoragePresence === '0') {
          return
        }

        if (!isOpen) setIsOpen(true)

        const fetchPresence = async () => {
          try {
            const res = await fetch(
              'https://api.lanyard.rest/v1/users/713803539117244496',
            )
            const json = await res.json()
            if (json?.data) {
              setPresenceData(json.data as unknown as PresenceData)
            }
          } catch (error) {
            console.error('Failed to fetch presence:', error)
            setError(true)
          }
        }

        await fetchPresence()
        const timerWorker = getPresenceTimeWorker()
        const workerMsg: TimerOnMsgData = {
          ID: 'presence',
          ms: 2000,
          type: 'interval',
          event: 'start',
        }

        timerWorker.current.postMessage(workerMsg)
        timerWorker.current.onmessage = (e: any) => {
          const data = e.data as TimerWorkerPostMsgData
          const { ID } = data

          switch (ID) {
            case 'presence':
              fetchPresence()
              break
          }
        }

        return () => terminateTimerWorker()
      } catch (e) {
        console.error('Failed to setup presence:', e)
        setError(true)
      }
    })()
  }, [isOpen])

  if (error) return null

  if (!isOpen)
    return (
      <div
        onMouseDown={() => {
          try {
            localStorage.setItem('presence', '1')
            setIsOpen(true)
          } catch (e) {
            console.error('Failed to set localStorage:', e)
          }
        }}
        className="absolute bottom-2 left-2 z-30 max-w-sm animate-fade space-y-2 rounded-lg bg-[#000000aa] p-1 shadow-lg backdrop-blur-sm duration-300 hover:opacity-0"
      >
        <Svg src={'up'} alt="" className="h-5 w-5 !fill-white opacity-50" />
      </div>
    )

  if (!presenceData) return null

  const getStatusColor = (status: string) =>
    ({
      online: 'bg-green-500',
      idle: 'bg-yellow-500',
      dnd: 'bg-red-500',
      offline: 'bg-gray-500',
    })[status] ?? 'bg-gray-500'

  const getPlatformStatus = () =>
    [
      presenceData.active_on_discord_web && 'Web',
      presenceData.active_on_discord_desktop && 'Desktop',
      presenceData.active_on_discord_mobile && 'Mobile',
    ]
      .filter(Boolean)
      .join(', ')

  return (
    <div className="fixed bottom-2 left-2 z-30 w-[12rem] max-w-sm animate-fade rounded-lg bg-[#000000aa] py-1 pl-[0.3rem] pr-[0.3rem] shadow-[0_0px_10px_1px_rgba(0,0,0,0.5)] backdrop-blur-sm animate-delay-100">
      <div className="flex w-full items-center justify-between">
        <div className="flex animate-pulse items-center justify-center gap-[0.4rem] p-1">
          <div
            className={`flex-shrink rounded-full p-1 ${getStatusColor(
              presenceData.discord_status,
            )}`}
          />
          <div className="leading-0 shrink pt-[0.1rem] text-center text-[0.5rem] capitalize text-gray-600 dark:text-gray-300">
            {presenceData.discord_status} ({getPlatformStatus()})
          </div>
        </div>

        <Svg
          src={'line'}
          alt=""
          className="h-6 w-6 rotate-90 !fill-white opacity-50"
          onClick={() => {
            try {
              localStorage.setItem('presence', '0')
              setIsOpen(false)
            } catch (e) {
              console.error('Failed to set localStorage:', e)
            }
          }}
        />
      </div>

      <div className="flex flex-col gap-2">
        {presenceData.activities?.map((activity, index) => {
          if (!activity || activity.type === 4) return null

          const showImage =
            activity.name === 'YouTube Music' && activity.assets?.large_image

          return (
            <div
              key={index}
              className="relative flex grow flex-col   rounded py-1 pl-1"
            >
              {activity.name === 'YouTube Music' &&
                activity.assets?.large_image && (
                  <Link
                    href={`https://music.youtube.com/search?q=${encodeURIComponent(
                      (activity.details?.trim() || '').replace(/\s+/g, '_'),
                    )}_${encodeURIComponent(
                      (activity.state?.trim() || '').replace(/\s+/g, '-'),
                    )}`}
                    target="_blank"
                    className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-lg bg-[#0000006c] text-sm text-white opacity-0 duration-500 hover:opacity-100"
                  >
                    Open in YouTube Music
                  </Link>
                )}
              <div className="flex flex-row gap-2 space-y-0.5 text-[0.55rem]">
                {showImage && activity.assets?.large_image && (
                  <Image
                    ref={imgRef}
                    width={70}
                    height={70}
                    src={
                      'https://' +
                      activity.assets.large_image.substring(
                        activity.assets.large_image.indexOf('https/') + 6,
                      )
                    }
                    style={{
                      objectFit:
                        imgRef.current?.naturalWidth !==
                        imgRef.current?.naturalHeight
                          ? 'none'
                          : 'cover',
                    }}
                    alt="youtube music"
                    className="flex h-[3rem] w-[3rem] rounded-md  object-cover object-center sm:h-[3.2rem] sm:w-[3.2rem]"
                  />
                )}

                <div
                  className={cn('flex w-[7rem] flex-col', {
                    'w-[10rem]': !showImage,
                  })}
                >
                  <div className="overflow-hidden text-ellipsis whitespace-nowrap font-medium text-gray-800 dark:text-gray-200">
                    {activity.details?.trim()}
                  </div>

                  <div className="overflow-hidden text-ellipsis whitespace-nowrap break-all pr-3 text-gray-600 dark:text-gray-400">
                    {activity.state}
                  </div>

                  <div className="overflow-hidden text-ellipsis whitespace-nowrap break-all pr-3 pt-[0.2rem] text-gray-500">
                    {activity.name}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="break-all p-1 text-[0.5rem] text-gray-500">
        Discord: 404nnotfoundd
      </div>
    </div>
  )
}

const getYTMusicLink = (imageUrl: string): string | null => {
  try {
    if (!imageUrl) return null

    let foundLink = false
    let link = ''
    let charIndex = imageUrl.length - 1
    let slashFound = 0

    while (true) {
      if (charIndex < 0) break

      const char = imageUrl[charIndex]
      if (char === '/') {
        if (slashFound == 1) {
          foundLink = true
          break
        }

        slashFound++
        charIndex--
        continue
      }

      if (slashFound === 1) link = imageUrl[charIndex] + link
      charIndex--
    }

    if (!foundLink) return null

    return `https://music.youtube.com/watch?v=${link}`
  } catch (e) {
    console.error('Failed to extract YouTube Music link:', e)
    return null
  }
}
