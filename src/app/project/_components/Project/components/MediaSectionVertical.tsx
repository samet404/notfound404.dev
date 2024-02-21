'use client'

import Image, { type StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

type MediaSectionVerticalProps = {
  videos: Array<string> | null
  images: Array<StaticImageData> | null
}

const MediaSectionVertical = ({
  videos,
  images,
}: MediaSectionVerticalProps) => {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window != 'undefined') setHasWindow(true)
  }, [])

  console.log('vertical')
  if (images ?? videos)
    return (
      <div className="xs:grid-col-1 grid h-[20rem] w-full gap-3 overflow-x-hidden overflow-y-scroll rounded-md bg-[rgba(0,0,0,0.1)] p-2 shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  2xl:grid-cols-4">
        {hasWindow && videos
          ? videos.map((item: string, id: number) => {
              return (
                <div
                  key={id}
                  className="h-full rounded-md border-[0.2rem] border-[rgba(255,255,255,0.4)]"
                >
                  <ReactPlayer
                    pip={true}
                    width={'100%'}
                    key={id}
                    style={{
                      borderRadius: '300px',
                    }}
                    controls={true}
                    url={`/videos/${item}`}
                  />
                </div>
              )
            })
          : null}

        {images
          ? images.map((item, id: number) => {
              return (
                <div key={id} className="w-full">
                  <Image
                    className="h-full w-full rounded-md object-contain drop-shadow-[0_0px_5px_rgba(0,0,0,0.8)]"
                    placeholder="blur"
                    src={item}
                    alt="img"
                    sizes="min-width: 1540px) calc(24.52vw - 35px), (min-width: 1040px) calc(32.5vw - 38px), (min-width: 640px) calc(46.84vw - 16px), calc(99.06vw - 49px)"
                  />
                </div>
              )
            })
          : null}
      </div>
    )

  return null
}

export default MediaSectionVertical
