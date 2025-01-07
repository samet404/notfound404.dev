import Image, { type StaticImageData } from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  weight: ['600'],
})

type ProjectBoxProps = {
  name: string
  description: string
  thumbnail: StaticImageData
  link: string | null
}
const ProjectBox = ({
  name,
  description,
  thumbnail,
  link,
}: ProjectBoxProps) => {
  return (
    <Link href={link ? link : '/'} target="_blank">
      <div className="backdrop-blur-2 flex w-[15rem] justify-between flex-col gap-2 rounded-lg bg-[rgba(255,255,255,0.3)] p-2 shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] duration-300 lg:hover:opacity-80">
        <Image
          src={thumbnail}
          alt="project"
          sizes="(min-width: 1040px) calc(24.44vw - 33px), (min-width: 780px) calc(32.92vw - 36px), (min-width: 480px) calc(49.29vw - 42px), calc(98.75vw - 56px)"
          className="w-full rounded-lg"
          placeholder="blur"
        />
        <div className="flex flex-col gap-4 rounded-md items-start p-2">
          <div className='flex flex-col gap-2'>
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
          <div className='flex gap-1 flex-row flex-wrap'>
            {['Private Project', 'Next.js', 'React.js', 'Typescript', 'PostgreSQL', 'Redis', 'Socket.io', 'WebRTC'].map(i => <div key={i} className='text-xs px-2 py-1 text-white bg-[#9900ff82] rounded-md'>
              {i}
            </div>)}
          </div>

        </div>
      </div>
    </Link>
  )
}

export default ProjectBox
