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
  pfp: StaticImageData | string
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
            width={500}
            height={500}
            src={pfp}
            alt="pfp"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRkgDAABXRUJQVlA4WAoAAAAgAAAAcAAAcAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggWgEAAPANAJ0BKnEAcQA+6WikTb+/q6Iy9Kuz8B0JZ27f+rXT25tv8DOMw6rWnJ+OAqvGugX1RIyzVszBegdbBz5rAyyW1OdPdCjNsW14VeBQLUg9fuUjkIxLDeg2QuxjPNbBTsrt3wLbvZ25CDtMMxvEE6N8Jy+pIHfdgAD+8NDrRIfPyyx7I0mGTHT3t01WK5VsnpHexJ+Go4uTc+od+vzSPLGCi5rWSgc0YqgnFKKQxebGuR9mEWvGdUluNtc3mAj162AhkyRnSxo9nV9IXf1Jm7b7rxpgvOEBvIUQFbIMclqFXmh4oZa8GCTZ/EZO40/GCGKdqzEqOyH6Y+9ofT0t5Vye+pQH/H111ZGWXU9xwbgx4JuHFa9ikIzEwUoQaApplsR23TR52EO/zgsjpgg28GgaO3Fo5R8vN0VbIvd/OouesvzK5Lsv0q4PzpHifaARHefdvUFzH7BIAAA="
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
