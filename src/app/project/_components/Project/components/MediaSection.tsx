'use client'

import Image, { type StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

type MediaSectionProps = {
  videos: Array<string>
  images: Array<StaticImageData>
}

const MediaSection = ({videos, images }: MediaSectionProps) => {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window != 'undefined') setHasWindow(true)
  }, [])

  return (
    <div className="flex xxs:h-[14rem] lg:h-[13rem] w-full flex-row gap-3 overflow-y-hidden overflow-x-scroll rounded-md bg-[rgba(0,0,0,0.1)] p-2  shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)]">
      {hasWindow &&
        videos.map((item: string, id: number) => {
          return (
            <div
              key={id}
              className="h-full rounded-md border-[0.2rem] border-[rgba(255,255,255,0.4)]"
            >
              <ReactPlayer
                pip={true}
                height={'100%'}
                key={id}
                style={{
                  borderRadius: '300px',
                }}
                controls={true}
                url={`/videos/${item}`}
              />
            </div>
          )
        })}

      {images.map((item, id: number) => {
        return (
          <Image
            className="h-full w-auto rounded-md drop-shadow-[0_0px_5px_rgba(0,0,0,0.8)]"
            placeholder="blur"
            key={id}
            src={item}
            alt="img"
            sizes='(min-width: 1040px) calc(7.04vw + 249px), (min-width: 380px) calc(7.5vw + 273px), calc(68.33vw + 53px)'
          />
        )
      })}
    </div>
  )
}

export default MediaSection
