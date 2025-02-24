import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['900'],
})

const Notfound = () => {
  return (
    <main

      className='flex  h-full w-full items-center justify-center bg-pink-400'
    >
      <div className={`${outfit.className} drop-shadow-[0_0px_3px_rgba(0,0,0,0.55)] text-4xl text-white`}>{`404 NOT FOUND :)`}</div>
    </main>
  )
}

export default Notfound
