"use client"

import Link from 'next/link'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ProjectBoxThumbnals } from './ProjectBoxThumbnals'
import { cn } from '@/src/utils'

type ProjectBoxProps = {
  name: string
  description: string
  thumbnails: ReactNode[]
  link: string | null
  tags: string[],
  videoPath?: string
}


const ProjectBox = ({
  name,
  description,
  thumbnails,
  link,
  tags,
  videoPath
}: ProjectBoxProps) => {
  const containerRef = useRef<HTMLAnchorElement>(null)
  const [showVideo, setShowVideo] = useState<Boolean>(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (!videoPath || !document) return

    const scrollContainer = document.getElementById('scroll-container')
    if (!scrollContainer) return

    const checkInView = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0

      if (!isInView && showVideo) setShowVideo(false)
      if (isInView && !showVideo) setTimeout(() => {
        setShowVideo(true)
      }, 2000)
    }

    scrollContainer.addEventListener('scroll', () => checkInView())
    return () => scrollContainer.removeEventListener('scroll', () => checkInView())
  }, [])


  return (
    <Link ref={containerRef} href={link ? link : '/'} className='md:w-[30rem] xxs:w-full' target="_blank">
      <div className="backdrop-blur-2 flex  w-full  items-start justify-between flex-col gap-7 rounded-lg bg-[rgba(255,255,255,0.3)] px-2 pb-2 pt-2 shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] duration-300 lg:hover:opacity-70">
        <video ref={videoRef} className={cn('h-[13rem] animate-fade w-full bg-black rounded-md', {
          'hidden': !showVideo
        })} autoPlay controls muted loop>
          <source src={videoPath} type="video/mp4" />
        </video>

        {
          !showVideo && <ProjectBoxThumbnals thumbnails={thumbnails} />
        }

        <div className="flex flex-col gap-4 rounded-md items-start p-2">
          <div className='flex flex-col gap-5'>
            <div className="flex gap-1 flex-col">
              <div
                className='leading-5 text-[rgba(0,0,0,0.5)] font-[700]'
              >
                {name}
              </div>
              <div
                className='break-words rounded-md text-xs font-[300] leading-4 text-[rgba(0,0,0,0.4)]'
              >
                {description}
              </div>
            </div>


            <div className='flex flex-col gap-1'>
              <div className='flex flex-row gap-[0.3rem] items-center flex-wrap'>
                {tags.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className='bg-[#ffffff6d] px-[0.35rem] py-[0.15rem] text-[0.6rem] rounded-md text-[#00000056]'
                    >
                      {tag}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectBox
