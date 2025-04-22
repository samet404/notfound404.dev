import Link from 'next/link'
import type { ReactNode } from 'react'

type ProjectBoxProps = {
  name: string
  description: string
  thumbnail: ReactNode
  link: string | null
  tags: string[]
}
const ProjectBox = ({
  name,
  description,
  thumbnail,
  link,
  tags,
}: ProjectBoxProps) => {
  return (
    <Link href={link ? link : '/'} target="_blank">
      <div className="backdrop-blur-2 flex w-[15rem] items-center justify-between flex-col gap-7 rounded-lg bg-[rgba(255,255,255,0.3)] px-2 pb-2 pt-2 shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] duration-300 lg:hover:opacity-70 lg:hover:-translate-y-3">
        {thumbnail}

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
