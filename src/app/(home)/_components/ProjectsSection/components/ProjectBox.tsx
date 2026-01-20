'use client'

import Link from 'next/link'
import { useRef, useState, type ReactNode } from 'react'
import { cn } from '@/src/utils'
import { ExternalLink, ImageIcon, Video } from 'lucide-react'
import Image from 'next/image'

type ProjectBoxProps = {
  name: string
  description: ReactNode
  thumbnail: ReactNode
  link: string
  tags: string[]
  videoPath?: string
}

const ProjectBox = ({
  name,
  description,
  thumbnail,
  link,
  tags,
  videoPath,
}: ProjectBoxProps) => {
  const [showVideo, setShowVideo] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  return (
    <div className="backdrop-blur-2 flex w-full max-w-[30rem] flex-col items-start justify-between gap-7 rounded-lg bg-[rgba(255,255,255,0.3)] px-2 pb-2 pt-2 shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] duration-300">
      {showVideo && videoPath !== undefined && (
        <video
          ref={videoRef}
          className={cn('h-[13rem] w-full animate-fade rounded-md bg-black', {
            hidden: !showVideo,
          })}
          autoPlay
          controls
          muted
          loop
        >
          <source src={videoPath} type="video/mp4" />
        </video>
      )}

      {!showVideo && (
        <div className="flex w-full justify-center">{thumbnail}</div>
      )}

      <div className="flex w-full flex-col items-start gap-4 rounded-md p-2">
        <div className="flex flex-col gap-1">
          <div className="font-[700] leading-5 text-[rgba(0,0,0,0.5)]">
            {name}
          </div>
          <div className="break-words rounded-md text-xs font-[300] leading-4 text-[rgba(0,0,0,0.4)]">
            {description}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-row flex-wrap items-center gap-[0.3rem]">
            {tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="rounded-md bg-[#ffffff6d] px-[0.35rem] py-[0.15rem] text-[0.6rem] text-[#00000056]"
                >
                  {tag}
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex w-full flex-row justify-end gap-2 pt-3">
          { typeof(videoPath ) === 'string' && (
            <div
              onMouseDown={() => {
                setShowVideo(true)
              }}
              className={cn(
                'flex rounded-lg border-4 border-[#ffffff69] bg-[#cc2e7d] p-1 hover:opacity-70',
                {
                  'opacity-60': showVideo,
                },
              )}
            >
              <Video className="h-7 w-7 opacity-80" color="white" />
            </div>
          )}
          <div
            onMouseDown={() => {
              setShowVideo(false)
            }}
            className={cn(
              'flex rounded-lg border-4 border-[#ffffff69] bg-[#cc2e7d] p-1 hover:opacity-70',
              {
                'opacity-60': !showVideo,
              },
            )}
          >
            <ImageIcon className="h-7 w-7 opacity-80" color="white" />
          </div>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex rounded-lg border-4 border-[#ffffff69] bg-[#cc2e7d] p-1 hover:opacity-70"
          >
            <ExternalLink className="h-7 w-7 opacity-80" color="white" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectBox
