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
      <div className="backdrop-blur-2 flex w-full h-full justify-between flex-col gap-2 rounded-lg bg-[rgba(255,255,255,0.3)] p-2 shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] duration-300 lg:hover:opacity-80">
        <Image
          src={thumbnail}
          alt="project"
          sizes="(min-width: 1040px) calc(24.44vw - 33px), (min-width: 780px) calc(32.92vw - 36px), (min-width: 480px) calc(49.29vw - 42px), calc(98.75vw - 56px)"
          className="w-full rounded-lg"
          placeholder="blur"
        />
        <div className="flex flex-col gap-2 rounded-md bg-[rgba(255,255,255,0.4)] p-2">
          <div
            className={`${inter.className} leading-5 text-[rgba(0,0,0,0.5)]`}
          >
            {name}
          </div>
          <div
            className={`${inter.className} break-words rounded-md text-sm font-[300] leading-4 text-[rgba(0,0,0,0.3)]`}
          >
            {description}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectBox
