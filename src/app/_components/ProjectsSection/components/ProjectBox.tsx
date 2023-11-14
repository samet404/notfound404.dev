import Image, { StaticImageData } from 'next/image'
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
    link: string
}
const ProjectBox = ({
    name,
    description,
    thumbnail,
    link
}: ProjectBoxProps) => {
  return (
    <Link href={link}>
      <div className='lg:hover:opacity-80 duration-300 p-2 flex flex-col gap-2 bg-[rgba(255,255,255,0.3)] backdrop-blur-2  rounded-lg shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)]'>
      <Image
        src={thumbnail}
        alt='project'
        sizes='(min-width: 1040px) calc(24.44vw - 33px), (min-width: 780px) calc(32.92vw - 36px), (min-width: 480px) calc(49.29vw - 42px), calc(98.75vw - 56px)'
        className='rounded-lg w-full'
        placeholder='blur'
      />
      <div className='bg-[rgba(255,255,255,0.4)] flex flex-col gap-2 rounded-md p-2'>
      <div className={`${inter.className} text-1xl`}>
        {name}
      </div>
      <div className={`${inter.className} py-1 px-2 text-sm bg-[rgba(0,0,0,0.05)] text-[rgba(0,0,0,0.6)] rounded-2xl`}>
        {description}
      </div>
      </div>
    </div>
    </Link>
  )
}

export default ProjectBox