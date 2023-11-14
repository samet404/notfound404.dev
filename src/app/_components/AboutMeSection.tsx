import Image, { type StaticImageData } from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['600'],
})

type AboutMeSectionProps = {
  name: string
  description: JSX.Element
  hobbies: JSX.Element
  pfp: StaticImageData
}
const AboutMeSection = ({
  name,
  description,
  pfp,
  hobbies,
}: AboutMeSectionProps) => {
  return (
    <div className="flex w-full animate-fade-up flex-row items-center  px-4 py-4 shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] animate-once">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-3 text-2xl">
          <Image
            src={pfp}
            alt="pfp"
            placeholder="blur"
            className="h-20 w-20 rounded-full drop-shadow-[0_0px_20px_rgba(0,0,0,0.55)]"
            sizes="calc(1.96vw + 75px)"
          />
          <div className={`${inter.className} text-[rgba(0,0,0,0.5)]`}>
            {name}
          </div>
        </div>
        <div className="grid  gap-4 xxs:grid-cols-1 md:grid-cols-2">
          {description}
          {hobbies}
        </div>
      </div>
    </div>
  )
}

export default AboutMeSection
