import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['600'],
})

const HelloSection = () => {
  return (
    <div
      className={`${inter.className} flex w-full flex-col items-center justify-center gap-1 bg-[rgb(35,35,35)] p-5 text-[rgba(0,0,0,0.5)] shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)]`}
    >
      <div className="bg-gradient-to-tl from-cyan-600 to-green-300 bg-clip-text text-6xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] animate-once">
        {'HELLO'}
      </div>
      <div className="bg-gradient-to-r from-gray-500  to-gray-700 bg-clip-text text-2xl -tracking-wider text-transparent drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]">
        {"Let's look at who I am"}
      </div>
    </div>
  )
}

export default HelloSection
