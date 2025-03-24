import Image from 'next/image'

export const FirstPart = () => {
    return (
        <div className="flex xxs:flex-col xxs:items-center md:flex-row gap-5">
            <Image
                width={500}
                height={500}
                src='https://avatars.githubusercontent.com/u/145053429?v=4'
                alt="pfp"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRkgDAABXRUJQVlA4WAoAAAAgAAAAcAAAcAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggWgEAAPANAJ0BKnEAcQA+6WikTb+/q6Iy9Kuz8B0JZ27f+rXT25tv8DOMw6rWnJ+OAqvGugX1RIyzVszBegdbBz5rAyyW1OdPdCjNsW14VeBQLUg9fuUjkIxLDeg2QuxjPNbBTsrt3wLbvZ25CDtMMxvEE6N8Jy+pIHfdgAD+8NDrRIfPyyx7I0mGTHT3t01WK5VsnpHexJ+Go4uTc+od+vzSPLGCi5rWSgc0YqgnFKKQxebGuR9mEWvGdUluNtc3mAj162AhkyRnSxo9nV9IXf1Jm7b7rxpgvOEBvIUQFbIMclqFXmh4oZa8GCTZ/EZO40/GCGKdqzEqOyH6Y+9ofT0t5Vye+pQH/H111ZGWXU9xwbgx4JuHFa9ikIzEwUoQaApplsR23TR52EO/zgsjpgg28GgaO3Fo5R8vN0VbIvd/OouesvzK5Lsv0q4PzpHifaARHefdvUFzH7BIAAA="
                className="h-20 w-20 rounded-full drop-shadow-[0_0px_10px_rgba(0,0,0,0.2)]"
                sizes="calc(1.96vw + 75px)"
            />
            <div className='font-[700] group text-2xl flex flex-row text-[rgba(255,255,255,0.85)] items-center gap-[0.4rem] lg:min-w-[15rem]'>
                <div>I'm </div><div className='group-hover:hidden'>Samet Alpdeger</div><div className='text-white hidden group-hover:flex animate-fade-down'>404!</div>
            </div>
        </div>
    )
}