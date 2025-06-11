import Image from 'next/image'
import { Kaushan_Script } from 'next/font/google'

const kausan = Kaushan_Script({
    weight: '400',
    subsets: ['latin'],
})

export const FirstPart = () => {
    return (
        <div className={`flex flex-col items-center justify-center gap-5`}>
            <div className={` ${kausan.className} text-[1.5rem] pb-5 md:text-[2rem]  bg-gradient-to-r from-white via-[#ffffffa5] to-white inline-block text-transparent bg-clip-text text-center -skew-y-2   drop-shadow-[0_0px_10px_rgba(0,0,0,0.2)]`}>
                I don't have any job experience but I could fucking learn, I'm confident I have the potential to be the best...
            </div>
            <Image
                width={500}
                height={500}
                src='https://avatars.githubusercontent.com/u/145053429?v=4'
                alt="pfp"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRvwDAABXRUJQVlA4WAoAAAAgAAAAHAEAvQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggDgIAAPASAJ0BKh0BvgA+7Xa3VqmnJSOgKAEwHYlnbt1ZpiB0Lm3cncAJ7APfbJyHvttLFcQqGWgAGbpFiXkWkqTHUKetCH3tvrTuOP7io7c4wPX0leT1qb486p7VesR+HPrikm1pmvQl9FRS9yb0N9roQ9rbcuG+dbbx2kjbT9hHLMTJZGrjR0pAtmyAahG6MCcqcXaNTImofhD77o/LE5p8HgAA/tZB/0f81viztS//i0P7ef8GvjOw3IuA03J253eREU9wXFfWCKcGHKlnVW1VPUUrP7IxSeUOjPheuzPGOgiVXPeFe60hiSdENKl7V8Sk5LCR1Ch2iOU6UuHJYdG8E8kBxjBxgW6gf53S/WAgb8FYgBzL5PSAWxgkT4Z957ixpFzkKMDLHf1vfWc+TPcAAY7C3D0BU5FHs2TmeZxWi4b5x7TONX8zWJfmSD1bzD3QPuLuyMa+o8BtVYM11/X+IhW/FrkznWCPHNqrFXuyUyjVizh42IlsrzJ/+ynVdClNyd2Gn7PM1wk1VeeNuJUEh7CGD1WmgM3awOhntlnRCEEN3PjKKPV4QBgs/VxxSNSoffeByiRKhwY+GbuySD5ZwHO7/zUKwarRPJaBuDj63M9vAyb16tbLTOcInZC1u2hfhFMnNUuA1qZpB+7VEyFKZPJeWBkQF3AeMnZgrDlXJoJWYu7jkDfoP8hhw/LzAAA="
                className="h-20 w-20 rounded-full drop-shadow-[0_0px_10px_rgba(0,0,0,0.2)]"
                sizes="calc(1.96vw + 75px)"
            />

            <div className='font-[700] text-2xl flex flex-row text-[rgba(255,255,255,0.85)] items-center gap-[0.4rem]'>
                <div>404 / Samet</div>
            </div>
        </div>
    )
}
